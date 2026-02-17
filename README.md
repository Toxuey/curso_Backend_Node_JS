# Curso Node.js: resumen del post (repaso futuro)

Este repo contiene 4 ejercicios de backend con Node.js puro (`http`), sin Express.
La idea es repasar fundamentos: servidor HTTP, rutas, `req`, `res`, JSON, metodo `POST`.

## Orden recomendado de estudio

1. `server.js`
2. `serverrutas.js`
3. `serverapi.js`
4. `server-post.js`

## Regla importante

Todos los archivos usan el puerto `3000`.
Ejecuta solo uno a la vez.

## Que hace cada archivo

### `server.js`

Primer servidor minimo.

- Responde siempre el mismo texto.
- Concepto principal: crear servidor y usar `res.end()`.

Ejecutar:

```bash
node server.js
```

Probar:

- `http://localhost:3000`

### `serverrutas.js`

Servidor con rutas basicas usando `if/else`.

- `GET /` -> `Pagina inicio`
- `GET /login` -> `Pagina login`
- `GET /api` -> `API backend`
- cualquier otra -> `404 no encontrado`

Concepto principal: leer `req.url` y responder segun ruta.

Ejecutar:

```bash
node serverrutas.js
```

### `serverapi.js`

Servidor que devuelve JSON en una ruta API.

- `GET /` -> `Servidor funcionando`
- `GET /api` -> objeto JSON (`nombre`, `rol`, `proyecto`, `backend`)
- otras rutas -> `404`

Conceptos principales:

- `res.setHeader("Content-Type", "application/json")`
- `JSON.stringify(...)` para enviar JSON

Ejecutar:

```bash
node serverapi.js
```

### `server-post.js`

Servidor que recibe datos con `POST`, procesa y responde JSON.

- Ruta objetivo: `POST /sumar`
- Recibe body JSON con `num1` y `num2`
- Calcula suma
- Devuelve `{ operacion: "suma", resultado: ... }`

Conceptos principales:

- `req.method`
- eventos `req.on("data")` y `req.on("end")`
- `JSON.parse(body)` para leer datos enviados

Ejecutar:

```bash
node server-post.js
```

## Pruebas rapidas

### Probar GET con navegador

- `http://localhost:3000/`
- `http://localhost:3000/login`
- `http://localhost:3000/api`

### Probar POST desde consola del navegador (F12)

```js
fetch("http://localhost:3000/sumar", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ num1: 10, num2: 5 })
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
```

### Probar POST con curl

```bash
curl -X POST http://localhost:3000/sumar \
  -H "Content-Type: application/json" \
  -d '{"num1":10,"num2":5}'
```

## Checklist de repaso (rapido)

- Entiendo diferencia entre `req` y `res`.
- Se leer `req.url` y `req.method`.
- Se responder texto y JSON.
- Se recibir body en `POST`.
- Se convertir JSON de entrada y salida (`JSON.parse` / `JSON.stringify`).
