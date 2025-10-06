customElements.define(
  "barra-menu",
  class extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      //nota: el href debe ser relativo al index.html
      //creamos el href dinamicamente para inyectarlo en el shadow DOM
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "../../scss/app.scss";
      this.shadow.appendChild(link);

      const div = document.createElement("div");
      div.className = "barra-menu";
      div.innerHTML = `
        <div class="barra"> 
          <div class="logo">
               <img src="img/logo.svg" alt="logo cafeteria">
          </div>

          <nav class="nav-principal">
            <a class="boton-inicio">Inicio</a>
            <a class="boton-nosotros">Nosotros</a>
            <a class="boton-proceso">Proceso</a>
            <a class="boton-menu">Menú</a>
            <a class="boton-galeria ">Galería</a>
            <a class="boton-contacto">Contacto</a>
          </nav>
        </div>
        `;

      const buttonInicio = div.querySelector(".boton-inicio");

      buttonInicio?.addEventListener("click", () => {
        window.location.href = "/inicio";
      });
      const buttonNostros = div.querySelector(".boton-nosotros");

      buttonNostros?.addEventListener("click", () => {
        window.location.href = "/nosotros";
      });

      const buttonProceso = div.querySelector(".boton-proceso");

      buttonProceso?.addEventListener("click", () => {
        window.location.href = "/proceso";
      });

      const buttonMenu = div.querySelector(".boton-menu");

      buttonMenu?.addEventListener("click", () => {
        window.location.href = "/menu";
      });
      const buttonGaleria = div.querySelector(".boton-galeria");

      buttonGaleria?.addEventListener("click", () => {
        window.location.href = "/galeria";
      });
      const buttonContacto = div.querySelector(".boton-contacto");

      buttonContacto?.addEventListener("click", () => {
        window.location.href = "/contacto";
      });

      this.shadow.appendChild(div);
    }
  }
);
