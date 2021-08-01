const Discord = require('discord.js');

module.exports = {
	/* The name will be the commands to enter after !build to trigger the bot  */
	name: 'frost',
	description: 'Frost Builds',
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
		/* Title of the embed message visibale by User */
			.setTitle('Frost')
		/* Color of the embed message, in hexa mode */
			.setColor(0xff00ff)
		/* '**text**' has to be used for bold, 
		 * '\n' to go to the next line,
		 * you need 2 if you want an empty line.
		 * For hyperlinks, the format is always [text to show for link](link)
		 */
			.setDescription('**Warframe :**\nGeneral\n[Build](https://overframe.gg/build/48143)\nSpam Globe\n[Build](https://overframe.gg/build/48141)\nNuke\n[Build](https://overframe.gg/build/48145)');
		message.channel.send(embed);
	}
}
