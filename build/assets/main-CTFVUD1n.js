function o(e){const n=document.createElement("div");return n.className="init-page",n.innerHTML=`
    <header class="header header-inicio">
        <div class="contenido-header contenedor">
          <div class="logo">
               
          </div>

          <nav class="nav-principal">
            <a href="index.html">Inicio</a>
            <a href="nosotros.html">Nosotros</a>
            <a href="proceso.html">Proceso</a>
            <a href="menu.html">Menú</a>
            <a href="galeria.html">Galería</a>
            <a href="contacto.html">Contacto</a>
          </nav>
        </div>

        <div class="texto-header">
          <h1>Disfruta una deliciosa taza de café</h1>
        </div>
    </header>
    `,n.querySelector(".boton-inicio")?.addEventListener("click",()=>{e.goTo("/instrucciones")}),n}const i=[{pathRegex:/^\/inicio$/i,render:({goTo:e})=>o({goTo:e})},{pathRegex:/^\/$/i,render:({goTo:e})=>o({goTo:e})}];function r(e){window.history.pushState({},"",e),a(e)}function a(e){const n=i.find(t=>t.pathRegex.test(e));if(n){const t=document.querySelector(".root");t&&(t.innerHTML="",t.appendChild(n.render({goTo:r})))}else console.warn(`el path "${e}" no ha sido encontrado`)}function c(){const e=window.location.pathname,n="/cafeteria";return e.startsWith(n)?e.replace(n,"")||"/":e}function s(){const e=c();a(e)}(function(){document.addEventListener("DOMContentLoaded",()=>{s()})})();
