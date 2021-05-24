const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require('croxydb'); // creating database


module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar Yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } İsmi ${client.user.id} ID'si ile Sisteme Giriş Yapıldı!`
  );
  client.user.setStatus("idle");
  client.user.setActivity("p!yardım | Botlist verileri sıfırlandı!");


};
