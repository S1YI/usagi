const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_NICKNAMES")) {
        return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
}
message.channel.send('https://cdn.discordapp.com/attachments/765311312229302293/770060560908681277/image0.png <@606194371129245726>')
}

module.exports.help = {
    name: "jew",
    aliases: []   
}