const Discord = require('discord.js');
const client = new Discord.Client({
	disableMentions: 'everyone',
});
const config = require('./settings.json');
const { loadCommands } = require('./utils/loadCommands');

//Dropdown related
const Nuggies = require('nuggies');
require('discord-buttons')(client);
bot.on('clickMenu', menu => {
    Nuggies.dropclick(client, menu);
});
// ----

require('./utils/loadEvents')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.snipes = new Map()

loadCommands(client);
client.login(config.token);
