const nodemailer = require('nodemailer');


module.exports = (correo,Password) =>{

    var transporter = nodemailer.createTransport({

        service : 'gmail',
        auth :{
            user:'zuperappserviceapplication@gmail.com',
            pass: 'Zuper2021'
        }


    });



const mailOptions = {
    from: 'Zuper APP',
    to: correo, //formulario.email, // Cambia esta parte por el destinatario
    subject: 'Recuperación de datos de inicio de sesión',
    html:
    
    '<p><img class="center" style="display: block; margin-left: auto; margin-right: auto;" src="https://raw.githubusercontent.com/bkevin1052/ZuperApp/master/ZuperApp/icons/ZuperApp.png" alt="" width="150" height="150" /></p>'+
    '<h1 style="color: #5e9ca0; text-align: center;">Tu recuperaci&oacute;n de Inicio de Sesi&oacute;n</h1>'+
    '<h2 style="color: #2e6c80; text-align: center;">Dirigite al login e ingresa tus nuevos datos:</h2>'+
    '<p>&nbsp;</p>'+
    '<ol style="list-style: none; font-size: 14px; line-height: 32px; font-weight: bold;">'+
    '<li style="clear: both;"><h3>Email: '+correo+'</h3></li>'+
    '<li style="clear: both;"><h3>Contrase&ntilde;a: '+Password+'</h3></li>'+
    '</ol>'+
    '<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p>'+
    '<p><strong>Si tienes alg&uacute;n problema puedes comunicarte directamente a nuestro correo electr&oacute;nico:&nbsp;&nbsp;zuperappserviceapplication@gmail.com</strong></p>'    
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
        console.log(err)
        else
        console.log(info);
        });
}

