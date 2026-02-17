const http = require("http");

const server = http.createServer((req, res) => {

  //console.log("Ruta:", req.url);

  if (req.url === "/") {
    res.end("Servidor funcionando");
    return;
  }

  if (req.url === "/api") {

    const data = { //Se crea un objeto JavaScript simulando datos reales del backend.
      nombre: "Cristian",
      rol: "admin",
      proyecto: "CrisLab",
      backend: true
    };

    res.setHeader("Content-Type", "application/json"); //Se le indica al navegador que la respuesta será en formato JSON.
    res.end(JSON.stringify(data)); //enviar datos JSON al navegador y cierrar la conexión
    return;
  }

  res.end("404");

});

server.listen(3000, () => {
  console.log("Servidor escuchando en puerto 3000");
});

/*
========================================
CÓDIGO BACKEND API
========================================

Este archivo crea un servidor backend básico usando Node.js puro
(sin frameworks como Express o Fastify). El servidor escucha peticiones
desde el navegador y responde según la ruta que el usuario visite.

----------------------------------------
1. IMPORTAR MÓDULO HTTP
----------------------------------------
const http = require("http");

Se importa el módulo interno "http" de Node.js.
Este módulo permite crear servidores web sin instalar librerías externas.

Node trae varios módulos internos:
- http → crear servidores
- fs → leer archivos
- path → rutas del sistema
- os → información del sistema

----------------------------------------
2. CREAR EL SERVIDOR
----------------------------------------
const server = http.createServer((req, res) => {

Aquí se crea el servidor.

La función se ejecuta CADA VEZ que alguien entra desde el navegador.

Parámetros importantes:
req = request → información que llega del usuario
res = response → lo que el servidor responderá

req contiene:
- ruta solicitada (req.url)
- método (GET, POST, etc.)
- headers
- navegador del usuario
- ip

res permite:
- enviar texto
- enviar JSON
- enviar errores
- cerrar la respuesta

----------------------------------------
3. VER LA RUTA QUE LLEGA
----------------------------------------
console.log("Ruta:", req.url);

Muestra en consola la ruta que el usuario visita.

Ejemplo:
Si el usuario entra a:
http://localhost:3000/api

La terminal mostrará:
Ruta: /api

Esto ayuda a depurar y entender qué peticiones llegan.

----------------------------------------
4. RUTA PRINCIPAL "/"
----------------------------------------
if (req.url === "/") {
  res.end("Servidor funcionando");
  return;
}

Si el usuario entra a:
http://localhost:3000/

El servidor responde:
"Servidor funcionando"

res.end() envía la respuesta y cierra la conexión.
Después de res.end() no se puede volver a enviar otra respuesta.

El "return" evita que el código siga ejecutándose.

----------------------------------------
5. RUTA /api (SIMULACIÓN DE API REAL)
----------------------------------------
if (req.url === "/api") {

Si el usuario entra a:
http://localhost:3000/api

Se ejecuta este bloque.

----------------------------------------
6. DATOS DEL BACKEND
----------------------------------------
const data = {
  nombre: "Cristian",
  rol: "admin",
  proyecto: "CrisLab",
  backend: true
};

Se crea un objeto JavaScript simulando datos reales del backend.
En una aplicación real estos datos vendrían de:
- base de datos
- Supabase
- usuarios
- etc.

----------------------------------------
7. INDICAR QUE SE ENVIARÁ JSON
----------------------------------------
res.setHeader("Content-Type", "application/json");

Se le indica al navegador que la respuesta será en formato JSON.
Esto es importante para APIs modernas.

----------------------------------------
8. ENVIAR DATOS JSON
----------------------------------------
res.end(JSON.stringify(data));
return;

JSON.stringify convierte el objeto JavaScript a texto JSON.
res.end envía la respuesta al navegador y cierra la conexión.

Solo se puede enviar una respuesta por cada request.

----------------------------------------
9. RUTA NO ENCONTRADA
----------------------------------------
res.end("404");

Si la ruta no coincide con ninguna anterior,
el servidor responde "404".

En backends reales se maneja con códigos de estado:
404 → no encontrado
500 → error servidor
200 → correcto

----------------------------------------
10. ENCENDER EL SERVIDOR
----------------------------------------
server.listen(3000, () => {
  console.log("Servidor escuchando en puerto 3000");
});

El servidor se inicia en el puerto 3000.

Se puede acceder desde el navegador en:
http://localhost:3000

Mientras la terminal esté abierta, el servidor sigue funcionando.
Si se cierra la terminal, el servidor se detiene.

----------------------------------------
CONCEPTO CLAVE BACKEND
----------------------------------------
Cada vez que el navegador entra:
→ se ejecuta esta función
→ el servidor analiza la ruta
→ responde según la lógica definida

Esto es la base de cualquier backend moderno.
Frameworks como Express o Fastify solo automatizan este proceso.
*/
