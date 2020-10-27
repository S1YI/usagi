const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.MessageEmbed();

    embed.setColor('#0099ff')
    embed.setTitle('Help')
    embed.setURL('https://discord.js.org/')
    embed.setAuthor('Tokyo', 'https://i.imgur.com/L14uwsK.png', 'https://discord.js.org')
    embed.setDescription('Version: 1.0')
    embed.setThumbnail('https://i.imgur.com/L14uwsK.png')
    embed.addFields(
        { name: 'Mod Cmds', value: '?kick & ?ban', inline: true },
        { name: 'Mod Cmds', value: '?clear', inline: true },

            )
    embed.setTimestamp()
    embed.setFooter('Author: finn#7777');
    message.channel.send(embed);
        }


module.exports.help = {
    name: "help",
    aliases: [""]   
}


