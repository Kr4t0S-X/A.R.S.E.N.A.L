const Discord = require('discord.js');

module.exports = {
	/* The name will be the commands to enter after !build to trigger the bot  */
	name: 'banshee',
	description: 'description',
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
		/* Title of the embed message visibale by User */
			.setTitle('Banshee')
		/* Color of the embed message, in hexa mode */
			.setColor(0xff00ff)
		/* '**text**' has to be used for bold, 
		 * '\n' to go to the next line,
		 * you need 2 if you want an empty line.
		 * For hyperlinks, the format is always [text to show for link](link)
		 */
			.setDescription('**Warframe :**\nGeneral\n[Build](https://overframe.gg/build/48111)\nSonar\n[Build](https://overframe.gg/build/48110)');
		message.channel.send(embed);
	}
}