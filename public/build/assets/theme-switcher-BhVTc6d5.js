class s{constructor(e){if(this.dropdown=null,this.dropdownBtns=null,typeof e=="string"&&(this.dropdown=document.querySelector(e)),e instanceof HTMLElement&&(this.dropdown=e),!e)throw new Error("No target element found");this.dropdown&&(this.dropdownBtns=this.dropdown.querySelectorAll("[data-theme-mode]")),this.dropdownBtns&&this.dropdownBtns.length&&(this.updateActiveClass(),[...this.dropdownBtns].forEach(t=>{t.addEventListener("click",()=>this.toggle(t))}))}toggle(e){const t=e.dataset.themeMode;t==="light"&&localStorage.setItem("theme","light"),t==="dark"&&localStorage.setItem("theme","dark"),t==="system"&&localStorage.removeItem("theme"),window.location.reload()}updateActiveClass(){[...this.dropdownBtns].forEach(e=>{e.classList.contains("active")&&e.classList.remove("active"),!localStorage.theme&&e.dataset.themeMode==="system"&&e.classList.add("active"),localStorage.theme===e.dataset.themeMode&&e.classList.add("active")})}}const d={init(){const o=document.querySelector("#theme-switcher-dropdown");o&&new s(o)}};export{d as t};
