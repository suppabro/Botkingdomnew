global.owner = ['94704029017']  
global.mods = ['94704029017'] 
global.prems = ['94704029017']
global.nameowner = 'Supuna'
global.numberowner = '94704029017' 
global.mail = 'suppa2293@gmail.com' 
global.gc = 'https://chat.whatsapp.com/DNUr9fAAaTq6YW3SFQHX7Q'
global.instagram = 'https://chat.whatsapp.com/DNUr9fAAaTq6YW3SFQHX7Q'
global.wm = '© 𝚋𝚘𝚝𝚔𝚒𝚗𝚐𝚍𝚘𝚖'
global.wait = '_*𝙿𝙻𝙴𝙰𝚂𝙴 𝚠𝚊𝚒𝚝..*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ 𝙿𝙻𝙴𝙰𝚂𝙴 𝚠𝚊𝚒𝚝...*'
global.packname = 'Made With'
global.author = '𝙱𝙾𝚃𝙺𝙸𝙽𝙶𝙳𝙾𝙼'

//INI WAJIB DI ISI!//
global.btc = 'Uvw8Qth6' 
//Daftar terlebih dahulu https://api.botcahx.live

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.lann = '25JsIH9I'
//Daftar https://api.betabotz.org 

global.APIs = {   
  btc: 'https://api.botcahx.live'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'Uvw8Qth6' 
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
