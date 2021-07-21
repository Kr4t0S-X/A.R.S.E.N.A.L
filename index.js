'use strict';

const Discord = require("discord.js");
const config = require("./config.json")

const client = new Discord.Client();
const prefix = "!";
const { Client, MessageEmbed } = require('discord.js');

client.on("message", function(message) {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	const commandBody = message.content.slice(prefix.length);
	const args = commandBody.split(' ');
	const command = args.shift().toLowerCase();

	if (command === "ping") {
		 const timeTaken = Date.now() - message.createdTimestamp;
		 message.reply('Pong! This message had a latency of ${timeTaken}ms.');
	 }

/* WARFRAME BUILDS */

	/**
const wf_tab = new Array(255);
const wf_build = new Array(255);

	wf_tab = [ [Ash], [Atlas], [Banshee], [Baruuk], [Chroma], [Ember], [Equinox], [Excalibur], [Frost], [Gara], [Garuda], [Gauss], [Grendel], [Harrow], [Hildryn], [Hydroid], [Inaros], [Ivara], [Khora], [Limbo], [Loki], [Mag], [Mesa], [Mirage], [Nekros], [Nezha], [Nidus], [Nova], [Nyx], [Oberon], [Octavia], [Protea], [Revenant], [Rhino], [Saryn], [Titania], [Trinity], [Valkyr], [Vauban], [Volt], [Wisp], [Wukong], [Zephyr] ];

	wf_builds = [ ['[Build regulators]\n(https://imgur.com/Acyx6wX)\n[Build general]\n(https://imgur.com/GA3FLZe)';
var i = new int;
	let i = 0;

	while (i <= 100) {

	}

		if (command === wf_tab[i]) {
			message.reply('https://imgur.com/a/WQRUqqX');
	}
**/
	if (command === "mesa") {
		const embed = new MessageEmbed()
		.setTitle('Mesa')
		.setColor(0xff0000)
		.setDescription('Regulators\n[Build](https://imgur.com/Acyx6wX)\nGeneral\n[Build](https://imgur.com/GA3FLZe)');
		message.channel.send(embed);
	}

/* WEAPON BUILDS  */

});

client.login(config.BOT_TOKEN);
