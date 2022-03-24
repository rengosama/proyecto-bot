const {MessageEmbed} = require('discord.js');

module.exports = {
	name:"menu",
	description:"despliega el menu",
	async execute(message,args,client,discord){
		
        /*const me =new MessageEmbed().setTitle('Menu').setColor('GOLD');


                me.addField('\u200b',
                '\u200b',false);
				me.addField('Ver producto',
				"ingresar un codigo de material para ver descripcion",true);
                me.addField('Ver orden',
				"ingresar la orden y ver su descripcion",true);
                me.addField('generar ticket',
				"generar un ticket con una solicitud",true);*/

                const btn1 = new discord.MessageButton()
                .setCustomId("producto")
                .setLabel("VER PRODUCTO")
                .setStyle(1);
                const btn2 = new discord.MessageButton()
                .setCustomId("orden")
                .setLabel("VER ORDEN")
                .setStyle(2);
                const btn3 = new discord.MessageButton()
                .setCustomId("ticket")
                .setLabel("TICKET")
                .setStyle(3);


                const me = {
                    color: 0x0099ff,
                    title: 'MENU',
                    fields: [
                        {
                            name: '\u200b',
                            value: '\u200b',
                        },
                        {
                            name: 'Ver producto',
                            value: 'ingresar material para ver descripcion',
                            inline: true,
                        },
                        {
                            name: 'Ver orden',
                            value: 'ingresar la orden y ver su descripcion',
                            inline: true,
                        },
                        {
                            name: 'Ticket',
                            value: 'Generar ticket con una solicitud',
                            inline: true,
                        },
                        {
                            name: '\u200b',
                            value: '\u200b',
                        },
                    ],
                    timestamp: new Date(),
                };

                const fila = new discord.MessageActionRow().addComponents(btn1,btn2,btn3);
			
			return await message.channel.send({embeds:[me], components:[fila]});

	},
};