const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	host: "10.0.0.125",
	port: 25,
	secure: false, // upgrade later with STARTTLS
	auth: {
	user: "bot@edelpa.cl",
	pass: "3d3lp4.s4p",
	},
  });

module.exports = {
	name:"ticket",
	description:"envia un correo con una solicitud",
	async execute(message,args,client,discord){

        //almacenar mensaje/mensaje sin prefijo+nombre del canal+nombre de la cuenta que envio el tiket
		var mensaje  = message.content.slice(8)+"\n"+message.channel.name+"\n"+message.author.username;
		mensaje  = mensaje+"\n"+message.channel.name+"\n"+message.author.username;

		//cuerpo del correo a enviar
		var mailOptions = {
			from: 'bot@edelpa.cl',
			to: 'ayuda@edelpa.cl',
			subject: 'Solicitud de ayuda',
			text: mensaje
		};

		//ejecutar nodemailer para enviar correo
		transporter.sendMail(mailOptions, function(error, info){
			if (error) {
			console.log(error);
			} else {
			console.log('Email enviado: ' + info.response);
			}
		});

		/*message.delete();*/
		return message.channel.send('Ticket Enviado');


		
	},
};