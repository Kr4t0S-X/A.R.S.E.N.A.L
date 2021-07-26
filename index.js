'use strict';

const fs = require('fs');
const Discord = require('discord.js');
/* const { token } = require('./config.json') */
const prefix = "!build"
const port = process.env.port || 5001;


const client = new Discord.Client()
client.commands = new Discord.Collection();
app.listen(port, () => console.log(`Server is listening on port ${PORT}...`));

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Greetings Commander');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix)/*|| message.author.bot*/) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	if(!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('Error');
	}
});

client.login(process.env.token, port);
