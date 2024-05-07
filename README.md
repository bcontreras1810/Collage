<h1>Collage App</h1>
<p>Este proyecto es una aplicación para crear collages. Permite a los usuarios subir imágenes, organizarlas en un collage y eliminarlas según sea necesario.</p>
<h2>Requisitos</h2>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>express-fileupload</li>
</ul>
<h2>Instalación</h2>
<p>Para instalar y ejecutar la aplicación, sigue estos pasos:</p>
<ol>
  <li>Clona el repositorio en tu máquina local:git clone https://github.com/bcontreras1810/Collage.git</li>
</ol>
<ol start="2">
  <li>Instala las dependencias del proyecto:npm install</li>
</ol>
<ol start="3">
  <li>Ejecuta el servidor:node server.js </li>
</ol>
<h2>Uso</h2>
<p>Una vez que el servidor esté en funcionamiento, puedes acceder a la aplicación en tu navegador a través de la siguiente URL:http://localhost:3000</p>                                                  
<h2>Rutas</h2>
<ul>
  <li><strong>GET /</strong>: Renderiza el formulario para subir imágenes.</li>
  <li><strong>GET /collage</strong>: Renderiza la página del collage.</li>
  <li><strong>POST /imagen</strong>: Sube una imagen y la almacena en el servidor.</li>
  <li><strong>DELETE /imagen/:nombre</strong>: Elimina una imagen del servidor.</li>
</ul>
