module.exports = {
	name: 'unit_test',
	description: 'unit_test',
	execute(message) {
		message.channel.send('!build ash');
		message.channel.send('!build atlas');
		message.channel.send('!build banshee');
		message.channel.send('!build baruuk');
		message.channel.send('!build chroma');
		message.channel.send('!build ember');
		message.channel.send('!build equinox');
	},
};
