const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/Pagina/contabilidad.html');
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor web iniciado");
});
