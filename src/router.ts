// vite-project/src/router.ts
import { initInicio } from "./page/inicio/index";
import { initNosotros } from "./page/nosotros/index";
import { initProceso } from "./page/proceso/index";
import { initMenu } from "./page/menu/index";
import { initGaleria } from "./page/galeria";
import { initContacto } from "./page/contacto/index";
type RouterPath = {
  pathRegex: RegExp;
  render: (params: { goTo: (path: string) => void }) => HTMLElement;
};
// Definicion de rutas, con trres ruedas de ejemplo
const routes: RouterPath[] = [
  {
    pathRegex: /^\/inicio$/i,
    render: () => {
      const page = initInicio();
      return page;
    },
  },
  {
    pathRegex: /^\/$/i,
    render: () => {
      const page = initInicio();
      return page;
    },
  },
  {
    pathRegex: /^\/nosotros$/i,
    render: () => {
      const page = initNosotros();
      return page;
    },
  },
  {
    pathRegex: /^\/proceso$/i,
    render: () => {
      const page = initProceso();
      return page;
    },
  },
  {
    pathRegex: /^\/menu$/i,
    render: () => {
      const page = initMenu();
      return page;
    },
  },
  {
    pathRegex: /^\/galeria$/i,
    render: () => {
      const page = initGaleria();
      return page;
    },
  },
  {
    pathRegex: /^\/contacto$/i,
    render: () => {
      const page = initContacto();
      return page;
    },
  },
];

// Funcion para renderizar rutas en una aplicación web simple
export function goTo(path: string): void {
  window.history.pushState({}, "", path);
  renderPath(path);
}
// recibe el ruta y renderiza el contenido
function renderPath(path: string): void {
  const route = routes.find((route) => route.pathRegex.test(path));

  if (route) {
    const app = document.querySelector(".root");
    if (app) {
      app.innerHTML = ""; // limpia el contenido previo
      app.appendChild(route.render({ goTo }));
    }
  } else {
    console.warn(`el path "${path}" no ha sido encontrado`);
  }
}

function getCleanPathFromURL() {
  const fullPath = window.location.pathname;
  const basepath = "/cafeteria"; // Cambia esto según tu repo

  if (fullPath.startsWith(basepath)) {
    return fullPath.replace(basepath, "") || "/"; // Devuelve '/' si el path es vacío
  }
  return fullPath; // Devuelve el fullPath sin cambios si no comienza con el basepath
}

// Inicializa el router
// Esta función se llama al cargar la aplicación para establecer la ruta inicial
export function initRouter(): void {
  const initialPath = getCleanPathFromURL();

  // Llama a renderPath con la ruta inicial.
  renderPath(initialPath);
}
