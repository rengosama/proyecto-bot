const DiscordModal = require('discord-modal')
const { token } = require('./config.json');
const discord = require('discord.js');
const client = new discord.Client({
intents: ["GUILDS","GUILD_MESSAGES"],
});
DiscordModal(client);
client.commands = new discord.Collection();
client.events = new discord.Collection();


["commandHandler","eventHandler"].forEach((file) => {
	require(`./handlers/${file}`)(client, discord);
});

//client.login(token);
client.login('OTQ3ODM0NTcxNzc5NjA4NjI2.YhzBuw.o_D_EyKhfeFPgsd7a2K6h-hHr4s');


