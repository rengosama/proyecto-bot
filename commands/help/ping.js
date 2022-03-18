/* eslint-disable no-unused-vars */
module.exports = {
	name:"ping",
	description:"tiempo de respuesta",
	async execute(message,args,client,discord){
		message.channel.send("pong");
	},
};