import"./assets/styles-JE8YjOlG.js";import{a as d}from"./assets/vendor-N5iQpiFS.js";const n={listEl:document.querySelector(".categories"),productsListEl:document.querySelector(".products"),notFound:document.querySelector("div.not-found")},r=d.create({baseURL:"https://dummyjson.com/products"});async function p(){const t=await r.get("/category-list");return console.log(t),t.data}async function i(t=1){return(await r.get(`?limit=12&skip=${(t-1)*12}`)).data.products}async function g(t,e=1){const s=await r.get(`/category/${t}?limit=12&skip=${(e-1)*12}`);return console.log(s.data.products),s.data.products}function _(t){return t.unshift("All"),t.map(m).join("")}function m(t){return`<li class="categories__item">
   <button class="categories__btn" type="button">${t}</button>
 </li>
`}function f({id:t,thumbnail:e,title:s,brand:c,category:o,price:u}){return`<li class="products__item" data-id="${t}">
    <img class="products__image" src="${e}" alt="${s}"/>
    <p class="products__title">${s}</p>
    <p class="products__brand"><span class="products__brand--bold">Brand:${c}</span></p>
    <p class="products__category">Category: ${o}</p>
    <p class="products__price">Price:${u} $</p>
 </li>
`}function l(t){console.log(t),n.productsListEl.innerHTML=t.map(f).join("")}async function y(){const t=await p(),e=_(t);n.listEl.innerHTML=e,document.querySelectorAll(".categories__btn").forEach(o=>{console.log(o.textContent),o.textContent==="All"&&o.classList.add("categories__btn--active")});const c=await i();console.log(c),l(c)}y();let a=null;n.listEl.addEventListener("click",b);async function b(t){if(!t.target.classList.contains("categories__btn"))return;n.notFound.classList.remove("not-found--visible"),a&&a.classList.remove("categories__btn--active"),a=t.target;const e=t.target.textContent;t.target.classList.add("categories__btn--active");let s=[];e==="All"?s=await i():s=await g(e),s.length===0&&n.notFound.classList.add("not-found--visible"),l(s)}
//# sourceMappingURL=index.js.map
