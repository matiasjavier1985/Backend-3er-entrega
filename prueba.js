const express = require('express')
const app = express()
const PORT = 8080

app.get('/bienvenido', (req, res) => {

res.send('<h1 style="color:blue>Bienvenido!</h1>');
})
app.get('/usuario', (req, res) => {
    const usuario = {
      nombre: 'Javier',
      apellido: 'Guerrero',
      edad: 38,
      correo: 'guerreroj@gmail.com'
    };
    res.json(usuario);
  });

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})