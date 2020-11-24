const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 


client.login(process.env.BOT_TOKEN);NzYwOTIzMTM5NjcyMTEzMTYy.X3TG5Q.qNL0-1DOw-nbmLAZecwcXRLq12c
