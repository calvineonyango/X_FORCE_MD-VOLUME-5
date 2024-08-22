//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "calvinonyango700@gmail.com";
global.location = "Migori, Kenya";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/kenya";
global.github = process.env.GITHUB || "https://github.com/calvineonyango/X_FORCE_MD-VOLUME-5";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vadx3PxJ3juvWsDlrN11";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vadx3PxJ3juvWsDlrN11";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e692a1c0212676a0574f6.jpg";
global.devs = "https://t.me/obu254";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "254796281776";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || "3";
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/d651f3e156f14597440be.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "5.52",
  caption: process.env.CAPTION || "𝚾-𝐅𝚯𝚪𝐂𝚵-𝚳𝐃 𝛁𝚯𝐋𝐔𝚳𝚵5™`",
  author: process.env.PACK_AUTHER || "𝚾-𝐅𝚯𝚪𝐂𝚵-𝚳𝐃 𝛁𝚯𝐋𝐔𝚳𝚵5",
  packname: process.env.PACK_NAME || "𝐅𝚯𝚪𝐂𝚵-𝚳𝐃 𝛁𝚯𝐋𝐔𝚳𝚵5",
  botname: process.env.BOT_NAME || "𝐅𝚯𝚪𝐂𝚵-𝚳𝐃 𝛁𝚯𝐋𝐔𝚳𝚵5",
  ownername: process.env.OWNER_NAME || "𝐂𝚯𝚩𝐔≈≈𝚻𝚵𝐂𝚮",
  errorChat: process.env.ERROR_CHAT || "true",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
