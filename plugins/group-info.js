let handler = async (m, { conn, participants, groupMetadata, text }) => {

    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    let pp = 'https://aemt.me/file/C4j9GWChVurR.jpg'
    try {
        pp = await conn.getProfilePicture(m.chat)
    } catch (e) {
    } finally {
        let { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, expired, descUpdate, stiker } = global.db.data.chats[m.chat]
        const groupAdmins = getGroupAdmins(participants)
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split`@`[0]}`).join('\n')

        if (text) return m.reply(msToDate(expired - new Date() * 1))

සිරස්තලයට ඉඩ දෙන්න = `*කණ්ඩායම් තොරතුරු*\n
 *ID:*
 ${groupMetadata.id}
 *නම:*
 ${groupMetadata.subject}
 *විස්තර:*
 ${groupMetadata.desc}
 *මුළු සාමාජිකයින්:*
 ${participants.length} සාමාජික
 *සමූහ නිර්මාතෘ:*
 @${m.chat.split`-`[0]}
 *සමූහ පරිපාලක:*
 ${listAdmin}
 *බොට් සිටුවම්:*
 ${antiLink ?  '✅' : '❌'} ප්‍රති-සබැඳිය
 ${global.db.data.chats[m.chat].delete ?  '❌' : '✅'} මකාදැමීම විරෝධී
 ${isBanned ?  '✅' : '❌'} තහනම්
 ${descUpdate ?  '✅' : '❌'} විස්තරය
 ${හඳුනාගන්න ?  '✅' : '❌'} හඳුනාගන්න
 ${ස්ටිකරය ?  '✅' : '❌'} ස්ටිකර්
 ${සාදරයෙන් පිළිගනිමු ?  '✅' : '❌'} සාදරයෙන් පිළිගනිමු
 *බොට් පණිවිඩ සැකසීම්:*
 සාදරයෙන් පිළිගනිමු: ${sWelcome}
 ආයුබෝවන්: ${sBye}
 ප්‍රවර්ධනය: ${sPromote}
 පහත හෙලීම: ${sDemote}
 *ඉතිරි:*
${msToDate(expired - new Date() * 1)}
`.trim()
        let mentionedJid = groupAdmins.concat([`${m.chat.split`-`[0]}@s.whatsapp.net`])
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', caption, m, 0, { contextInfo: { mentionedJid } })
    }
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(gro?upinfo|info(gro?up|gc))$/i

handler.group = true

module.exports = handler

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " hari " + hours + " jam " + minutes + " menit";
    // +minutes+":"+sec;
}
