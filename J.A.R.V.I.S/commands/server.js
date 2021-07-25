const Discord = require('discord.js')
module.exports = {
	name: 'server',
	description: 'Display info about this server.',
	execute(message) {
		const embed = new Discord.MessageEmbed()
			.setTitle(`Server Info for Bot Test`)
			.setColor(0xff0000)
			.setDescription('**Warframe :**\nGeneral\n[Build](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\nArbitration\n[Build](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n\n**Venari :**\nGeneral\n[Build](https://www.youtube.com/watch?v=dQw4w9WgXcQ)');
		message.channel.send(embed)
	}
};
