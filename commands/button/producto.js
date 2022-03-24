const DiscordModal = require('discord-modal')
const discord = require('discord.js');
const client = new discord.Client({
  intents: ["GUILDS","GUILD_MESSAGES"],
  });
DiscordModal(client)

module.exports = {
	name:"producto",
	description:"tiempo de respuesta",
	async execute(client,discord,interaction){

		

	  const textinput = new DiscordModal.TextInput()
     .setCustomId("consulta_producto")
     .setTitle("material a consultar")
     .addComponents(
       new DiscordModal.TextInputField()
       .setLabel("Ingrese codigo de material")
       .setStyle("short")
       .setPlaceholder("400004030")
       .setCustomId("ask_1")
       .setRequired(true)
       )
       await client.TextInputs.open(interaction, textinput)
	   
	},
};