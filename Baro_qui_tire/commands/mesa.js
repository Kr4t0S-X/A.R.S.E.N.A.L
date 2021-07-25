const Discord = require('discord.js');
module.export = {
	name: 'mesa',
	description: 'Mesa Builds',
	execute(message) {
		const embed = new Discord.MessageEmbed()
			.setTitle('Mesa')
			.setColor(0xff0000)
			.setDescription('Regulators\n[Build](https://imgur.com/Acyx6wX)\nGeneral\n[Build](https://imgur.com/GA3FLZe)');
		message.channel.send(embed);
	}
};

