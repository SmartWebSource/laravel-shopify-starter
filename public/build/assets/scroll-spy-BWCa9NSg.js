class n{constructor(t,e={}){if(typeof t=="string"&&(this.target=document.querySelector(t)),t instanceof HTMLElement&&(this.target=t),!this.target)throw new Error("No target element found");this.options={root:null,offset:0,threshold:.5,...e},this.links=this.target.querySelectorAll('a[href^="#"]');const r=[...this.links].map(s=>s.getAttribute("href"));this.sections=r.map(s=>document.querySelector(s)),this.observe()}observe(){const t=new IntersectionObserver(e=>{e.forEach(r=>{const s=r.target.getAttribute("id"),i=this.target.querySelector(`a[href="#${s}"]`);r.isIntersecting?i.classList.add("active"):i.classList.remove("active")})},this.options);this.sections.forEach(e=>{t.observe(e)})}}window.scrollSpy=function(o,t){return new n(o,t)};
