const DiscordModal = require('discord-modal')
const fetch = require('node-fetch');

module.exports = {
	name:"producto",
	description:"tiempo de respuesta",
	async execute(client,discord,interaction){

		DiscordModal(client)

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
       client.TextInputs.open(interaction, textinput) 
		
	   client.on("interactionTextInput",async(interaction)=>{
		if(interaction.customId == "consulta_producto"){
		  await interaction.deferReply()
		  /*let embed = new Discord.MessageEmbed()
		  .setColor('GREEN')
		  .setTitle('Submit a support rank')
		  .addField('Your real name', '\`\`\`' + interaction.fields[0].value + '\`\`\`')
		  .addField('Your favorite identity', '\`\`\`' + interaction.fields[1].value + '\`\`\`')
		  .addField('Story of your life', '\`\`\`' + interaction.fields[2].value+ '\`\`\`') 
		   await interaction.editReply({embeds:[embed]})*/

		   if(interaction.fields[0].value.length === 32){
    
			try{
			
				var formato = interaction.fields[0].value;
				formato = formato.slice(4,22);
				console.log(formato);
			
				const  list  = await fetch(
					/*'HTTP://charbot.edelpa.cl:4000/materiales'*/'http://localhost:4000/materiales',
					{method: 'POST',
					mode: 'cors',
					headers: {'Content-Type': 'application/json'},
					body:`{"MATNR":"${formato}"}`})
				    .then(response => response.json());
				
console.log("bien")
				
			
				if(list.length===0){return interaction.editReply(`El material ${interaction.fields[0].value} no se encuentra disponible`)}
				console.log(list);
			  for(var i in list){
				interaction.reply(
			  "CENTRO : "+list[i].WERKS+
			  "  ALMACEN : "+list[i].LGORT+
			  "  MATERIAL : "+list[i].MATNR+
			  "  LOTE : "+list[i].CHARG+
			  "  STOCK DISPONIBLE :"+list[i].CLABS);
			  }
			
			}catch(error){
				console.log(error);
				return interaction.reply(`el material ${interaction.fields[0].value} no se encuentra disponible`);
				
			}
			
			}

		}
	   })

	},
};