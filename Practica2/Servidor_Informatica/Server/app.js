const express=require('express');
const app=express();

app.use(express.static(__dirname + '/pagina'));

app.listen((process.env.PORT || 3000),() => {
    console.log('Servidor web iniciado');
  });