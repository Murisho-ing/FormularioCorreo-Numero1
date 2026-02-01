
const express = require('express');
const router = express.Router();

const correoModel = require('../model/correo');


router.get('/', (req, res) => {
  res.sendFile('vista.html', { root: './view' });
});


router.post('/submit', (req, res) => {
  const { nombre, correo, numero, mensaje } = req.body;

  correoModel.enviarCorreo(nombre, correo, numero, mensaje, (error, info) => {
    if (error) {
      console.error(error);
      res.send('Error al enviar el correo');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.send('Correo enviado correctamente');
    }
  });
});

module.exports = router;
