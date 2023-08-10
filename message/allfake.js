/**
  * Created by Maulana / Lana
  * Base : Dittaz & Irfan Haryanto
  * Contact me on WhatsApp wa.me/6281775445373
  * Subscribe me on Youtube : https://youtube.com/@maulanabot
  
  * If you want to buy an updated script that is not encrypted, please WhatsApp me
*/


import fs from "fs"


export default async function(m) {

global.ftoko = { key: {fromMe: false,participant: `0@s.whatsapp.net` },message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync('./stik/quoted.jpg')},"title": `Kikuchanj - Sazumi Kemii`,"currencyCode": "IDR", "priceAmount1000": `Kikuchanj - Sazumi Kemii`, "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}


global.fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `Kikuchanj - Sazumi Kemii`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${m.pushname},;;;\nFN:${m.pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}

global.ftext = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `Kikuchanj - Sazumi Kemii`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/quoted.jpg')}}}

global.ftroli = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 200, status: 1,surface : 2,message: `Kikuchanj - Sazumi Kemii`,orderTitle: `kak`,thumbnail: fs.readFileSync('./stik/quoted.jpg'), sellerJid: `0@s.whatsapp.net`}}}

global.floc = { key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,'jpegThumbnail': fs.readFileSync('./stik/quoted.jpg')}}}

global.fimage = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})}, message: {"imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./stik/quoted.jpg'), "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

global.fdoc = { key : { participant : '0@s.whatsapp.net'}, message: { documentMessage: { title: 'Halo bang', jpegThumbnail: fs.readFileSync('./stik/quoted.jpg')}}}

//bug kontak
global.lep = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...({ remoteJid: "@s.whatsapp.net" }) 
},
"message": {
"contactMessage": {
"displayName": "WhatsApp Support",
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Support;WhatsApp;;;\nFN:WhatsApp Support\nORG:WhatsApp Support\nTITLE:\nitem1.TEL;waid=6288980870067:+62 889-8087-0067\nitem1.X-ABLabel:Ponsel\nX-WA-BIZ-NAME:WhatsApp Support\nEND:VCARD"
}}}

}

/**
  * Created by Maulana / Lana
  * Base : Dittaz & Irfan Haryanto
  * Contact me on WhatsApp wa.me/6281775445373
  * Subscribe me on Youtube : https://youtube.com/@maulanabot
  
  * If you want to buy an updated script that is not encrypted, please WhatsApp me
*/