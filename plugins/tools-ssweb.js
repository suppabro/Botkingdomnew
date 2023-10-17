var fs = require('fs');
var path = require('path');
var fetch = require('node-fetch');
var handler = async (m, { conn, command, args }) => {
  if (!args[0]) return conn.reply(m.chat, 'Input URL!', m);
  if (args[0].match(/xnxx\.com|hamster\.com|nekopoi\.care/i)) {
    return conn.reply(m.chat, 'මෙම සබැඳිය තහනම්!', m);
  }
  await m.reply('_Ｌｏａｄｉｎｇ．．._');
  var url = args[0].startsWith('http') ? args[0] : 'https://' + args[0]
  try {
    var img = await fetch(`https://api.botcahx.live/api/tools/ssweb?url=${url}&apikey=${btc}`);
    if (!img) {
      await m.reply('පළමු උත්සාහයේදීම අසාර්ථක විය.  දෙවන උත්සාහය ආරම්භ කිරීම...');
      img = await fetch(`https://api.botcahx.live/api/tools/ssweb?url=${url}&apikey=${btc}`);
      if (!img) return conn.reply(m.chat, 'රූපය නොමැත', m);
    }
    var filepath = path.join(__dirname, '../tmp/') + (+new Date) + '.jpeg'; // Ubah ke tmp folder
    if (!fs.existsSync(path.join(__dirname, '../tmp/'))) fs.mkdirSync(path.join(__dirname, '../tmp/'));
    const dest = fs.createWriteStream(filepath);
    dest.on('finish', () => {
    conn.sendFile(m.chat, filepath, 'screenshot.jpeg', '.මෙන්න පින්තූරය', m)
        .then(() => {
        })
        .catch(() => { });
    });
    img.body.pipe(dest);    img.body.pipe(fs.createWriteStream(filepath));
  } catch (e) {
    console.log(e);
    conn.reply(m.chat, `වැරදුනා!`, m);
  }
}
handler.help = ['ssweb','sspc'];
handler.tags = ['tools'];
handler.command = ['ssweb', 'sspc', 'ss',]

handler.limit = true;
handler.fail = null;

module.exports = handler;
