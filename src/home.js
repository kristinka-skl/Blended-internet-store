import refs from './js/refs';
import { getCategories,getProducts } from './js/products-api';
import { categoriesTemplate, renderProductList} from './js/render-function';

async function initLoad() {
    const categoriesArr = await getCategories()
    const markup = categoriesTemplate(categoriesArr);
    refs.listEl.innerHTML = markup;
    const productArr = await getProducts()
    console.log(productArr);
    renderProductList(productArr);
}
initLoad();

