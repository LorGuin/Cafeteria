// 1. IMPORTA LOS ESTILOS USANDO '?inline'
import styles from "../../scss/app.scss?inline";

customElements.define(
  "footer-cafeteria",
  class extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
      // 2. CREA UNA ETIQUETA <style> E INYECTA LOS ESTILOS
      const style = document.createElement("style");
      style.innerHTML = styles;
      this.shadow.appendChild(style);

      const footer = document.createElement("footer");
      footer.className = "footer-cafeteria";
      footer.innerHTML = `
            <footer class="footer">
                    <div class="contenedor contenido-footer bg-white">
                        <div class="footer-box ubicacion">
                            <h3>Ubicación</h3>
                            <p>Vucetich 2914</p>
                            <p>Col. Santa María la Ribera, CDMX</p>
                        </div>
                    <div class="footer-box reservacion">
                        <h3>Reservación</h3>
                        <p>Tel: 55 1234 5678</p>
                        <a href="tel:5512345678">Llamar</a>
                    </div>
                    <div class="footer-box horario">
                        <h3>Horario</h3>
                        <p>Lun - Vie: 7:00 - 18:00</p>
                        <p>Sab: 8:00 - 15:00</p>
                        <p>Dom: 09:00 - 15:00</p>
                    </div>
                    </div>
                    <p class="copyright">Todos los derechos reservados. La Cafeteria</p>
                    
                  </footer>
            
        `;
      this.shadow.appendChild(footer);
    }
  }
);
