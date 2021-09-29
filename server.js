//https://mybot-team.github.io/documentacion/guia/ejemplos-comandos.html//
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json')
///////////////PESENCIA///////////////
function presence(){
  console.log(`✔️ Estoy listo!, conectado en ${client.guilds.size} servidores y  ${client.users.size} usuarios.`);
    client.user.setPresence({
        status:"online",
        activity: {
            name: "+help | V. 1.0",
            type: "WATCHING"
        }
    })
}

///////////////ESTADO///////////////
client.on("ready", () => {
    console.log("✔️ The official 𝐔𝐦𝐢𝐥𝐝𝐚𝐝𝐥𝐚𝐧𝐝 bot is ready to use")
    presence();
});
///////////////VARIABLES///////////////
let prefix = config.prefix;
//Se recomienda acomodar esto aparte de un clien.on
client.on("message", message =>{
    if(message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  //comandos
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase(); 

///////////////+help///////////////
if(command === 'help'){
  const embed = new Discord.MessageEmbed()
     .setTitle('Comandos disponibles:')
     .setColor(0x5E9DE4)
     .setDescription('**+invite**: Invita a 𝐔𝐦𝐢𝐥𝐝𝐚𝐝𝐥𝐚𝐧𝐝 a tus servidores\n**+shop**: Muestra el catálogo disponible\n**+donacion**: Enlace para donaciones\n**+web**: Muestra información sobre un usuario mencionado\n**+userinfo**: Muestra información del usuario\n**+impostor**: Comprueba si eres el impostor\n**+ping**: Comprueba la latencia del bot y de tus mensajes\n**+statsbot**: Muestra información del BOT\n**+randomuser**: Selecciona un usuario aleatorio') 
     .setAuthor(client.user.username, client.user.avatarURL())
     .setThumbnail('https://cdn.discordapp.com/attachments/772014903786471424/889118765755818034/Logopit_1632052784984.png')
     .setImage('')
     .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
     .setTimestamp()
     .setURL('');
   message.channel.send(embed);
}


/////+invite/////
if(command === 'invite'){
    const embed = new Discord.MessageEmbed()
       .setTitle('Invita al BOT a tu servidor')
       .setColor(0x5E9DE4)
       .setDescription('\n\nhttps://cutt.ly/dEsZw5X\n\n') 
       .addField('Nombre del servidor', message.guild.name, true)
       .addField('Integrantes', message.guild.memberCount, true)
       .setAuthor(client.user.username, client.user.avatarURL())
       .setThumbnail('https://cdn.discordapp.com/attachments/772014903786471424/889118765755818034/Logopit_1632052784984.png')
       .setImage('')
       .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
       .setTimestamp()
       .setURL('');
     message.channel.send(embed);
 }

/////+shop/////
 if(command === 'shop'){
    const embed = new Discord.MessageEmbed()
       .setTitle('Cátalogo')
       .setColor(0x5E9DE4)
       .setDescription('**Este es el catálogo disponible:**') 
       .addField('Nombre del servidor', message.guild.name, true)
       .addField('Integrantes', message.guild.memberCount, true)
       .setAuthor(client.user.username, client.user.avatarURL())
       .setThumbnail('')
       .setImage('')
       .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
       .setTimestamp()
       .setURL('');
     message.channel.send(embed);
 }

 /////+donacion/////
 if(command === 'donacion'){
    const embed = new Discord.MessageEmbed()
       .setTitle('Donaciones')
       .setColor(0x5E9DE4)
       .setDescription('Haz donaciones en este enlace\n\nhttps://www.paypal.me/Humildadlandserver\n\n') 
       .addField('Nombre del servidor', message.guild.name, true)
       .addField('Integrantes', message.guild.memberCount, true)
       .setAuthor(client.user.username, client.user.avatarURL())
       .setThumbnail('https://cdn.discordapp.com/attachments/772014903786471424/889118765755818034/Logopit_1632052784984.png')
       .setImage('')
       .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
       .setTimestamp()
       .setURL('');
     message.channel.send(embed);
 }

 /////+invite/////
 if(command === 'web'){
    const embed = new Discord.MessageEmbed()
       .setTitle('Nuestra página web')
       .setColor(0x5E9DE4)
       .setDescription('Estos son los comandos disponibles:\n\n**PROXIMAMENTE**') 
       .addField('Nombre del servidor', message.guild.name, true)
       .addField('Integrantes', message.guild.memberCount, true)
       .setAuthor(client.user.username, client.user.avatarURL())
       .setThumbnail('https://cdn.discordapp.com/attachments/772014903786471424/889118765755818034/Logopit_1632052784984.png')
       .setImage('')
       .setFooter('Solicitado por: '+message.member.displayName, message.author.avatarURL())
       .setTimestamp()
       .setURL('');
     message.channel.send(embed);
 }

/////+ping/////
 if (command === 'ping') {
    let ping = Math.floor(message.client.ping); 
    message.channel.send(":ping_pong: Pong!")
      .then(m => {
          m.edit(`:incoming_envelope: Ping Mensajes: \`${Math.floor(m.createdTimestamp - Date.now())} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``);
        }); 
  }  
/////statsbot/////
if(message.content.startsWith(prefix + "statsbot")) {//definimos comando mas prefijo
                const embed = new Discord.MessageEmbed()//creamos embed v12, v11 richembed
                .setAuthor("𝐔𝐦𝐢𝐥𝐝𝐚𝐝𝐥𝐚𝐧𝐝", client.user.avatarURL())//define el avatar de tu bot
                .setThumbnail("https://cdn.discordapp.com/attachments/772014903786471424/889118765755818034/Logopit_1632052784984.png")
                .addField("Desarrollador", `  ManelS#4788`)//si hiciste el bot solo como en mi caso, pon tu nick, si lo hiciste con un amigo escribe .addField("Ayudante", ` [nombres]`)
                .addField("`Version`", `1.0.0`, true)// Su version
                .addField("Servidores", ` ${client.guilds.cache.size}`)//cuenta los servidores en los que esta tu bot
                .addField("Usuarios", ` ${client.users.cache.size}`)//los usuarios
                .addField("Ram", ` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)//la ram que usa en mb
                .addField("Lenguaje", " JavaScript")//lenguaje usado al desarrollar el bot
                .addField("Libreria", " Discord.js v12.2.0")//la libreria que usaste nwn
                message.channel.send(embed)//envia el embed
                }//fin del comando

/////serverinfo/////
                if (command === "serverinfo" ) {//primero tienen que tener command y args definidos
                  var server = message.guild;//definimos server
                  const embed = new Discord.MessageEmbed()//creamos un embed
                  .setTitle("**SERVERINFO**")//establecemos titulo
                  .setDescription("**INFORMACION ACTUAL DEL SERVIDOR**")//establecemos descripcion
                  .setThumbnail(server.iconURL())//aca aparecera el icono del server
                  .setAuthor(server.name, server.iconURL())//aca va a aparecer el icono y nombre del server
                  .addField('**ID**', server.id, true)//esto es para obtener la id del server
                  .addField('**FECHA DE CREACION**',`${server.joinedAt}`)//con esto obtenemos la fecha de creacion del server
                  .addField("**REGION:**", message.guild.region)//con esto obtenemos la region del server
                  .addField("**OWNER DEL SERVIDOR:**",`${server.owner.user}`)//con esto obtenemos el creador del server
                  .addField("** ID DEL OWNER :**",`${server.ownerID}`)//con esto la id del creador del server
                  .addField(`**CANALES** [${server.channels.cache.size}]ㅤㅤ`, `Categoria: ${server.channels.cache.filter(x => x.type === "category").size} texto: ${server.channels.cache.filter(x => x.type === "text").size} voz: ${server.channels.cache.filter(x => x.type === "voice").size}`, true)
                  .addField('**MIEMBROS**', server.memberCount, true)//con esto obtenemos los miembros que hay en el server
                  .addField("**BOTS**",`${message.guild.members.cache.filter(m => m.user.bot).size}`)//con esto obtenemos los bots del server
                  .addField('**EMOJIS**',message.guild.emojis.cache.size)//con esto todos los emojis del server 
                  .addField('**BOOSTER**',message.guild.premiumSubscriptionCount.toString())// con esto el numero de booster del server
                  .addField('**NIVEL DE VERIFICACION**',`${server.verificationLevel}`)//con esto obtenemos el nivel de verificacion del server
                  .addField('**ROLES**', server.roles.cache.size,true)//con esto la cantidad de roles
                  .setColor("RANDOM")//establecemos el color  yo puse random para que salga diferente color
                  message.channel.send(embed);//enviamos el embed
                }
//////TICKET/////
//////IMPOSTOR/////
if(command === 'impostor') { 
  const mencionado = message.mentions.members.first() 
  let random = [
  "No era el impostor",
  "Era el impostor"
  ] 
  if(!mencionado)
   return message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
  
  　　　.　　　 　　.　　　　　。　　 。　. 　
  
  .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
  
  　　ﾟ　　 ${message.author.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
  
  　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。
  
  　　ﾟ　　　.　　　. ,　　　　.　 .`) 
  

  
  message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
  
  　　　.　　　 　　.　　　　　。　　 。　. 　
  
  .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
  
  　　ﾟ　　 ${mencionado.user.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
  
  　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。
  
  　　ﾟ　　　.　　　. ,　　　　.　 .`)
  }

//////RANDOM USER//////
  if(message.content.startsWith(prefix + "randomuser")) {//definimo el comando
    const embed = new Discord.MessageEmbed() //definimos embed
        .setDescription('Afortunado: ' + message.guild.members.cache.random().displayName) //aqui decimos que en la descripcion del embed va a decir "Afortunado + un usario aleatorio del servidor"
        .setColor("RANDOM")//color random
    message.channel.send(embed)//que envie el mensaje
    }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////rol/////



///////ADMIN COMMANDS////////  
//////servidores de BOT/////
if (command === "name-servers") { //creamos el comando y abrimos
  if(message.author.id !== '321630837567389696') return
  let embed = new Discord.MessageEmbed() //declaramos embed
    .setTitle(`Estoy en ${client.guilds.cache.size} Servers !`)
//escribimos un titulo (la funcion de ${client.guilds.cache.size} es mostrar la cantidad de servidores en los que se encuentra el bot
    .setDescription(`${client.guilds.cache.map(r => r.name).join(". \n\n")}`)
//Buscamos un MAP, el cual nos mostrara los nombres de los servidores
    .setColor("RANDOM")
//Seleccionamos un color, en este caso random
  message.reply(embed) //enviamos
}

//client.login//
});
client.login(config.token);