const fetch = require('node-fetch');
const {MessageEmbed} = require('discord.js');

module.exports = async (client,discord,interaction) => {
    console.log(interaction.customId);
	if(interaction.customId ==="consulta_producto"){
		
		if(interaction.fields[0].value.length === 32){
			//await interactioni.deferReply();
			try{
				var formato="";
				formato =interaction.fields[0].value;
				formato = formato.slice(4,22);
				console.log(formato);
				const  list  =await fetch(
					//'HTTP://charbot.edelpa.cl:4000/materiales'
					'http://localhost:4000/materiales',
					{method: 'POST',
					//mode: 'cors',
					headers: {'Content-Type': 'application/json'},
					body:`{"MATNR":"${formato}"}`})
				    .then(response => response.json());
				
				console.log(list.length);
                
				if(list.length===0){await interaction.channel.send(`El material ${formato} no se encuentra disponible`)
				return;
				};
                await interaction.channel.send(`Material ${formato}`);

			    for(var i in list){
				    await interaction.channel.send(
			        "CENTRO : "+list[i].WERKS+
			        "  ALMACEN : "+list[i].LGORT+
			        "  MATERIAL : "+list[i].MATNR+
			        "  LOTE : "+list[i].CHARG+
			        "  STOCK DISPONIBLE :"+list[i].CLABS);
			    }
                return;
			}catch(error){
				console.log(error);
				interaction.reply(`Lo siento eh tenido problemas con el servidor`);
				return;
			}
			
		}

		if(!interaction.fields[0].value.length === 32 && !interaction.fields[0].value.length === 18){interaction.reply('Este no es un material')}

	}
}