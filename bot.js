const Discord = require("discord.js");
const Client = new Discord.Client();

Client.on("ready", () => {
    console.log("Let's Go!");
  });

Client.on('message', (message) => {

    if(message.content == 'hello') {
        message.reply('Hai and welcome! I hope you are doing well today! <:acisabelle:508968543996608512>');
    } else

    if(message.content == 'Hello?') {
      message.reply('Yes? How can I help? ...<:acisabot:508971326137040896>');
    }
  
    if(message.content == 'Cute!') {
      message.reply('I Know right?! :heart_eyes:');
  } else

    if(message.content == "I'm having a rough day... :/") {
      message.reply('Oh no! I hope it gets better! :worried: Just know you are an amazing person! :heart:');
  }

  if(message.content == 'I love animal crossing!') {
    message.reply('Me too! <:aclove:508979511900241920>');
} else

  if(message.content == "I love Isabelle!") {
    message.reply('<:acigotthis:508981943224893441>');
  }
    if(message.content == 'I love fall!') {
      message.reply('Same! <:acisabelle:508968543996608512>');
  } else
  
    if(message.content == "I am lost") {
      message.reply("I can take you to the #507893227635081226? library if you'd like? <:acisabot:508971326137040896>");
    }
    if(message.content == "I'm bored") {
      message.reply('Have you checked out the #507894142278303771 Hall yet?');
  } else
  
    if(message.content == "Can someone help me?") {
      message.reply('My friend <@506998203825258496> knows some things. Ask him!');
}
});
Client.login(process.env.BOT_TOKEN);
