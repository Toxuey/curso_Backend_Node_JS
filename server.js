/*
========================================
PRIMER SERVIDOR BACKEND
========================================

para ejecutar el servidor:
node server.js

Luego, en el navegador, entra a:
http://localhost:3000
*/

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hola Cristian, este es tu primer backend 🚀");
});

server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

/*
Este es el servidor más básico que se puede crear con Node.js.
Permite responder a cualquier usuario que entre desde el navegador.

----------------------------------------
1. IMPORTAR EL MÓDULO HTTP
----------------------------------------
const http = require("http");

Se importa el módulo interno "http" de Node.js.
Este módulo permite crear servidores web sin instalar librerías externas.

Node.js incluye módulos internos que ya vienen listos para usar,
por lo que no es necesario instalar nada adicional para crear un servidor.

----------------------------------------
2. CREAR EL SERVIDOR
----------------------------------------
const server = http.createServer((req, res) => {
  res.end("Hola Cristian, este es tu primer backend 🚀");
});

Aquí se crea el servidor HTTP.

La función dentro de createServer se ejecuta cada vez que
alguien entra al servidor desde un navegador o aplicación.

Parámetros importantes:
req = request → información que llega del usuario
res = response → lo que el servidor responde

Cada vez que alguien entra a:
http://localhost:3000

El servidor ejecuta esta función y responde con el texto:

"Hola Cristian, este es tu primer backend 🚀"

----------------------------------------
3. RESPUESTA DEL SERVIDOR
----------------------------------------
res.end("Hola Cristian, este es tu primer backend 🚀");

res.end() envía la respuesta al navegador y cierra la conexión.

Esto significa:
→ el servidor recibe la petición
→ responde con ese mensaje
→ finaliza la respuesta

Cada request solo puede tener una respuesta.
Después de usar res.end() no se puede volver a enviar otra.

----------------------------------------
4. ENCENDER EL SERVIDOR
----------------------------------------
server.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});

server.listen inicia el servidor en el puerto 3000.

El puerto es como la "puerta" por donde entran las peticiones.
El servidor queda disponible en:

http://localhost:3000

Cuando el servidor se inicia correctamente,
muestra en la terminal el mensaje:

"Servidor corriendo en http://localhost:3000"

----------------------------------------
5. CÓMO FUNCIONA EN LA PRÁCTICA
----------------------------------------
1. Ejecutas el archivo con:
   node server.js

2. Node enciende el servidor en el puerto 3000

3. Abres el navegador y entras a:
   http://localhost:3000

4. El servidor recibe la petición

5. Ejecuta la función createServer

6. Responde con el mensaje definido

7. El navegador muestra el texto

----------------------------------------
CONCEPTO CLAVE
----------------------------------------
Este es el backend más básico posible.

El servidor:
- espera peticiones
- responde con un mensaje
- permanece encendido escuchando usuarios

Todos los frameworks de backend (Express, Fastify, etc.)
funcionan sobre este mismo principio, pero con más herramientas
y organización para proyectos grandes.
*/
