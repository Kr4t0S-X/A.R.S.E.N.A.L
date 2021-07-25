const Discord = require("discord.js");

module.exports = {
    name: 'menta',
    description: 'Info sulla menta',
    execute(msg, args) {
        const menta = new Discord.MessageEmbed()
             .setTitle('ERBE')
             .addField('Nome', 'Menta')
             .addField('Proprietá', 'Rompere gli incantesimi e acquisire forza mentale durante i periodi di difficoltà')
             .setColor('#66CD00');
             msg.channel.send(menta);
    },
};
