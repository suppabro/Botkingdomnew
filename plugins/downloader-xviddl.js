var fetch = require("node-fetch")
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw ' Link!'
 
let anu = await fetch(`https://api.botcahx.live/api/download/xvideosdl?url=${text}&apikey=${btc}`)
let hasil = await anu.json() 

conn.sendMessage(m.chat, { video: { url: hasil.result.url }, fileName: 'xnxx.mp4', mimetype: 'video/mp4' }, { quoted: m })
  }                                                    
handler.command = handler.help = ['xvideosdown','xdown'];
handler.tags = ['internet'];
module.exports = handler;
