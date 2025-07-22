const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false"  
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md-3";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website =process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Made With LOVE!" 


global.devs = "" // Developer Contacts
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254748803705";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" //"https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254748803705,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_56_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDk1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTM3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICA3NixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA1MCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAzNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgxLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzksXG4gICAgICAgIDI1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMzgsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTAzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQzLFxuICAgICAgICA0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDM2LFxuICAgICAgICA5MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTU0LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA5MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMzLFxuICAgICAgICAxODYsXG4gICAgICAgIDQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDU5LFxuICAgICAgICAxODksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNyxcbiAgICAgICAgMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MixcbiAgICAgICAgNzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDM5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDM4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjM3LFxuICAgICAgICA0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDksXG4gICAgICAgIDQ2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqMk5iYmFJTmFCdnJpRnVqRVN3dXZXSWJyTEdWam1wcDkvU2o1ZnY2dzY4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIS0ZpYjRZblN1cUhCLU9BLXl6S3lBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYzZDkwNjc0LTgyYjYtNDc0Ni05ZDYyLTQ4OGEzZTU0MzkyMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1LFxuICAgICAgOTYsXG4gICAgICA1MixcbiAgICAgIDgwLFxuICAgICAgMTAzLFxuICAgICAgMTg2LFxuICAgICAgMTEsXG4gICAgICAxMDQsXG4gICAgICAxMjIsXG4gICAgICAyMzYsXG4gICAgICAyMyxcbiAgICAgIDE3MSxcbiAgICAgIDIwNSxcbiAgICAgIDE3MyxcbiAgICAgIDU3LFxuICAgICAgMjI0LFxuICAgICAgMTM1LFxuICAgICAgMTc1LFxuICAgICAgODksXG4gICAgICAxMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk4LFxuICAgICAgMTU5LFxuICAgICAgOTUsXG4gICAgICAzOCxcbiAgICAgIDIyOCxcbiAgICAgIDE3MixcbiAgICAgIDEyMixcbiAgICAgIDk0LFxuICAgICAgMTcwLFxuICAgICAgMjQ5LFxuICAgICAgNDAsXG4gICAgICA1NixcbiAgICAgIDIzMyxcbiAgICAgIDExOSxcbiAgICAgIDc4LFxuICAgICAgMTU3LFxuICAgICAgNzYsXG4gICAgICAyMTMsXG4gICAgICAyMjEsXG4gICAgICAyMjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKTEV3VnNRK2ZYL3d3WVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkg3M2RaSThjUG00M1VMUno0b1ZrdzVzaHFHZUhFUVM0UUxyWnRNL0oxREU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQVNoZUxaSkdIWW5YMG9pdFI0V1VBRHJnamVsWDVpN1U1VnM3MW93bGE3dFB2MFZKdUVjMXJaYVM3WGNLbGpiU0h3c3R0REF0dDU3d0pScTVtVnM3REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMS8yNzQ4dkxoNSswcStjMExGTW8vc3lmWEQ3dTJsb0RjWDQ0enhKVk83UWV0ZUZSKytBSXRmU2RxOExoUHJ4MUdpVG52aUFKYUFaUTkyb3VoZ3N3Q1E9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDg4MDM3MDU6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxNDc5MTgxNzgxNDAyODo1NUBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0ODgwMzcwNTo1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3NTMyMTc3OTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMMGVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUwwZS5qc29uIjogIntcImtleURhdGFcIjpcImxKaFJhRmVjYTJkZWRYdmQrUDhVRG94RUxxUEI4TUVaR3ZpcVRxZkk1bEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTkxOTE0NTE0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3NTMyMTUxNDE5MzVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.1-developement",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD",
  ownername:process.env.OWNER_NAME|| "Purkioo",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
