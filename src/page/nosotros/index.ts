export function initNosotros() {
  const div = document.createElement("div");
  div.className = "init-nosotros";
  div.innerHTML = `
    <header class="header header-nosotros">
        <div class="contenido-header contenedor">
        <barra-menu></barra-menu>
        <div class="texto-header">
          <h1>Una nueva experiencia cada día</h1>
        </div>
    </header>

    <main class="contenedor contenido-principal text-center">
       <h2><span>Conoce más</span>sobre nosotros</h2>

       <div class="contenido-nosotros">
          <div class="imagen">
                <img src="../../img/nosotros_sidebar.jpg" alt="imagen nosotros">
          </div>
          <div class="texto">
                <p>En nuestra cafetería, nos apasiona ofrecer a nuestros clientes una experiencia única y memorable. Desde el primer sorbo de nuestro café artesanal hasta el último bocado de nuestros deliciosos postres, cada detalle está cuidadosamente diseñado para satisfacer los sentidos y crear momentos especiales.</p>

                <blockquote>
                  "La calidad no es un acto, es un hábito." - Aristóteles
                </blockquote>

                <p></p>Nuestro compromiso con la excelencia se refleja en cada taza de café que servimos. Trabajamos con granos de café de la más alta calidad, seleccionados cuidadosamente para garantizar un sabor excepcional. Nuestros baristas expertos dominan el arte de la preparación del café, creando bebidas que deleitan el paladar y despiertan los sentidos.</p>
            </div>
       </div>
    </main>
        
 
      
      <footer-cafeteria></footer-cafeteria>
     
    `;

  return div;
}
