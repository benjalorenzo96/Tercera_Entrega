const express = require('express');
const app = express();
const PORT = 8080;

app.get('/saludo', (req, res) => {
  res.send('¡Hola a todos, pero ahora desde Express!');
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
