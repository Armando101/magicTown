const express = require("express");
const app = express();



// Lecturas y Parseo del Body
app.use(express.static("../dist"));

app.get('/', (req,res) =>{
    res.sendFile(__dirname + "/dist/index.html")
})



// Escucha de Puertos
app.listen( 8080, () => {
  console.log(`Servidor corriendo en puerto 8080`);
});