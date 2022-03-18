module.exports = async (client,discord,interaction) => {
    console.log(interaction);
    if(interaction.isButton()) {
        if(interaction.customId==='producto'){
            const command = client.commands.get("producto");
            if(command) command.execute(client,discord,interaction);
        }
    }
}