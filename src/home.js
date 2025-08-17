import refs from './js/refs';
import { getCategories } from './js/products-api';
import { categoriesTemplate } from './js/render-function';

async function initLoad() {
    const categoriesArr = await getCategories()
    const markup = categoriesTemplate(categoriesArr);
    refs.listEl.innerHTML = markup;
}
initLoad();