import { initRouter } from "./router";
import "./scss/app.scss";
import "./components/barra-menu";
import "./components/menu";
import "./components/footer";

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    initRouter(); // Inicializa el router una vez que el DOM esté listo
  });
})();
