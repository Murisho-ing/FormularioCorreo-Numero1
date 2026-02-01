// models/correo.js
const nodemailer = require('nodemailer');


exports.enviarCorreo = (nombre, correo, numero, mensaje, callback) => {

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dmurilloneme@gmail.com', //se utiliza mi correo PERSONAL
      pass: 'bgzi uyem ixbt cujw' //se utiliza una contraseña de aplicacion desde el apartado de seguridad de gmail //https://myaccount.google.com/apppasswords            
    }
  });

 
  let mailOptions = {
    from: 'jdpereza@unbosque.edu.co',        
    to: correo,       
    subject: 'Nuevo contacto recibido',
    text: `Se ha recibido un nuevo contacto:
    
Nombre: ${nombre}
Correo: ${correo}
Número: ${numero}
Mensaje: ${mensaje}`
  };


  transporter.sendMail(mailOptions, callback);
};
