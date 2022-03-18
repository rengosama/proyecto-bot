const { token } = require('../../config.json');


const prefix="."

module.exports = async (client,discord,message) => {
     
    if(message.author.bot)return;

    if(message.content.toLocaleLowerCase()==="menu"){
      const args = message.content;
      const cmd = args.toLocaleLowerCase();
      const command = client.commands.get(cmd);
      if(command) command.execute(message,args,client,discord);
      if(!command) message.channel.send("Este comando no existe");
    }

    if(message.content.startsWith(prefix)){

		const args = message.content.slice(prefix.length).split(/ +/);
		const cmd = args.shift().toLocaleLowerCase();
        const command = client.commands.get(cmd);
        console.log(args);
        console.log(cmd);
        console.log(command);

        if(command) command.execute(message,args,client,discord);
        if(!command) message.channel.send("Este comando no existe");
        message.delete();
        return
	}

}