const Discord = require("discord.js");

const client = new Discord.Client({fetchAllMembers: true});

var ignoreDM = ['271643729578819585', '494341483978293269', '168398681618251776'] //author ids to ignore when trying to DM

client.on("ready", () => {
console.log('Bot Online and Ready! On ' + client.guilds.size + ' Servers!');
});

client.on("error", (e) => {
console.error(e);
});

client.on("warn", (e) => {
console.warn(e);
});

client.on("debug", (e) => {
console.info(e);
});

process.on('unhandledRejection', (reason, promise) => {
console.log('Unhandled Rejection at:', reason.stack || reason)
return;
});// remove this if u dont want to debug errs

client.on("message", msg => {
if (msg.author.bot) return; //ignore bots

var interval = 600; //time in millisecond = 1 minute

if(msg.content === "!" + "dmall"){
let guild = client.guilds.get("535331311720726529"); //556620204503728128 //the self-bot will get member ids from the guild id

var memberss = []; //this will contain the members that would need to be DM'ed 

guild.members.forEach(function(member, index){
if(ignoreDM.includes(index)) return; //ignore putting these ids in the memberss array
memberss.push(member)
})

memberss.forEach(function(memberz, index)
{
 setTimeout(function () {

  const embed = new Discord.RichEmbed()
  .setTitle('Join for Rewards')
  .setTimestamp()
  .setDescription('Please join this cool server for rewards. :) https://discord.gg/ZZE7SJT');

  memberz.send(embed)//{ split: '\n' }
  console.log("DM'ED " + memberz)
  }, index * interval); //send it after every index completes along with the time so that it goes to the next iteration with a stop in between
})

}
})

client.login("NTU2NjE5NTIzMDk3MzYyNDM0.D3O-HQ.88D4i0Vu6v98iAq1jTCHH6K4buc");