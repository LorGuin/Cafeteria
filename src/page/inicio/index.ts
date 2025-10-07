export function initInicio() {
  const div = document.createElement("div");
  div.className = "init-page";
  div.innerHTML = `
    <header class="header header-inicio">
        <div class="contenido-header contenedor">
        <barra-menu></barra-menu>
        <div class="texto-header">
          <h1>Disfruta una deliciosa taza de café</h1>
        </div>
    </header>

    <main class="contenedor contenido-principal text-center">
      <section class="conoce">
        <h2><span>Conoce más</span>sobre nosotros</h2>

        <p>Crear un espacio donde los amantes del café puedan disfrutar de sabores excepcionales y momentos memorables. Nos esforzamos por brindar un servicio de calidad y un ambiente cálido que haga sentir a nuestros clientes como en casa.</p>
      </section>
      <section class="iconos">
        <ul class="listado-iconos">
          <li>
            <img src="/img/icono_cafe.svg" alt="icono café">
            <p>Café</p>
          </li>

          <li>
            <img src="/img/icono_postre.svg" alt="icono postre">
            <p>Postres</p>
          </li>

          <li>
            <img src="/img/icono_te.svg" alt="icono té">
            <p>Té</p>
          </li>
        </ul>
      </section>
      <section class="experiencia">
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
              <img src="/img/galeria/galeria_08.jpg" alt="galeria">
            </div>
            <div class="imagen">
              <img src="/img/galeria/galeria_09.jpg" alt="galeria">
              </div>
              <div class="imagen">
              <img src="/img/galeria/galeria_10.jpg" alt="galeria">
              </div>
              
              </section> 
            </main>
              
              <menu-cafeteria></menu-cafeteria>
      
      <section class="nuestros-testimoniales contenedor margin-negativo-10 bg-white">
        <h2><span>Lo que dicen nuestros</span>Clientes</h2>

        <div class="testimonial">
          <p>"Desde que descubrí la Cafetería Anónima, mi rutina diaria ha cambiado por completo. El ambiente es acogedor y el aroma del café recién hecho es irresistible. Cada vez que entro, me siento como en casa. La atención al cliente es excepcional y siempre tienen una sonrisa lista para ofrecer. Recomiendo probar su pastel de chocolate; es simplemente divino."</p>

          <p class="autor"> - Cristian Minni</p>
        </div>
        
      </section>
      
      <footer-cafeteria></footer-cafeteria>
      
    `;

  return div;
}
