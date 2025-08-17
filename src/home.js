import refs from './js/refs';
import { getCategories,getProducts, getProductsByCategory } from './js/products-api';
import { categoriesTemplate, renderProductList} from './js/render-function';

async function initLoad() {
    const categoriesArr = await getCategories()
    const markup = categoriesTemplate(categoriesArr);
    refs.listEl.innerHTML = markup;
    const btns = document.querySelectorAll('.categories__btn');
    btns.forEach(btn => {
        console.log(btn.textContent);
        
        if (btn.textContent === 'All') {
            btn.classList.add('categories__btn--active');
        }
    })
    const productArr = await getProducts()
    console.log(productArr);
    renderProductList(productArr);
}
initLoad();
let lastActiveBtn = null;
refs.listEl.addEventListener('click', handleCategories);
async function handleCategories(e) {
    if (!e.target.classList.contains('categories__btn')) {
        return;
    }
    refs.notFound.classList.remove('not-found--visible');
    if (lastActiveBtn) {
        lastActiveBtn.classList.remove('categories__btn--active')
    }
    lastActiveBtn = e.target;
    const category = e.target.textContent;
    e.target.classList.add('categories__btn--active');
    let products = [];

    if (category === 'All') {
        products = await getProducts();
    } else {
        products = await getProductsByCategory(category);
    }
    if (products.length === 0) {
        refs.notFound.classList.add('not-found--visible');
    }
    renderProductList(products);
}

