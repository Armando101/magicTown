const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { dbConnection } = require("./database/config");
const path = require("path");

const app = express();

// Base de Datos
dbConnection();

//CORS
app.use(cors());

// Lecturas y Parseo del Body
app.use(express.json());

//Rutas
app.use("/api/auth", require("./routes/auth"));
app.use("/api/towns", require("./routes/towns"));
app.use("/api/users", require("./routes/users"));
app.use("/api/reviews", require("./routes/reviews"));
app.use("/api/favorites", require("./routes/favorites"));

// Escucha de Puertos
app.listen(process.env.PORT || 8080, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
