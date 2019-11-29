const {Client,RichEmbed}=require('discord.js');
const client = new Client();

client.on('ready' , () => { 
    console.log(`my bot esta bien jarioso : ${client.user.tag}`);
    if (client.user.presence.status === 'dnd'){
        console.log('el bot esta ivernando' , client.user.presence.status);
    } else
    {
                console.log('el bot anda suelto' );

    }

    const testChannel = client.channels.find(channel => channel.name === 'canal bot');
     console.log('el bot anda activo' );
 });

 client.on('message',async  message => {
console.log(message);
if (message.content === 'ping'){
       message.reply('pong');

}
if (message.content === 'hola'){

     message.channel.send(`hola ${message.author} que pedo`);
}
if (message.content.includes('puto')){
message.channel.send(`wey ${message.author} no seas puto grosero >:v`);

}
if (message.content === 'web'){
    message.channel.send('https://cherrybit.com.mx');
     message.channel.send('https://discord.js.org/#/');
}
if (message.content === '!pretty'){
    const embed = new RichEmbed() //los mensajes se vean bonitos //
           .setTitle('Pretty Message')
           .setColor('#6D87E7')
           .setAuthor('cherry' , 'https://images.mediotiempo.com/7etcbgMMuunxEMr7GnCKMmk9sZw=/0x530/uploads/media/2019/11/10/memes-liga-mx-mejores-jornada-207.jpg' );
           message.channel.send(embed);
}
if (message.content === '!clear'){
   const fetched = await message.channel.fetchMessages({limit: 100});
    message.channel.bulkDelete(fetched);
    console.log('borrado por puto')
};
 } );







client.login('NjUwMDA1NDk3OTgxODI5MTUw.XeFDsQ.ZeWcPT1OIUPAPXaVMQUAkmTzy4o');

