module.exports = {
	name: 'unit2',
	description: 'unit2',
	execute(message) {
		const fs = require('fs');
		const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const command = require(`./commands/${file}`);
			client.commands.set(command.name, command);
			message.channel.send('!build %s', command);
		}
	},
};
