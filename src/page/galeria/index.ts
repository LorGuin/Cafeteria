export function initGaleria() {
  const div = document.createElement("div");

  div.className = "init-galeria";
  div.innerHTML = `
    <header class="header header-galeria">
        <div class="contenido-header contenedor">
        <barra-menu></barra-menu>
        <div class="texto-header">
          <h1>Los verdaderos expertos del café</h1>
        </div>
    </header>

    <main class="contenedor contenido-principal">
      
        <h2><span>Vive la</span> experiencia </h2>
          
          <div class="galeria">

            <div class="imagen">
              <img src="/img/galeria/galeria_01.jpg" alt="galeria">
              </div>
            <div class="imagen">
              <img src="/img/galeria/galeria_02.jpg" alt="galeria">
            </div>
            <div class="imagen">
              <img src="/img/galeria/galeria_03.jpg" alt="galeria">
            </div>
            <div class="imagen">
              <img src="/img/galeria/galeria_04.jpg" alt="galeria">
            </div>
            <div class="imagen">
              <img src="/img/galeria/galeria_05.jpg" alt="galeria">
            </div>
            <div class="imagen">
              <img src="/img/galeria/galeria_06.jpg" alt="galeria">
            </div>
            <div class="imagen">
              <img src="/img/galeria/galeria_07.jpg" alt="galeria">
            </div>
            <div class="imagen">
              <img src="/src/img/galeria/galeria_08.jpg" alt="galeria">
            </div>
            <div class="imagen">
              <img src="/img/galeria/galeria_09.jpg" alt="galeria">
              </div>
              <div class="imagen">
              <img src="/img/galeria/galeria_10.jpg" alt="galeria">
              </div>
    </main>
      
      <footer-cafeteria></footer-cafeteria>
      
    `;

  return div;
}
