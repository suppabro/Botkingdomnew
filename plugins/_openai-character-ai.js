 const fetch = require('node-fetch')

let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw(`පෙළ සහ අක්ෂර ඇතුළත් කරන්න!\nExample: ${usedPrefix + command} හායි කිරිටෝ|ඔබ මොකද කරන්නේ?`)    
  try {
    let [ logic, prompt ] = text.split('|')
    m.reply(`...`)
    let res = await fetch(`https://api.botcahx.live/api/search/c-ai?prompt=${prompt}?&char=${logic}&apikey=${btc}`)
    let json = await res.json()
    m.reply(json.message)
  } catch (error) {
    console.error(error)
    m.reply('විධානය ක්‍රියාත්මක කිරීමේදී දෝෂයක් ඇති විය.')
  }
}

handler.command = handler.help = ['c-ai','character-ai']
handler.tags = ['tools']
handler.owner = false
handler.limit = false
handler.group = false
handler.private = false

module.exports = handler
