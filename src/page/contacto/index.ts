export function initContacto() {
  const div = document.createElement("div");

  div.className = "init-contacto";
  div.innerHTML = `
    <header class="header header-contacto">
        <div class="contenido-header contenedor">
        <barra-menu></barra-menu>
        <div class="texto-header">
          <h1>Mejores granos, mejor café</h1>
        </div>
    </header>

    <main class="contenedor contenido-principal">
       <h2><span>Reserva tu</span>Mesa</h2>

       <div class="contenido-contacto">
            <form class="formulario">
                <div class="campo">
                    <label for="nombre">Nombre:</label>
                    <input type="text" id="nombre" placeholder="Tu nombre" required>
                </div>
                <div class="campo">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="Tu email" required>
                </div>
                <div class="campo">
                    <label for="seleccionar">Número de Personas</label>
                    <select>
                        <option value="" disabled selected>-- Selecciona --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="mas">+5</option>
                    </select>
                </div>
                <div class="campo">
                    <label for="hora">Hora:</label>
                    <input type="time" id="hora" max="22:00" min="08:00" required>
                </div>
                <div class="campo">
                    <label for="fecha">Fecha:</label>
                    <input type="date" id="fecha" required>
                </div>
                <div class="campo">
                    <input type="submit" value="Reservar Mesa">
                </div>
            </form>
       </div>
    </main>
        
      <footer-cafeteria></footer-cafeteria>
     
    `;

  return div;
}
