const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '#'



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
    var prefix = "#";
 if (message.content === "#help") {
  const embed = new Discord.RichEmbed()  
      .setColor("RANDOM")
      .setDescription(`
${prefix}help-general

${prefix}help-admin

${prefix}help-js


      `)
   message.channel.sendEmbed(embed)
   
   }
   });
 
   client.on("message", message => {
    var prefix = "#";
 if (message.content === "#help-general") {
  const embed = new Discord.RichEmbed()  
      .setColor("RANDOM")
      .setDescription(`

${prefix}avatar

${prefix}ping


      `)
   message.channel.sendEmbed(embed)
   
   }
   });
 
   client.on("message", message => {
    if (message.content === "#help-js-bc") {
     const embed = new Discord.RichEmbed()  
         .setColor("RANDOM")
         .setDescription(`
        
               اختر:

   #help-js-bc-1 ⇏ كود برودكاست مطور          
   
   `)
   message.channel.sendEmbed(embed)
    
   }
   });

   client.on("message", message => {
 if (message.content === "#help-js") {
  const embed = new Discord.RichEmbed()  
      .setColor("RANDOM")
      .setDescription(`
     
            اختار:
 
#help-js-admin ⇏ اكواد الادمين

#help-js-general ⇏ اكواد العامه

#help-js-bc ⇏ اكواد البرودكاست             

#help-js-wlc ⇏ اكواد الولكم

#help-js-games ⇏ اكواد الالعاب
`)
message.channel.sendEmbed(embed)
 
}
});
 
client.on("message", message => {
    if (message.content === "#help-js-admin") {
     const embed = new Discord.RichEmbed()  
         .setColor("RANDOM")
         .setDescription(`
         
              اختار :
               
  #help-js-admin-1 ⇏ كود ميوت و فك الميوت مع السبب
   
  #help-js-admin-2 ⇏ كود الكيك مع السبب
               
  #help-js-admin-3 ⇏ كود الباند مع السبب
   
  #help-js-admin-4 ⇏ كود فتح و قفل الشات
   
  #help-js-admin-5 ⇏ كود مسح الشات
   `)
   message.channel.sendEmbed(embed)
   
   }
   });
 
   

   client.on("message", message => {
    var prefix = "#";
 if (message.content === "#help-js-general") {
     message.channel.send('');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
        
      اختار :     
      ${prefix}help-js-general-1 ⇏ كود الافتار
      
      ${prefix}help-js-general-2 ⇏ كود البنج
      
      ${prefix}help-js-general-3 ⇏ كود صورت السيرفر
      
      ${prefix}help-js-general-4 ⇏ كود معلومات البوت
      
      ${prefix}help-js-general-5 ⇏ كود معلومات السيرفر
`)
   message.author.sendEmbed(embed)
   
   }
   });
 
   client.on("message", message => {
    var prefix = "#";
 if (message.content === "#help-js-games") {
     message.channel.send('');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
        
      اختار :     
      ${prefix}help-js-games-1 ⇏ كود لعبت مريم
      
      ${prefix}help-js-games-2 ⇏ كود لعبت صراحه
      
      ${prefix}help-js-games-3 ⇏ كود لعبت كت تويت
      
      ${prefix}help-js-games-4 ⇏ كود عقاب
`)
   message.author.sendEmbed(embed)
   
   }
   });

client.on('ready',  () => { //GSU ForEver
    client.user.setGame("GSU ON THE TOP", "Watching"); //GSU ForEver
});

   client.on("message", message => {
    var prefix = "#";
 if (message.content === "#help-admin") {
     message.channel.send('');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
      اختار :
      ${prefix}unmute
      
      ${prefix}mute
      
      ${prefix}ban
      
      ${prefix}kick
      
      ${prefix}bc
`)
   message.author.sendEmbed(embed)
   
   }
   });
 
   client.on("message", message => {
    var prefix = "#";
 if (message.content === "#help-js-wlc") {
     message.channel.send('');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
      اختار :
      ${prefix}help-js-wlc-1 ⇏ كود الترحيب و المغادره
`)
   message.author.sendEmbed(embed)
   
   }
   });
 

   client.on('message', async message =>{
    if (message.author.boss) return;
      var prefix = "#";
  
  if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
       command = command.slice(prefix.length);
      let args = message.content.split(" ").slice(1);
      if (command == "mute") {
          if (!message.channel.guild) return;
          if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
          let user = message.mentions.users.first();
          let muteRole = message.guild.roles.find("name", "Muted");
          if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
          if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
          let reason = message.content.split(" ").slice(2).join(" ");
          message.guild.member(user).addRole(muteRole);
          const muteembed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setAuthor(`Muted!`, user.displayAvatarURL)
          .setThumbnail(user.displayAvatarURL)
          .addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
          .addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
          .addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
          .addField("User", user, true)
          message.channel.send({embed : muteembed});
          var muteembeddm = new Discord.RichEmbed()
          .setAuthor(`Muted!`, user.displayAvatarURL)
          .setDescription(`      
  ${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
  ${message.author.tag} تمت معاقبتك بواسطة
  [ ${reason} ] : السبب
  اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
  `)
          .setFooter(`في سيرفر : ${message.guild.name}`)
          .setColor("RANDOM")
      user.send( muteembeddm);
    }
  if(command === `unmute`) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
  if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))
  
    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");
  
    let role = message.guild.roles.find (r => r.name === "Muted");
    
    if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")
  
    await toMute.removeRole(role)
    message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");
  
    return;
  
    }
  
  });

  client.on('message', message => {
	var prefix = "#"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});

client.on('message', message => {
	var prefix = "#"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

   client.on('message', message =>{
    let args = message.content.split(' ');
    let prefix = '#'; 
    
    if(args[0] === `${prefix}avatar`){
        let mentions = message.mentions.members.first()
        if(!mentions) {
          let sicon = message.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(message.author.avatarURL)
          .setColor("#f7abab") 
          .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
          message.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#f7abab")
          .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
          .setImage(sicon)
          message.channel.send({embed})
        }
    };
});

client.on("message", message => {
    var prefix = "#";
 if (message.content === "#help-js-bc-1") {
     message.channel.send('');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
**❃- كود برودكاست مطور**
https://pastebin.com/6RiM8Leg
`)
   message.author.sendEmbed(embed)
   
   }

   });
 
   client.on('message', message => {
    if(!message.channel.guild) return;
  if(message.content.startsWith('#bc')) {
  if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
  let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
  let copy = "Legend Codes..";
  let request = `Requested By ${message.author.username}`;
  if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
  msg.react('✅')
  .then(() => msg.react('❌'))
  .then(() =>msg.react('✅'))
  
  let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
  let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
  let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
  let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
  reaction1.on("collect", r => {
  message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
  message.guild.members.forEach(m => {
  var bc = new
  Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('Broadcast')
  .addField('Server', message.guild.name)
  .addField('Sender', message.author.username)
  .addField('Message', args)
  .setThumbnail(message.author.avatarURL)
  .setFooter(copy, client.user.avatarURL);
  m.send({ embed: bc })
  msg.delete();
  })
  })
  reaction2.on("collect", r => {
  message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
  msg.delete();
  })
  })
  }
  
  });

   client.on("message", message => {
    var prefix = "#";
 if (message.content === "#help-js-general-1") {
     message.channel.send('');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
**❃- كود الافاتار**
https://pastebin.com/bv3riTQk
`)
   message.author.sendEmbed(embed)
   
   }

   });


   client.on("message", message => {
    var prefix = "#";
 if (message.content === "#help-js-bc-1") {
     message.channel.send('');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
**❃- كود الولكم**
https://pastebin.com/
`)
   message.author.sendEmbed(embed)
   
   }

   });
 



    client.on("message", message => {
        var prefix = "#";
     if (message.content === "#help-js-general-2") {
         message.channel.send('');
      const embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription(`
          **❃- كود البنج**
          https://pastebin.com/8ZML4eKb
    `)
       message.author.sendEmbed(embed)
       
       }
       });
 
       client.on("message", message => {
        var prefix = "#";
     if (message.content === "#help-js-general-3") {
         message.channel.send('');
      const embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription(`
    **❃- كود صورت السيرفر**
    https://pastebin.com/pfvHvPiA
    `)
       message.author.sendEmbed(embed)
       
       }
 
       });
       client.on("message", message => {
        if (message.content === "#ping") {
        const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
    message.channel.sendEmbed(embed);
      }
  });



       client.on("message", message => {
        var prefix = "#";
     if (message.content === "#help-js-general-5") {
         message.channel.send('');
      const embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription(`
    **❃- كود معلومات السيرفر**
    https://pastebin.com/YKzU1rZs
    `)
       message.author.sendEmbed(embed)
       
       }
       });
 
       client.on("message", message => {
        var prefix = "#";
     if (message.content === "#help-js-general-4") {
         message.channel.send('');
      const embed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setDescription(`
    **❃- كود معلومات البوت**
    https://pastebin.com/9jhBPsNh
    `)
       message.author.sendEmbed(embed)
       
       }
       });

   client.on("message", message => {
    var prefix = "#";
 if (message.content === "#help-js-admin-1") {
     message.channel.send('');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
**❃- كود اعطاء الميوت و فكه مع السبب**
https://pastebin.com/W0B9j3Ai
`)
   message.author.sendEmbed(embed)
   
   }
   });
 
   client.on("message", message => {
    var prefix = "#";
 if (message.content === "#help-js-games-1") {
     message.channel.send('');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
**❃- كود لعبت مريم**
https://pastebin.com/LKMbaMLb
`)
   message.author.sendEmbed(embed)
   
   }
   });

   client.on("message", message => {
    var prefix = "#";
 if (message.content === "#help-js-games-2") {
     message.channel.send('');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
**❃- كود لعبت صراحه**
https://pastebin.com/sGqXVmsf
`)
   message.author.sendEmbed(embed)
   
   }
   });

   client.on("message", message => {
    var prefix = "#";
 if (message.content === "#help-js-games-3") {
     message.channel.send('');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
**❃- كود لعبت كت تويت**
https://pastebin.com/dNweK4qi
`)
   message.author.sendEmbed(embed)
   
   }
   });

   client.on("message", message => {
    var prefix = "#";
 if (message.content === "#help-js-games-4") {
     message.channel.send('');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
**❃- كود لعبت عقاب**
https://pastebin.com/WgiQqD47
`)
   message.author.sendEmbed(embed)
   
   }
   });


client.on('message', async message => {
            if(message.content.includes('discord.gg')){ 
                if(message.member.hasPermission("MANAGE_GUILD")) return;
        if(!message.channel.guild) return;
        message.delete()
          var command = message.content.split(" ")[0];
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole){
      try{
        muterole = await message.guild.createRole({
          name: "Muted",
          color: "#9c9c9c",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
           if(!message.channel.guild) return message.reply('** This command only for servers**');
     message.member.addRole(muterole);
    const embed500 = new Discord.RichEmbed()
      .setTitle("ميوت بسبب نشر")
            .addField(`**لقد تم إعطائك ميوت كتابي **` , `**السبب: نشر رابط سيرفر في الديسكورد**`)
            .setColor("c91616")
            .setThumbnail(`${message.author.avatarURL}`)
            .setAuthor(message.author.username, message.author.avatarURL)
        .setFooter(`${message.guild.name} `)
     message.channel.send(embed500)
     message.author.send('**`لقد تم إعطاء ميوت بسبب النشر إذا كان عن طريق الخطا فتكلم مع الإدارة`**');

              
              
              
              }
})






              
   client.on("message", message => {
    var prefix = "#";
 if (message.content === "#help-js-admin-2") {
     message.channel.send('');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
**❃- كود الكيك مع السبب**
https://pastebin.com/Xwmpb62x
`)
   message.author.sendEmbed(embed)
   
}
});
 
client.on("message", message => {
 var prefix = "#";
if (message.content === "#help-js-admin-3") {
  message.channel.send('');
const embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setDescription(`
**❃- الباند مع السبب** 
https://pastebin.com/4AVNPhsP
`)
message.author.sendEmbed(embed)
 
}
});
 
 
client.on("message", message => {
    var prefix = "#";
 if (message.content === "#help-js-admin-4") {
     message.channel.send('');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
**❃- كود فتح و قفل الشات**  
https://pastebin.com/Vp1duwA5
`)
   message.author.sendEmbed(embed)
   
}
});
 
 
client.on("message", message => {
    var prefix = "#";
 if (message.content === "#help-js-admin-5") {
     message.channel.send('');
     const embed = new Discord.RichEmbed()
      .setColor("RANDOM")  
  .setDescription(`
**❃- كود مسح الشات**
https://pastebin.com/r3Q0xSTK
`)
    message.author.sendEmbed(embed)
   
}
});





client.login(process.env.BOT_TOKEN);
