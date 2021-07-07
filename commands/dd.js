const Nuggies = require("nuggies");
const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
    const options = new Nuggies.dropdownroles().addrole({
        label: 'xd',
        role: '718665651346079785',
        emoji: '719708356192763946'
    }).addrole({
        label: 'mobile',
        role: '718665775874834562',
        emoji: '📱'
    });

    Nuggies.dropdownroles.create({
        message: message,
        role: options, /*dropdownroles constructor*/ 
        content: new Discord.MessageEmbed().setTitle('Click to get role').setDescription('lmao').setColor("BLUE"),
        channelID: message.channel.id
    });
}

module.exports.config = {
    name: "dd",
    aliases: []
}