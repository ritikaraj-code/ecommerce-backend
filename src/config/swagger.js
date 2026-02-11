import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-Commerce Backend API",
      version: "1.0.0",
      description: "Production-ready E-commerce API"
    },
    servers: [{ url: "http://localhost:5000" }]
  },
  apis: ["./src/routes/*.js"]
};

export const swaggerSpec = swaggerJSDoc(options);
