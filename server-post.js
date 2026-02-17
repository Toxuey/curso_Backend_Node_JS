/*
=========================================================
SERVIDOR POST QUE RECIBE Y PROCESA DATOS
=========================================================
*/

const http = require("http");

const server = http.createServer((req, res) => {

  console.log("Ruta:", req.url);
  console.log("Metodo:", req.method);

  // SOLO si es POST y ruta /sumar
  if (req.url === "/sumar" && req.method === "POST") {

    let body = "";

    // recibir datos en partes
    req.on("data", chunk => {
      body += chunk.toString();
    });

    // cuando termina de recibir
    req.on("end", () => {
      console.log("Datos recibidos:", body);

      const datos = JSON.parse(body);

      const num1 = datos.num1;
      const num2 = datos.num2;

      const resultado = num1 + num2;

      const respuesta = {
        operacion: "suma",
        resultado: resultado
      };

      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(respuesta));
    });

    return;
  }

  res.end("Servidor activo");
});

server.listen(3000, () => {
  console.log("Servidor POST en http://localhost:3000");
});

/*
========================================
Este servidor backend permite:
1. Recibir datos enviados desde el navegador (POST)
2. Procesarlos en el backend (sumar dos números)
3. Devolver una respuesta en JSON

Este flujo es la base de cualquier API real:
- login
- registro
- tickets
- comentarios
- formularios
- etc.

Se ejecuta con:
node server-post.js

=========================================================
1. IMPORTAR MÓDULO HTTP
=========================================================
const http = require("http");

Se importa el módulo interno "http" de Node.js.
Este módulo permite crear servidores sin instalar librerías externas.

=========================================================
2. CREAR EL SERVIDOR
=========================================================
const server = http.createServer((req, res) => {

Esta función se ejecuta cada vez que un usuario o app
envía una petición al servidor.

Parámetros:
req = request → lo que envía el usuario
res = response → lo que responde el servidor

=========================================================
3. VER INFORMACIÓN DE LA PETICIÓN
=========================================================
console.log("Ruta:", req.url);
console.log("Metodo:", req.method);

Se imprime en consola:
- la ruta solicitada
- el método HTTP (GET, POST, etc.)

Ejemplo cuando usamos POST:
Ruta: /sumar
Metodo: POST

Esto permite saber qué tipo de petición llega.

=========================================================
4. VALIDAR RUTA Y MÉTODO
=========================================================
if (req.url === "/sumar" && req.method === "POST") {

Aquí se valida que:
- la ruta sea /sumar
- el método sea POST

Solo si se cumplen ambos, el backend procesará los datos.

Esto es importante porque:
GET = pedir datos
POST = enviar datos

=========================================================
5. VARIABLE PARA GUARDAR DATOS
=========================================================
let body = "";

Cuando el frontend envía datos,
Node los recibe en partes (chunks).
Por eso se crea una variable vacía para unirlos.

=========================================================
6. RECIBIR DATOS EN PARTES
=========================================================
req.on("data", chunk => {
  body += chunk.toString();
});

El evento "data" se ejecuta cada vez que llega un fragmento
de datos desde el navegador.

chunk = pedazo de información enviada.
Se convierte a texto y se acumula en la variable body.

=========================================================
7. CUANDO TERMINA DE RECIBIR
=========================================================
req.on("end", () => {

Este evento se ejecuta cuando el backend ya recibió
todos los datos enviados por el frontend.

Aquí ya se puede procesar la información completa.

=========================================================
8. MOSTRAR DATOS RECIBIDOS
=========================================================
console.log("Datos recibidos:", body);

Muestra en consola el JSON enviado por el navegador.

Ejemplo:
{"num1":10,"num2":5}

=========================================================
9. CONVERTIR TEXTO JSON A OBJETO JS
=========================================================
const datos = JSON.parse(body);

El body llega como texto.
JSON.parse convierte ese texto en objeto JavaScript
para poder usar sus valores.

Ahora se puede acceder así:
datos.num1
datos.num2

=========================================================
10. OBTENER LOS NÚMEROS
=========================================================
const num1 = datos.num1;
const num2 = datos.num2;

Se extraen los valores enviados desde el frontend.

=========================================================
11. PROCESAMIENTO EN BACKEND
=========================================================
const resultado = num1 + num2;

Aquí el backend realiza la operación.
En apps reales podría ser:
- validar usuario
- guardar en base de datos
- calcular valores
- verificar permisos

=========================================================
12. CREAR RESPUESTA
=========================================================
const respuesta = {
  operacion: "suma",
  resultado: resultado
};

Se crea un objeto con la respuesta que se enviará al frontend.

=========================================================
13. INDICAR QUE SE ENVIARÁ JSON
=========================================================
res.setHeader("Content-Type", "application/json");

Se le indica al navegador que la respuesta será JSON.

=========================================================
14. ENVIAR RESPUESTA
=========================================================
res.end(JSON.stringify(respuesta));

Se convierte el objeto a texto JSON
y se envía al navegador.

El navegador recibe:
{ operacion: "suma", resultado: 15 }

=========================================================
15. RETURN PARA DETENER EJECUCIÓN
=========================================================
return;

Se usa return para evitar que el servidor siga ejecutando
otras respuestas después de enviar esta.

=========================================================
16. RESPUESTA POR DEFECTO
=========================================================
res.end("Servidor activo");

Si la ruta no es /sumar o no es POST,
el servidor responde "Servidor activo".

=========================================================
17. ENCENDER EL SERVIDOR
=========================================================
server.listen(3000, () => {
  console.log("Servidor POST en http://localhost:3000");
});

Inicia el servidor en el puerto 3000.

Se accede desde:
http://localhost:3000

=========================================================
RESUMEN GENERAL
=========================================================
Este servidor backend:
- recibe datos desde el navegador
- lee JSON enviado
- procesa información
- devuelve respuesta JSON

Este flujo es la base de:
- sistemas de login
- APIs
- SaaS
- dashboards
- aplicaciones modernas

Todos los backends reales funcionan con este mismo principio.

=========================================================
ENVIAR DATOS DESDE EL NAVEGADOR
=========================================================

El navegador normal no envía POST directo escribiendo URL.
Usaremos la consola del navegador.

Abre Chrome → F12 → consola.

Pega esto:

fetch("http://localhost:3000/sumar", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ num1: 10, num2: 5 })
})
.then(res => res.json())
.then(data => console.log("Respuesta del backend:", data))
.catch(err => console.error("Error:", err));

Esto envía una petición POST a nuestro servidor con los números 10 y 5.

El backend procesa la suma y responde con:
{ operacion: "suma", resultado: 15 }

Puedes cambiar los números para probar diferentes resultados.

/*
=========================================================
EXPLICACIÓN DEL FETCH — ENVIAR DATOS AL BACKEND (POST)
=========================================================

Este código se ejecuta desde el navegador (consola o frontend)
y permite enviar datos al backend usando el método POST.

El objetivo:
- Enviar dos números al backend
- El backend los procesa (suma)
- El backend devuelve el resultado
- El navegador recibe y muestra la respuesta

Este flujo es el mismo que usan:
- formularios de login
- creación de usuarios
- envío de tickets
- comentarios
- APIs modernas

=========================================================
1. USAR FETCH PARA CONECTAR AL BACKEND
=========================================================
fetch("http://localhost:3000/sumar", {

fetch es una función del navegador que permite hacer peticiones HTTP
a un servidor o backend.

Aquí se está enviando una petición al backend que corre en:
http://localhost:3000

Ruta específica:
/sumar

Es decir:
Frontend → envía datos → backend /sumar

=========================================================
2. DEFINIR MÉTODO HTTP
=========================================================
method: "POST",

Se especifica que se enviará información al backend.

GET  → solo pedir datos
POST → enviar datos
PUT  → actualizar
DELETE → eliminar

POST se usa para:
- login
- registros
- formularios
- creación de datos

=========================================================
3. HEADERS (TIPO DE DATOS)
=========================================================
headers: {
  "Content-Type": "application/json"
},

Se indica al backend que los datos enviados estarán en formato JSON.

Esto es muy importante porque el backend debe saber
cómo interpretar lo que recibe.

Sin este header, el backend podría no entender los datos.

=========================================================
4. BODY (DATOS ENVIADOS)
=========================================================
body: JSON.stringify({
  num1: 10,
  num2: 5
})

Aquí se envían los datos al backend.

El body siempre debe enviarse como texto,
por eso se usa JSON.stringify.

Se crea un objeto JavaScript:
{
  num1: 10,
  num2: 5
}

JSON.stringify lo convierte a texto JSON:
{"num1":10,"num2":5}

Ese texto viaja al backend.

=========================================================
5. RESPUESTA DEL BACKEND
=========================================================
.then(res => res.json())

El backend responde con JSON.

res.json() convierte la respuesta recibida en objeto JavaScript
para poder usarla en el navegador.

=========================================================
6. MOSTRAR RESULTADO EN CONSOLA
=========================================================
.then(data => console.log(data));

Cuando llega la respuesta del backend,
se imprime en la consola del navegador.

Ejemplo de respuesta:
{
  operacion: "suma",
  resultado: 15
}

Esto significa que:
- el backend recibió los números
- realizó la suma
- devolvió el resultado

=========================================================
FLUJO COMPLETO
=========================================================
1. El navegador ejecuta fetch
2. Se envía POST al backend
3. El backend recibe datos
4. El backend procesa
5. El backend responde JSON
6. El navegador recibe respuesta
7. Se muestra en consola

=========================================================
CONCEPTO CLAVE
=========================================================
fetch es la forma en que el frontend se comunica
con el backend.

Toda aplicación moderna funciona así:
Frontend (React, web, app móvil)
→ envía fetch/axios
→ backend procesa
→ backend responde JSON
→ frontend muestra datos
*/
