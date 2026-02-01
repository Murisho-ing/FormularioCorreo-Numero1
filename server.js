// server.js
const express = require('express');
const path = require('path');
const mailRoutes = require('./routes/routesmail');

const app = express();
const port = 3003;


app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, 'view')));



app.use('/', mailRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
