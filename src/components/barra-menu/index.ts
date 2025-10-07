// Importa la función goTo de tu router y los estilos CSS
import { goTo } from "../../router"; // Asegúrate de que la ruta a tu router.ts sea correcta
import styles from "../../scss/app.scss?inline"; // Importa los estilos para inyectarlos

customElements.define(
  "barra-menu",
  class extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      // 1. Inyecta los estilos CSS procesados por Vite
      const style = document.createElement("style");
      style.innerHTML = styles;
      this.shadow.appendChild(style);

      const div = document.createElement("div");
      div.className = "barra-menu";
      div.innerHTML = `
        <div class="barra"> 
          <div class="logo">
              <img src="/src/img/logo.svg" alt="logo cafeteria">
          </div>

          <nav class="nav-principal">
              <a href="/inicio" data-path="/inicio">Inicio</a>
              <a href="/nosotros" data-path="/nosotros">Nosotros</a>
              <a href="/proceso" data-path="/proceso">Proceso</a>
              <a href="/menu" data-path="/menu">Menú</a>
              <a href="/galeria" data-path="/galeria">Galería</a>
              <a href="/contacto" data-path="/contacto">Contacto</a>
          </nav>
        </div>
        `;

      this.shadow.appendChild(div);

      // 4. Refactorización de Event Listeners (más eficiente)
      const nav = this.shadow.querySelector(".nav-principal");
      nav?.addEventListener("click", (e) => {
        e.preventDefault(); // Previene la navegación por defecto del navegador
        const target = e.target as HTMLAnchorElement;

        // Usamos la función goTo del router para una navegación fluida sin recargar
        if (target.matches("a")) {
          const path = target.dataset.path;
          if (path) {
            goTo(path);
          }
        }
      });
    }
  }
);
