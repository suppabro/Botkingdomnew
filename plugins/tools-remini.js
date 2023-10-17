const fetch = require('node-fetch');
const uploadImage = require('../lib/uploadImage.js');

async function handler(m, { conn, usedPrefix, command }) {
  try {
    const q = m.quoted ? m.quoted : m;
    const mime = (q.msg || q).mimetype || q.mediaType || '';
    if (/^image/.test(mime) && !/webp/.test(mime)) {
      const img = await q.download();
      const out = await uploadImage(img);
      const api = await fetch(`https://api.botcahx.live/api/tools/remini?url=${out}&apikey=${btc}`);
      const image = await api.json();
      const { url } = image 
       conn.sendFile(m.chat, url, null, wm, m);
    } else {
      m.reply(`සිරස්තල සහිත පින්තූර යවන්න*${usedPrefix + command}* හෝ පවතින පින්තූර ටැග් කරන්න.`);
    }
  } catch (e) {
    console.error(e);
    m.reply(`හඳුනාගැනීම අසාර්ථක විය.  කරුණාකර නැවත උත්සාහ කරන්න.`);
  }
}

handler.help = ['remini'];
handler.tags = ['tools'];
handler.command = ['remini'];
handler.premium = false;
handler.limit = false;

module.exports = handler;
