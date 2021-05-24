const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('croxydb')

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Bu komutu kullanmak için gerekli yetkiye sahip değilsin.')
  
  
 
    const olmadımıtutmadımı = new Discord.MessageEmbed()
      .setColor("#F0FFFF")
    .setTitle(`Bir seçenek belirtmelisiniz.`)
    .setDescription(`
                    > kanal-ayarla
                    > kanal-sıfırla
                    > rol-ayarla
                    > rol-sıfırla
                    > bot-rol-ayarla
                    > bot-rol-sıfırla
                    `)
    .setFooter(`${message.author.tag}`)
    if(!args[0]) return message.channel.send(olmadımıtutmadımı)
    if(args[0] === 'rol-ayarla') {
        var rol = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id == args[1])
        if(!rol) return message.channel.send('Bir rol etiketlemediniz.')
      message.channel.send(`Aşağıdaki emojiye basarsanız otorol ${rol} olarak ayarlanacak.`).then(msg => {

        msg.react('791401834559569960')
       .then(r => {
        const kirmizi = (reaction, user) => reaction.emoji.name === 'pusula_tik' && user.id == message.author.id
     
    const reactk = msg.createReactionCollector(kirmizi);

       reactk.on('collect', (r, user)  => {
   
        const kirmizi = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor("#F0FFFF")
        .setDescription(`Otorol Başarıyla ${rol.name} olarak ayarlandı.`)
   

  db.set(`${message.guild.id}_otorol`, rol.id)
 msg.delete()
   message.channel.send(kirmizi)
   
})
})

})
      

    } else if(args[0] == 'rol-sıfırla') {
        if(!db.fetch(`${message.guild.id}_otorol`)) return message.channel.send('Zaten otorol ayarlanmamış'); else {
            message.channel.send(`Aşağıdaki emojiye basarsanız otorol silinicek.`).then(msg => {

        msg.react('791401834559569960')
       .then(r => {
        const kirmizi = (reaction, user) => reaction.emoji.name === 'pusula_tik' && user.id == message.author.id
     
    const reactk = msg.createReactionCollector(kirmizi);

       reactk.on('collect', (r, user)  => {
   
        const kirmizi = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor("#F0FFFF")
        .setDescription(`Otorol Başarıyla ${rol.name} olarak ayarlandı.`)
   
  db.delete(`${message.guild.id}_otorol`)
            message.channel.send('Otorol başarılı bir şekilde sıfırlandı')
         
 msg.delete()
   message.channel.send(kirmizi)
   
})
})

})
     
          
          
          
        }
    } else if(args[0] === 'kanal-ayarla') {
        var kanal = message.mentions.channels.first()
        if(!kanal) return message.channel.send('Bir kanal etiketlemediniz'); else {
          message.channel.send(`Aşağıdaki emojiye basarsanız otorol kanalı ${kanal} olarak ayarlanacak.`).then(msg => {

        msg.react('791401834559569960')
       .then(r => {
        const kirmizi = (reaction, user) => reaction.emoji.name === 'pusula_tik' && user.id == message.author.id
     
    const reactk = msg.createReactionCollector(kirmizi);

       reactk.on('collect', (r, user)  => {
   
        const kirmizi = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor("#F0FFFF")
        .setDescription(`Otorol kanalı başarıyla ${kanal.name} olarak ayarlandı.`)
   
  
           db.set(`${message.guild.id}_otokanal`, kanal.id)
 msg.delete()
   message.channel.send(kirmizi)
   
})
})

})
          
        
        }
    } else if(args[0] === 'kanal-sıfırla') {
            message.channel.send(`Aşağıdaki emojiye basarsanız otorol kanalı ${kanal} olarak ayarlanacak.`).then(msg => {

        msg.react('791401834559569960')
       .then(r => {
        const kirmizi = (reaction, user) => reaction.emoji.name === 'pusula_tik' && user.id == message.author.id
     
    const reactk = msg.createReactionCollector(kirmizi);

       reactk.on('collect', (r, user)  => {
   
        const kirmizi = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor("#F0FFFF")
        .setDescription(`Otorol kanalı başarıyla ${kanal.name} olarak ayarlandı.`)
   
  
           db.set(`${message.guild.id}_otokanal`, kanal.id)
 msg.delete()
   message.channel.send(kirmizi)
   
})
})

})
      
        if(!db.fetch(`${message.guild.id}_otokanal`)) return message.channel.send('Zaten otorol kanal ayarlanmamış'); else {
                message.channel.send(`Aşağıdaki emojiye basarsanız otorol kanalı sıfırlanacak.`).then(msg => {

        msg.react('805853637217091634')
       .then(r => {
        const kirmizi = (reaction, user) => reaction.emoji.name === 'pusula_tik' && user.id == message.author.id
     
    const reactk = msg.createReactionCollector(kirmizi);

       reactk.on('collect', (r, user)  => {
   
        const kirmizi = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor("#F0FFFF")
        .setDescription(`Otorol kanalı başarıyla sıfırlandı.`)
   
            
            db.delete(`${message.guild.id}_otokanal`)
 msg.delete()
   message.channel.send(kirmizi)
   
})
})

})

        }
    }
if(args[0] === 'bot-rol-ayarla') {
        var rol = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id == args[1])
        if(!rol) return message.channel.send('Bir rol etiketlemediniz.')
      message.channel.send(`Aşağıdaki emojiye basarsanız bot otorolü ${rol} olarak ayarlanacak.`).then(msg => {

        msg.react('791401834559569960')
       .then(r => {
        const kirmizi = (reaction, user) => reaction.emoji.name === 'pusula_tik' && user.id == message.author.id
     
    const reactk = msg.createReactionCollector(kirmizi);

       reactk.on('collect', (r, user)  => {
   
        const kirmizi = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor("#F0FFFF")
        .setDescription(`Otorol Başarıyla ${rol.name} olarak ayarlandı.`)
   

  db.set(`${message.guild.id}bot_otorol`, rol.id)
 msg.delete()
   message.channel.send(kirmizi)
   
})
})

})
      

    } 
  
  if(args[0] === 'bot-rol-sıfırla') {
        var rol = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id == args[1])
        if(!rol) return message.channel.send('Bir rol etiketlemediniz.')
      message.channel.send(`Aşağıdaki emojiye basarsanız bot sıfırlanacak.`).then(msg => {

        msg.react('791401834559569960')
       .then(r => {
        const kirmizi = (reaction, user) => reaction.emoji.name === 'pusula_tik' && user.id == message.author.id
     
    const reactk = msg.createReactionCollector(kirmizi);

       reactk.on('collect', (r, user)  => {
   
        const kirmizi = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor("#F0FFFF")
        .setDescription(`Otorol Başarıyla silindi.`)
   

  db.delete(`${message.guild.id}bot_otorol`)
 msg.delete()
   message.channel.send(kirmizi)
   
})
})

})
      

    } 
  
}
  

exports.conf = {
    aliases: ['oto-rol']
}
exports.help = {
    name: "otorol"
}