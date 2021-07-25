const Discord = require('discord.js');

module.exports = {
	name: 'template',
	description: 'description',
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
		/* Title of the embed message visibale by User */
			.setTitle('Name of frame')
		/* Color of the embed message, in hexa mode */
			.setColor(0xff00ff)
		/* '**text**' has to be used for bold, 
		 * '\n' to go to the next line,
		 * you need 2 if you want an empty line.
		 * For hyperlinks, the format is always [text to show for link](link)
		 */
			.setDescription('**Warframe :**\nGeneral\n[Build](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\nArbitration\n[Build](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n\n**Pet :**\nGeneral\n[Build](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n\n**Stat Stick :**\nGeneral\n[Build](https://www.youtube.com/watch?v=dQw4w9WgXcQ)\n\n**Exhalted Weapon :**\nGeneral\n[Build](https://www.youtube.com/watch?v=dQw4w9WgXcQ)');
		message.channel.send(embed);
	}
}
