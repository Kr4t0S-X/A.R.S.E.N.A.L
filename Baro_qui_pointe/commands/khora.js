const Discord = require('discord.js')
module.exports = {
	name: 'khora',
	description: 'Khora Builds',
	execute(message) {
		const embed = new Discord.MessageEmbed()
			.setTitle('Khora')
			.setColor(0xff0000)
			.setDescription('**Warframe :**\nGeneral\n[Build](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\nArbitration\n[Build](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n\n**Venari :**\nGeneral\n[Build](https://www.youtube.com/watch?v=dQw4w9WgXcQ)');
		message.channel.send(embed)
	}
};
