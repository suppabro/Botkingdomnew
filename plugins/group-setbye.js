let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    global.db.data.chats[m.chat].sBye = text
    m.reply('බායි සාර්ථකව සකසා ඇත\n@user (Mention)')
  } else throw 'පාඨය කොහෙද??'
}
handler.help = ['setbye <teks>']
handler.tags = ['owner', 'group']

handler.command = /^setbye$/i

handler.botAdmin = true

module.exports = handler
