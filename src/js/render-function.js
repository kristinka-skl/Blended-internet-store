import refs from './refs';
export function categoriesTemplate(categoriesArr) {
    categoriesArr.unshift('All');
    return categoriesArr.map(categoryTemplate).join('');
}
export function categoryTemplate(category) {
    return `<li class="categories__item">
   <button class="categories__btn" type="button">${category}</button>
 </li>
`
}