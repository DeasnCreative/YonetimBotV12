
const Discord = require("discord.js");
var prefix = ayarlar.prefix;

module.exports = async client => {
  var oyun = ["Deasn was here?"];

  setInterval(async () => {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], { type: "LISTENING" }); //listening, playing olarak değiştirilebilir
    }, 25000);
  client.user.setStatus("idle"); //online, offline, idle olarak değiştirilebilir

  console.log(`${client.user.tag} ismi ile giriş yapıldı.`)
};