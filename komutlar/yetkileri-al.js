const Discord = require('discord.js');
const ayarlar = require("./ayarlar.json");

exports.run = async(client, message, args) => {
   if(!message.member.roles.cache.has(ayarlar.yetkiverici)) if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komudu kullanmak için <@&${ayarlar.yetkiverici}> rolüne veya \`Yönetici\` yetkisine sahip olmalısın!`)
   let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
   if(!member) {
       return message.channel.send('Bir kullanıcı etiketle!')
   }

   let yetkili = message.guild.member(member)


   yetkili.roles.remove(ayarlar.yetkili1)
   yetkili.roles.remove(ayarlar.yetkili2)
   yetkili.roles.remove(ayarlar.yetkili3)
   yetkili.roles.remove(ayarlar.kayıtgörevlisi)
   yetkili.roles.remove(ayarlar.bangörevlisi)
   yetkili.roles.remove(ayarlar.muteyetkilisi)
   const embed = new Discord.MessageEmbed()
   .setColor('RANDOM')
   .setTitle('Yetkileri alındı!')
   .addField('Yetkileri alınan yetkili:',member)
   .addField('Komudu kullanan yetkili:', message.author)
   .setFooter('Deasn was here?')
   .setTimestamp();
 message.channel.send(embed);

 ///////////////////////////////////////////

 let embed = new Discord.MessageEmbed()
 .setColor('RANDOM')
 .setTitle('Yetkileri alındı!')
 .addField('Yetkileri alınan yetkili:',member)
 .addField('Komudu kullanan yetkili:', message.author)
 .setFooter('Deasn was here?')
 .setTimestamp();
client.channels.cache.get(ayarlar.log).send(embed);
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yetkili-1'],
    permLevel: 0
};

exports.help = {
    name: 'yt1',
    description: 'Deasn was here?',
    usage: 'yt1'
};