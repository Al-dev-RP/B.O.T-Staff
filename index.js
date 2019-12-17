const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";

client.login("NjU2MTcxMzI3MDE5MDI0Mzg0.Xfexag._q6aofPxJTchTTLIw0B0OPum6M8");

client.on("guildMemberAdd", user =>{

    user.guild.channel.get("656182662385369098").send("Bienvenue" + user + "sur ce serveur. Lit les règles et profite bien ^^")
    user.addRole("https://discord.gg/jvUXB3")
});

client.on("message", message =>{
    if (!message.guild) return
    if (message.content === prefix + "hello")
    message.channel.send("Bonjour, comment vas-tu" + message.author + "?")   
});

bot.login(process.env.BOT_TOKEN)
