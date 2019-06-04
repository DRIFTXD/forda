const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "$";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : DRIFTXD`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DRIFTXD ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`#bc | DRIFTXD`,"http://twitch.tv/driftxd")
client.user.setStatus("dnd")
});



client.login("NTg1MTg3MjQ2ODk4OTM3ODY3.XPV1Tg.3KDuQi5WSt-kFdf0sQ7vxIwng9g");