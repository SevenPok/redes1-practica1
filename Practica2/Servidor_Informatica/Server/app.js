const express=require('express');
const app=express();

app.use(express.static(__dirname+'/Pagina'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/Pagina/informatica.html');
});

app.listen((process.env.PORT || 3000),() => {
    console.log('Servidor web iniciado');
  });