const fastify = require("fastify")({ logger: true });

// frases demo
const frases = [
  "El código limpio es poesía",
  "Primero funciona, luego optimiza",
  "Un buen backend no se ve, pero se siente",
  "Programar es pensar"
];

// ruta principal
fastify.get("/", async (request, reply) => {
  return {
    api: "CrisLab Public API",
    version: "1.0",
    endpoints: ["/hora", "/random", "/frase"],
    message: "Bienvenido a la API pública de CrisLab"
  };
});

// hora actual
fastify.get("/hora", async (request, reply) => {
  return {
    fecha: new Date().toLocaleString(),
    timestamp: Date.now()
  };
});

// número random
fastify.get("/random", async (request, reply) => {
  return {
    numero: Math.floor(Math.random() * 100)
  };
});

// frases
fastify.get("/frase", async (request, reply) => {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  return { frase };
});

// iniciar servidor
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Servidor Fastify en:", address);
});