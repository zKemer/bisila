const ayarlar = require("../ayarlar.json");
const db = require('croxydb'); // creating database
const Discord = require('discord.js')

let talkedRecently = new Set();
module.exports = async message => {
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    talkedRecently.delete(message.author.id);
  });
  let client = message.client;
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || ayarlar.prefix;
        if (db.fetch(`yasakli_kanal_${message.guild.id}_${message.channel.id}`) == "yasaklı_uwu") return

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
    var permissions = message.channel.permissionsFor(client.user);
  if (!permissions.has('SEND_MESSAGES')) return;
  let command = message.content.split(" ")[0].slice(prefix.length);
  let params = message.content.split(" ").slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);

    const embed = new Discord.MessageEmbed()
    .setTitle(`Komut kullanıldı.`)
    .setDescription(`
    > Komutu kullanan kişi: **${message.author.tag}**
    > Kullanılan Komut: **${message.content}**
    > Sunucu İsmi: **${message.guild.name}**`)
    .setColor("F0FFFF")
    client.channels.cache.get("837969531158396939").send(embed)
  }
};
