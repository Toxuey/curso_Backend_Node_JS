# 🚀 Curso Backend Node.js — Fundamentos

Este repositorio documenta mi aprendizaje práctico de backend con Node.js desde cero, entendiendo cómo funciona un servidor real sin frameworks como Express o Fastify.

El objetivo es comprender primero las bases del backend antes de usar frameworks modernos.

---

# 🧠 ¿Qué se ha aprendido hasta ahora?

En esta primera etapa se construyeron servidores backend básicos usando Node.js puro, entendiendo:

- Cómo funciona un servidor HTTP
- Cómo llegan las peticiones desde el navegador
- Qué es req (request)
- Qué es res (response)
- Cómo manejar rutas
- Cómo enviar respuestas al frontend
- Cómo enviar y recibir JSON
- Cómo funciona GET y POST

Todo sin frameworks externos.

---

# 📁 Archivos del proyecto

## server.js  
Servidor básico con Node.js que responde según la ruta.

Permite:
- Ruta "/" → página inicio  
- Ruta "/login" → página login  
- Ruta "/api" → respuesta backend  
- Ruta no existente → 404  

---

## server-post.js  
Servidor que recibe datos enviados desde el navegador usando POST.

Permite:
- Enviar dos números desde el frontend
- El backend los recibe
- El backend realiza una suma
- Devuelve el resultado en JSON

---

# 🧪 Ejemplo de prueba

Abrir consola del navegador (F12) y ejecutar:

```js
fetch("http://localhost:3000/sumar", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    num1: 10,
    num2: 5
  })
})
.then(res => res.json())
.then(data => console.log(data));
