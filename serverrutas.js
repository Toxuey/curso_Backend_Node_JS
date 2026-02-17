/*
========================================
PRIMER SERVIDOR BACKEND
========================================

para ejecutar el servidor:
node serverrutas.js

Luego, en el navegador, entra a:
http://localhost:3000 y http://localhost:3000/login y http://localhost:3000/api y http://localhost:3000/otro
*/

const http = require("http"); //Módulo interno de Node.
const server = http.createServer((req, res) => { //Cada vez que alguien entra al navegador → se ejecuta esa función.

  /*
    req = request
    Información del usuario que entra:
    ruta
    navegador
    headers
    */
   
  console.log("Ruta:", req.url); //Node imprime cada petición que llega al servidor.

  if (req.url === "/") { //localhost:3000/
    res.end("Pagina inicio"); //res = response Lo que tu backend responde. (responde con un mensaje de texto Pagina inicio)
  } else if (req.url === "/login") { //localhost:3000/login
    res.end("Pagina login"); //responde con un mensaje de texto Pagina login
  } else if (req.url === "/api") { //localhost:3000/api
    res.end("API backend"); //responde con un mensaje de texto API backend
  } else {
    res.end("404 no encontrado"); //responde con un mensaje de texto 404 no encontrado (si el usuario entra a una ruta que no existe)
  }

});

server.listen(3000, () => { //listen = puerto localhost:3000
  console.log("Servidor escuchando en el puerto 3000");
});

/*
Este archivo crea un servidor backend básico usando Node.js puro.
Permite responder diferente según la ruta que el usuario visite
desde el navegador.

Se ejecuta desde la terminal con:
node server.js

Luego se accede desde el navegador en:
http://localhost:3000

----------------------------------------
1. IMPORTAR EL MÓDULO HTTP
----------------------------------------
const http = require("http");

Se importa el módulo interno "http" de Node.js.
Este módulo permite crear servidores web sin instalar librerías externas.

Node ya incluye este módulo por defecto.

----------------------------------------
2. CREAR EL SERVIDOR
----------------------------------------
const server = http.createServer((req, res) => {

Se crea el servidor web.

La función dentro de createServer se ejecuta cada vez que
un usuario entra desde el navegador o desde otra aplicación.

Parámetros importantes:
req = request → información que envía el usuario
res = response → lo que el servidor responde

----------------------------------------
3. INFORMACIÓN QUE LLEGA EN "req"
----------------------------------------
req contiene datos de la petición del usuario como:
- la ruta solicitada (req.url)
- el navegador
- headers
- método (GET, POST, etc.)

Esto permite al backend tomar decisiones según la petición.

----------------------------------------
4. VER LA RUTA EN LA TERMINAL
----------------------------------------
console.log("Ruta:", req.url);

Muestra en la terminal cada ruta que el usuario visita.

Ejemplo:
Si el usuario entra a:
http://localhost:3000/login

La terminal mostrará:
Ruta: /login

También aparecerán rutas automáticas del navegador como:
/favicon.ico (icono del navegador)

Esto ayuda a entender qué peticiones llegan al servidor.

----------------------------------------
5. MANEJO DE RUTAS CON IF
----------------------------------------
El servidor responde diferente según la ruta.

----------------------------------------
RUTA PRINCIPAL "/"
----------------------------------------
if (req.url === "/") {
  res.end("Pagina inicio");
}

Si el usuario entra a:
http://localhost:3000/

El servidor responde:
"Pagina inicio"

res.end() envía la respuesta al navegador y cierra la conexión.

----------------------------------------
RUTA LOGIN "/login"
----------------------------------------
else if (req.url === "/login") {
  res.end("Pagina login");
}

Si el usuario entra a:
http://localhost:3000/login

El servidor responde:
"Pagina login"

----------------------------------------
RUTA API "/api"
----------------------------------------
else if (req.url === "/api") {
  res.end("API backend");
}

Si el usuario entra a:
http://localhost:3000/api

El servidor responde:
"API backend"

Esta ruta simula una API de backend.

----------------------------------------
RUTA NO EXISTENTE (404)
----------------------------------------
else {
  res.end("404 no encontrado");
}

Si el usuario entra a una ruta que no existe,
por ejemplo:
http://localhost:3000/otro

El servidor responde:
"404 no encontrado"

Esto indica que la ruta no está definida.

----------------------------------------
CONCEPTO IMPORTANTE
----------------------------------------
Cada request solo puede tener una respuesta.
res.end() envía la respuesta y finaliza la conexión.

El uso de if / else if evita enviar múltiples respuestas.

----------------------------------------
6. ENCENDER EL SERVIDOR
----------------------------------------
server.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});

server.listen inicia el servidor en el puerto 3000.

El servidor queda disponible en:
http://localhost:3000

Mientras la terminal esté abierta,
el servidor seguirá funcionando.

Si se cierra la terminal,
el servidor se detiene.

----------------------------------------
RESUMEN GENERAL
----------------------------------------
Este servidor backend:
- escucha peticiones del navegador
- detecta la ruta solicitada
- responde según la ruta
- muestra las peticiones en consola

Es la base de cualquier backend moderno.
Frameworks como Express o Fastify funcionan
sobre este mismo principio, pero con más herramientas
para proyectos grandes.
*/
