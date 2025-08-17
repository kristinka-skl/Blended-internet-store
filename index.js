import"./assets/styles-JE8YjOlG.js";import{a as i}from"./assets/vendor-N5iQpiFS.js";const c={listEl:document.querySelector(".categories"),productsListEl:document.querySelector(".products")},r=i.create({baseURL:"https://dummyjson.com/products"});async function u(){const t=await r.get("/category-list");return console.log(t),t.data}async function p(t=1){return(await r.get(`?limit=12&skip=${(t-1)*12}`)).data.products}function l(t){return t.unshift("All"),t.map(d).join("")}function d(t){return`<li class="categories__item">
   <button class="categories__btn" type="button">${t}</button>
 </li>
`}function m({id:t,thumbnail:o,title:s,brand:e,category:a,price:n}){return`<li class="products__item" data-id="${t}">
    <img class="products__image" src="${o}" alt="${s}"/>
    <p class="products__title">${s}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${e}</span></p>
    <p class="products__category">Category: ${a}</p>
    <p class="products__price">Price:${n} $</p>
 </li>
`}function _(t){c.productsListEl.innerHTML=t.map(m).join("")}async function g(){const t=await u(),o=l(t);c.listEl.innerHTML=o;const s=await p();console.log(s),_(s)}g();
//# sourceMappingURL=index.js.map
