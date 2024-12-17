const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')
cmd({
    pattern: "song",
    desc: "To download songs.",
    react: "🎵",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
🧸 𝐀𝐋𝐕𝐈𝐍 - 𝐌𝐃 𝐒𝐎𝐍𝐆 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 🧸

🎵 *Song Found!* 

🕖➥ *Title:* ${data.title} 
⌛➥ *Duration:* ${data.timestamp} 
👀➥ *Views:* ${data.views} 
📆➥ *Uploaded On:* ${data.ago} 
🖇️➥ *Link:* ${data.url} 

🎧 *Enjoy the music brought to you by* *𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀*!  😚

> *𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐖𝐈𝐓𝐇 🌹𝐁𝐘 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀* 

> *© 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀* 
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message
await conn.sendMessage(from,{audio: {url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"*© 🧸 𝐀𝐋𝐕𝐈𝐍 - 𝐌𝐃 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓 🧸*"},{quoted:mek})

}catch(e){
console.log(e)
  reply(`${e}`)
}
})

//====================video_dl=======================

cmd({
    pattern: "video",
    desc: "To download videos.",
    react: "🎥",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
if(!q) return reply("Please give me a url or title")  
const search = await yts(q)
const data = search.videos[0];
const url = data.url
    
    
let desc = `
🧸 𝐀𝐋𝐕𝐈𝐍 - 𝐌𝐃 𝐕𝐈𝐃𝐄𝐎 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑 🧸

🎥 *Video Found!* 

📄➥ *Title:* ${data.title} 
⌛➥ *Duration:* ${data.timestamp} 
👀➥ *Views:* ${data.views} 
📆➥ *Uploaded On:* ${data.ago} 
🖇️➥ *Link:* ${data.url} 

🎬 *Enjoy the video brought to you by* *𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀*! 😚

> *𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐖𝐈𝐓𝐇 🌹𝐁𝐘 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀* 

> *© 𝐌𝐑 𝐒𝐔𝐑𝐀𝐍𝐆𝐀* 
`

await conn.sendMessage(from,{image:{url: data.thumbnail},caption:desc},{quoted:mek});

//download video

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video message
await conn.sendMessage(from,{video: {url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document: {url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"*© 🧸 𝐀𝐋𝐕𝐈𝐍 - 𝐌𝐃 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓 🧸*"},{quoted:mek})

}catch(e){
console.log(e)
  reply(`${e}`)
}
})
