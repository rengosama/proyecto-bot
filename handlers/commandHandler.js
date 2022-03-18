const fs = require("fs");


module.exports = (client,discord)=>{

    console.log("___________comandos__________")
    fs.readdirSync("./commands/").forEach((dir) => {
        const commands = fs
        .readdirSync(`./commands/${dir}`)
        .filter((file) => file.endsWith(".js"));

        for(const file of commands){
            const cmd = require(`../commands/${dir}/${file}`);
            if (cmd.name){
                console.log(cmd.name);
                client.commands.set(cmd.name,cmd);
            }else{
                console.log(`Error:${cmd.name}`)
            }
        }
    });
};