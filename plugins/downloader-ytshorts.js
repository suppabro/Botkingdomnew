var handler = async (m, {conn, text, usedPrefix}) => {
  if (!text) throw 'YouTube හි URL ලබා දෙන්න Shorts!'
  try {
    var vid = `https://aemt.me/youtube?url=${text}&filter=audioandvideo&quality=highestvideo&contenttype=video/mp4`
    var aud = `https://aemt.me/youtube?url=${text}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg` 
    await conn.sendMessage(m.chat, { audio: { url: aud }, mimetype: 'audio/mpeg' }, { quoted: m }) 
    await conn.sendMessage(m.chat, { video: { url: vid }, mimetype: 'video/mp4' }, { quoted: m })
  } catch (e) {
    throw 'වීඩියෝ/ශ්‍රව්‍ය හමු නොවිණි'
  }
}
handler.command = handler.help =['ytshorts','youtubeshorts','shorts','short'];
handler.tags = ['downloader'];
handler.exp = 0;
handler.limit = true;
handler.premium = false;
module.exports = handler;
