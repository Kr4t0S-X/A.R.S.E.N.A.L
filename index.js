const Discord = require('discord.js');
const client = new Discord.Client();
const token = ODY2Nzg2NjE4NDIxODA1MDg3.YPXn8Q.UP-Tkn8PLub-zsFuYArIO6xL1NE

client.once('ready', () => {
   console.log(‘Félicitations, votre bot Discord a été correctement initialisé !');
});

client.on("message", message => {
	if (messagecontent === "!ping") {
		message.channel.send("Pong.")
	}
})

const kick = require("../commands/kick")
module.exports = (client, message) => {
  if (message.content.startsWith("!kick")) {
    return kick(message)
  }
}

client.login(token);
