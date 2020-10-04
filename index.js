var config = require('./config.json');

var Discord = require('discord.js');
var client = new Discord.Client();

client.on('ready', async () => {
    console.log("Ready for use");

    client.user.setPresence({
        activity: {
            name: "Spotify",
            type: "LISTENING"
        }
    })
});

client.on('message', async (message) => {
    if (message.author.bot) return;
    if (!message.guild) return;

    var prefix = config.prefix;
    if (!message.content.toLowerCase().startsWith(prefix)) return;

    var args = message.content.split(' ');
    var cmd = args.shift().slice(prefix.length).toLowerCase();

    try {
        var file = require(`./commands/${cmd}.js`);
        file.run(client, message, args);
    } catch (err) {
        console.warn(err);
    }
});

client.login(config.token);