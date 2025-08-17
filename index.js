import"./assets/styles-JE8YjOlG.js";import{a as o}from"./assets/vendor-N5iQpiFS.js";const s={listEl:document.querySelector(".categories"),productsListEl:document.querySelector(".products")},n=o.create({baseURL:"https://dummyjson.com/products"});async function c(){const t=await n.get("/category-list");return console.log(t),t.data}function a(t){return t.unshift("All"),t.map(r).join("")}function r(t){return`<li class="categories__item">
   <button class="categories__btn" type="button">${t}</button>
 </li>
`}async function i(){const t=await c(),e=a(t);s.listEl.innerHTML=e}i();
//# sourceMappingURL=index.js.map
