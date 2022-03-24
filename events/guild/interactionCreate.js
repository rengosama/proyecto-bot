const DiscordModal = require('discord-modal')

module.exports = async (client,discord,interaction) => {
    console.log(interaction);

    if(interaction.isButton()) {
        if(interaction.customId==='producto'){
            //const command = client.commands.get("producto");
            //if(command)return command.execute(client,discord,interaction);
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
        }
    }
}