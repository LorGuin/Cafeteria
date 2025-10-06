export function initMenu() {
  const div = document.createElement("div");

  div.className = "init-menu";
  div.innerHTML = `
    <header class="header header-nosotros">
        <div class="contenido-header contenedor">
        <barra-menu></barra-menu>
        <div class="texto-header">
          <h1>Nuestro delicioso menú</h1>
        </div>
    </header>

    <main class="contenedor contenido-principal padding-bottom-0">
        <h2><span>Ultilizamos los</span>mejores ingredientes</h2>

        <div class="contenido-menu">
            <div class="texto">
                <p>En nuestra cafetería, nos enorgullece ofrecer un menú cuidadosamente elaborado que combina ingredientes frescos y de alta calidad para crear sabores excepcionales. Cada plato y bebida en nuestro menú ha sido diseñado para satisfacer los paladares más exigentes y brindar una experiencia culinaria inolvidable.</p>
            </div>
        </div>

    </main>
    
      <menu-cafeteria></menu-cafeteria>
 
      
      <footer-cafeteria></footer-cafeteria>
     
    `;

  return div;
}
