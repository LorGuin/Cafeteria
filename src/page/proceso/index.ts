export function initProceso() {
  const div = document.createElement("div");
  div.className = "init-proceso";
  div.innerHTML = `
    <header class="header header-proceso">
        <div class="contenido-header contenedor">
        <barra-menu></barra-menu>
        <div class="texto-header">
          <h1>Los verdaderos expertos del café</h1>
        </div>
    </header>

    <main class="contenedor contenido-principal">
       <div class="proceso-cafe">
            <div class="imagen">
              <img src="/img/proceso_1.jpg" alt="imagen proceso">
            </div>

            <div class="texto">
              <h3>Granos de Café</h3>
              <p>Seleccionamos los mejores granos de café de distintas regiones del mundo, asegurando calidad y sabor excepcionales en cada taza.</p>
            </div>
        </div>

       <div class="proceso-cafe">
            <div class="imagen">
              <img src="/img/proceso_2.jpg" alt="imagen proceso">
            </div>

            <div class="texto">
              <h3>Tostar el Café</h3>
              <p>Tostamos los granos de café con cuidado para obtener una textura suave y aromática.</p>
            </div>
        </div>

       <div class="proceso-cafe">
            <div class="imagen">
              <img src="/img/proceso_3.jpg" alt="imagen proceso">
            </div>

            <div class="texto">
              <h3>Empacar el Café</h3>
              <p>Empacamos cada taza de Café con cuidado para mantener su sabor y aroma intactos.</p>
            </div>
        </div>

       <div class="proceso-cafe">
            <div class="imagen">
              <img src="/img/proceso_4.jpg" alt="imagen proceso">
            </div>

            <div class="texto">
              <h3>Moler granos de Café</h3>
              <p>Molimos los granos de Café con cuidado para obtener una textura suave y aromática</p>
            </div>
        </div>

       <div class="proceso-cafe">
            <div class="imagen">
              <img src="/img/proceso_5.jpg" alt="imagen proceso">
            </div>

            <div class="texto">
              <h3>Disfrutar una taza de café</h3>
              <p>Seleccionamos los mejores granos de café de distintas regiones del mundo, asegurando calidad y sabor excepcionales en cada taza.</p>
            </div>
        </div>

    </main>
      
      <footer-cafeteria></footer-cafeteria>
      
    `;

  return div;
}
