const https = require('https');

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) {
      throw `URL එක ඇතුලත් කරන්න!\n\nඋදාහරණය:\n${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
    }
try {
    if (!args[0].match(/tiktok/gi)) {
      throw `URL හමු නොවීය!`
    }
    m.reply('*කරුණාකර රැඳී සිටින්න..*')
    const api = await https.get(`https://api.botcahx.live/api/dowloader/tiktok?url=${args[0]}&apikey=${btc}`, response => {
      let data = '';
      response.on('data', chunk => {
        data += chunk;
      });
      response.on('end', async () => {
        const res = JSON.parse(data);
        var { 
          video, 
          title, 
          title_audio,
          audio
        } = res.result
        conn.sendFile(m.chat, video, null, `Title: ${title}\nවිස්තර: ${title_audio}\nAudio: ${audio[1]}`, m);
      });
    }).on('error', error => {
      console.log(error);
      throw error.message
    });
  } catch (e) {
    console.log(e)
    throw `දෝෂයක් තිබේ!`
  }
};

handler.help = ['tiktok'];
handler.command = /^(tiktok|tt|tiktokdl|tiktoknowm)$/i
handler.tags = ['downloader'];
handler.limit = true;
handler.group = false;
handler.premium = false;
handler.owner = false;
handler.admin = false;
handler.botAdmin = false;
handler.fail = null;
handler.private = false;

module.exports = handler;
