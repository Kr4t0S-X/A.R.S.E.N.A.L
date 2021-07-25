const Discord = require('discord.js');

module.exports = {
	/* The name will be the commands to enter after !build to trigger the bot  */
	name: 'help',
	description: 'command help',
	execute(message, args) {
		const embed = new Discord.MessageEmbed()
		/* Title of the embed message visibale by User */
			.setTitle('Commands')
		/* Color of the embed message, in hexa mode */
			.setColor(0xff00ff)
		/* '**text**' has to be used for bold, 
		 * '\n' to go to the next line,
		 * you need 2 if you want an empty line.
		 * For hyperlinks, the format is always [text to show for link](link)
		 */
			.setDescription('**!build + [Warframe]**\n ***ex: !build mesa***\n*Some hidden commands are also availables, good luck for finding them! ;)*');
		message.channel.send(embed);
	}
}
