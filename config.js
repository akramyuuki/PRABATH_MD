const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://akrambajouli34:4UXlESj1pPssCjZz@cluster0.qcit3kj.mongodb.net/"
global.port= process.env.PORT || 5000
global.email = 'sam@sec.live'
global.github = 'https://github.com/prabathLK/PRABATH-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // yukigeoo
global.sudo = process.env.SUDO ||'212715056645'
global.devs = '212715056645';
global.website = 'https://github.com/prabathLK/PRABATH-MD' //wa.me/+212715056645
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://i.imgur.com/1dfnt7O.jpeg'
module.exports = {
  botname: process.env.BOT_NAME || '💕a💕k💕r💕a💕m',
  autosticker: process.env.AUTO_STICKER || 'false',
  autovoice: process.env.AUTO_VOICE || 'true',
  botapikey: process.env.BOTCAHX_API || '',
  alivepic: process.env.ALIVE_IMG || 'https://telegra.ph/file/6a15f3a940f3e92118db0.jpg',
  alivemsj: process.env.ALIVE_MSJ || '*Warani 7ay hhhh mani myt lah ihdik 😂🤦🏻‍♂️',
  ownername:process.env.OWNER_NAME || 'akram',
  sessionName: process.env.SESSION_ID || 'PRABATH-MD::UFJBQkFUSC1NRDo6c2Vzc2lvbl9yYV8xMjIwZGJkYjRiMzcxZV92aTo6R3JhbW15UHJvZHVjZWQKOjoxZGMwMTI0OGI0ZTMxYmIyNGI3ZDliNGNlNTY=',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || true,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'PRABATH-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
