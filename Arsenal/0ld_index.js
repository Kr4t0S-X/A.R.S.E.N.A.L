/*
 * 'use strict';
 */

const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json')
const prefix = "!build ";
//const { Client, MessageEmbed } = require('discord.js');

const client = new Discord.Client()
client.command = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Greetings Commander');
});

client.on('message', function(message) {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const commandBody = message.content.slice(prefix.length);
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();

	if (command === "ping") {
		 const timeTaken = Date.now() - message.createdTimestamp;
		 message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
	}
	if (!client.command.has(command)) return;

	try {
		client.command.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('Error occured while trying to execute the command.')
	}

/* WARFRAME BUILDS */

/*
	if (command === "khora") {
		const embed = new MessageEmbed()
		.setTitle('Khora')
		.setColor(0xff0000)
		.setDescription('**Warframe :**\nGeneral\n[Build](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\nArbitration\n[Build](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n\n**Venari :**\nGeneral\n[Build](https://www.youtube.com/watch?v=dQw4w9WgXcQ)');
		message.channel.send(embed);
	}

	if (command === "mesa") {
		const embed = new MessageEmbed()
		.setTitle('Mesa')
		.setColor(0xff0000)
		.setDescription('**Regulators**\n\n[Build](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n**General**\n\n[Build](https://www.youtube.com/watch?v=dQw4w9WgXcQ)');
		message.channel.send(embed);
	}
*/

/* WEAPON BUILDS  */

});

client.login(config.BOT_TOKEN);
