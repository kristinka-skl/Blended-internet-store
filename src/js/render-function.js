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

export function productItem({id, 
thumbnail, title, brand, category, price}) {
    return `<li class="products__item" data-id="${id}">
    <img class="products__image" src="${thumbnail}" alt="${title}"/>
    <p class="products__title">${title}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${brand}</span></p>
    <p class="products__category">Category: ${category}</p>
    <p class="products__price">Price:${price} $</p>
 </li>
`
}

export function renderProductList(products) {
    console.log(products);
    
    refs.productsListEl.innerHTML = products.map(productItem).join('');
}

