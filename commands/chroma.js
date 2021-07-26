const Discord = require('discord.js');

module.exports = {
	/* The name will be the commands to enter after !build to trigger the bot  */
	name: 'chroma',
	description: 'description',
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
		/* Title of the embed message visibale by User */
			.setTitle('Chroma')
		/* Color of the embed message, in hexa mode */
			.setColor(0xff00ff)
		/* '**text**' has to be used for bold, 
		 * '\n' to go to the next line,
		 * you need 2 if you want an empty line.
		 * For hyperlinks, the format is always [text to show for link](link)
		 */
			.setDescription('**Warframe :**\nBuffer\n[Build](https://overframe.gg/build/48138)\nProfit Taker Solo\n[Build](https://overframe.gg/build/24758)\nProfit Taker Squad\n[Build](https://overframe.gg/build/189286)\nArbi\n[Build](https://overframe.gg/build/184017)');
		message.channel.send(embed);
	}
}