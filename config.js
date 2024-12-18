const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION _ID: process.env.SESSION_id || 'n7ZgxADT#ecoUlBKMKIk0UVGvIQQByrwm933F-lWC-BQuHrs2JKw',
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/HpDg2Bt/2246.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HI I AM ALVIN MD I AM ALIVE NOW !!" ,
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
BOT_NUMBER: process.env.BOT_NUMBER || "94760264995",
OWNER_REACT: process.env.OWNER_REACT || "🧢",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
READ_CMD: process.env.READ_CMD || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
ALWAYS_RECORDING: process.env.ALWAYS_RECORDING || "true",
BOT_NAME: process.env.BOT_NAME || "🧸 𝐀𝐋𝐕𝐈𝐍 - 𝐌𝐃 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓 🧸",
AUTO_REACT: process.env.AUTO_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
ANTI_DELETE: process.env.ANTI_DELETE || "true"
};
