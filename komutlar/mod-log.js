const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('croxydb')



exports.run = async (client, message, args) => {
  let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if(args[0] == "sıfırla") {
    
    if(db.fetch(`modlogkanaly_${message.guild.id}`)) { db.delete(`modlogkanaly_${message.guild.id}`)
                                           const embed = new Discord.MessageEmbed()
   .setColor('#f0ffff')
   .setDescription("Mod-log kanalı başarıyla sıfırlandı.")
                                                        
                                                     return message.channel.send(embed)
                                                     
                                                     } else return message.channel.send(new Discord.MessageEmbed()
   .setColor('#f0ffff')
   .setDescription("Mod-log kanalı zaten ayarlanmış."))
    
  }
  
    
    
  if (!message.member.hasPermission("ADMINISTRATOR")) {
   const embed = new Discord.MessageEmbed()
   .setColor('#f0ffff')
 
   .setDescription('**Bu Komutu Kullanabilmek İçin Yetkin Yok**')
return   message.channel.send(embed)
  }
 
 let modlogs = db.fetch(`modlogkanaly_${message.guild.id}`)
  
  if(!modlogs) {
    let kanal = message.mentions.channels.first();
    if(!kanal) {
   const embed = new Discord.MessageEmbed()
   .setColor('#f0ffff')
   .addField('**Bir kanal etiketlemediniz.**')
 return  message.channel.send(embed)
    };

    db.set(`modlogkanaly_${message.guild.id}`, kanal.id)
    const modlogkanal = message.guild.channels.cache.find(kanal => kanal.id === modlogs);
    {
     const embed = new Discord.MessageEmbed()
     .setColor('#f0ffff')
     .setDescription(`**Mod-log Başarıyla Ayarlandı.**`)
    return message.channel.send(embed)
   }
    
    } else {
      if(modlogs) {
        
        const modlogkanal = message.guild.channels.cache.find(kanal => kanal.id === modlogs);
        {
          const embed = new Discord.MessageEmbed()
          .setColor('#f0ffff')
   
        .setDescription(`**Bu sunucuda daha önceden modlog kanalı ayarlanmış.**`)
     return   message.channel.send(embed)
        }
      }
    }
  
  
  

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['modlog'],
    permLevel: 0
}

exports.help = {
    name: 'mod-log',
    description: 'Log kanalını belirler.',
    usage: 'modlog <#kanal>'
}
