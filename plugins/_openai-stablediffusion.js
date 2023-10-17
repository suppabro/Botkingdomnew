const fetch = require("node-fetch");
const { writeFileSync } = require("fs");
const path = require('path');
let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text) throw `රූපයට පරිවර්තනය කිරීමට පෙළ ඇතුළත් කරන්න\n*උදාහරන:* ${usedPrefix}${command} 1girl, blush, looking to viewer, warm smile`;
  if (!text.includes(',')) throw `කරුණාකර විමසුම නිවැරදිව භාවිතා කරන්න.  තර්ක වෙන් කිරීමට කොමාව *[ , ]* භාවිතා කරන්න.\n*Contoh:* ${usedPrefix}${command} 1girl, blush, looking to viewer, warm smile`;  
  const prompt = text.split(',').join(', ');
  const response = await fetch(`https://api.botcahx.live/api/search/openai-image?text=${prompt}&apikey=${btc}`);
  const buffer = await response.buffer();
  const saveFilename = path.join(__dirname, '../tmp/stablediffusion.png');
  writeFileSync(saveFilename, buffer);
  conn.sendFile(m.chat, saveFilename, null, `*Result For:* _${prompt}_`, m);
};
handler.command = handler.help = ['diffusion', 'stablediffusion', 'diff'];
handler.tags = ['tools'];
handler.limit = true;
handler.private = false;
handler.group = false;

module.exports = handler;
