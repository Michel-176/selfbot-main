//Anjing Mau Nyolong Ya ?
//Kasih Nama Sakura Lah Bang Hargain Dikit Gw Capek,Ada fitur anti delete? gak ada.
//And Gw Mencium Bau Bau Ada Kang Colong Case Nih :v
//Gak Usah Di Hapus Gblk Dimana Harga Diri Lu Gw Capek2 Ngefix malah di hapus
//Fixed Some Bug By Sakura & Michel,Tunggu update terbaru lagi
//apikey beli sendiri :v 
//function autosticker beli di ẉa.me/6283811473200 modal dikit ajg jangan mau enak aja
const
  {
    WAConnection,
    MessageType,
    Presence,
    MessageOptions,
    Mimetype,
    WALocationMessage,
    WA_MESSAGE_STUB_TYPES,
    ReconnectMode,
    ProxyAgent,
    GroupSettingChange,
    waChatKey,
    mentionedJid,
    processTime,
} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal") 
const moment = require("moment-timezone") 
const imageToBase64 = require('image-to-base64')
const fs = require("fs") 
const requests = require("node-fetch")
const { color, bgcolor } = require('./lib/color')
const axios = require("axios")
const { fetchJson } = require('./lib/fetcher')
const { exec, spawn} = require("child_process")
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close} = require('./lib/functions')
const got = require("got");
const ms = require('parse-ms')
const toMs = require('ms')
const ytdl = require('ytdl-core')
const brainly = require('brainly-scraper')
const gis = require('g-i-s');
const request = require('request');
const yts = require( 'yt-search')
const ID3Writer = require('browser-id3-writer')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const afk = JSON.parse(fs.readFileSync('./database/afk.json'))
const _autostiker = JSON.parse(fs.readFileSync('./lib/helper/autostiker.json'))

prefix = '/'
fake = '*_CIE DI DELETE_*'
fakes  = '𝐒𝐄𝐋𝐅𝐁𝐎𝐓 - 𝐖𝐀'
nomornye = '0'
blocked = []
cr= '𝐒𝐄𝐋𝐅𝐁𝐎𝐓 - 𝐖𝐀'
banChats = true
offline = false
publik = false
waktuafk = '-'
alasanafk = '-'

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const addafk = (from) => {
    const obj = { id: from, expired: Date.now() + toMs('2m') }
    afk.push(obj)
    fs.writeFileSync('./database/afk.json', JSON.stringify(afk))
}
const cekafk = (_dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            _dir.splice(position, 1)
            fs.writeFileSync('./database/afk.json', JSON.stringify(_dir))
        }
    }, 1000)
}
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const isAfk = (idi) => {
    let status = false
    Object.keys(afk).forEach((i) => {
        if (afk[i].id === idi) {
            status = true
        }
    })
    return status
}

function kyun(seconds){
  function pad(s){
  return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} H ${pad(minutes)} M ${pad(seconds)} S`
  
  
}
/**HARI**/
var date = new Date();

var tahun = date.getFullYear();

var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();


switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}
switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}
            switch(jams){
                case 0: jams = "Malam"; break;
                case 1: jams = "Malam"; break;
                case 2: jams = "Malam"; break;
                case 3: jams = "Pagi"; break;
                case 4: jams = "Pagi"; break;
                case 5: jams = "Pagi"; break;
                case 6: jams = "Pagi"; break;
                case 7: jams = "Pagi"; break;
                case 8: jams = "Pagi"; break;
                case 9: jams = "Pagi"; break;
                case 10: jams = "Pagi"; break;
                case 11: jams = "Siang"; break;
                case 12: jams = "Siang"; break;
                case 13: jams = "Siang"; break;
                case 14: jams = "Siang"; break;
                case 15: jams = "Sore"; break;
                case 16: jams = "Sore"; break;
                case 17: jams = "Sore"; break;
                case 18: jams = "Malam"; break;
                case 19: jams = "Malam"; break;
                case 20: jams = "Malam"; break;
                case 21: jams = "Malam"; break;
                case 22: jams = "Malam"; break;
                case 23: jams = "Malam"; break;
            }
var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "Jam: " + jams + ":" + menit + ":" + detik;
var tampilHari = "" + jams;

console.log(tampilTanggal);
console.log(tampilWaktu);

const misel = new WAConnection()
   misel.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(color('[','white'),color('∆','red'),color(']','white'),color('Scan','white'),color('The','red'),color('Whatsapp','yellow'))
})

misel.on('credentials-updated', () => {
  const authInfo = misel.base64EncodedAuthInfo()
   console.log(`credentials updated!`)
   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})
fs.existsSync('./session.json') && misel.loadAuthInfo('./session.json')
misel.connect();

misel.on('message-update', async (hurtz) => {
  try {
    const from = hurtz.key.remoteJid
    const messageStubType = WA_MESSAGE_STUB_TYPES[hurtz.messageStubType] || 'MESSAGE'
    const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
    const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
    const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
    const sender = hurtz.key.fromMe ? misel.user.jid : hurtz.key.remoteJid.endsWith('@g.us') ? hurtz.participant : hurtz.key.remoteJid
    const isRevoke = hurtz.key.remoteJid.endsWith('@s.whatsapp.net') ? true : hurtz.key.remoteJid.endsWith('@g.us') ? dataRevoke.includes(from) : false
    const isCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : dataCtRevoke.data ? true : false
    const isBanCtRevoke = hurtz.key.remoteJid.endsWith('@g.us') ? true : !dataBanCtRevoke.includes(sender) ? true : false

if (messageStubType == 'REVOKE' && isRevoke) {
          const from = hurtz.key.remoteJid
          console.log(`Status untuk grup : ${!isRevoke}\nStatus semua kontak : ${!isCtRevoke}\nStatus kontak dikecualikan : ${!isBanCtRevoke}`)
      if (!isRevoke) return
      if (!isCtRevoke) return
      if (!isBanCtRevoke) return
          const isGroup = hurtz.key.remoteJid.endsWith('@g.us') ? true : false
          const sender = hurtz.key.fromMe ? misel.user.jid : isGroup ? hurtz.participant : hurtz.key.remoteJid
          let int
          let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
          const id_deleted = hurtz.key.id
          const conts = hurtz.key.fromMe ? misel.user.jid : misel.contacts[sender] || { notify: jid.replace(/@.+/, '') }
          const pushname = hurtz.key.fromMe ? misel.user.name : conts.notify || conts.vname || conts.name || '-'
          const opt4tag = {
             contextInfo: { mentionedJid: [sender] }
          }
          for (let i = 0; i < infoMSG.length; i++) {
             if (infoMSG[i].key.id == id_deleted) {
                const dataInfo = infoMSG[i]
                const type = Object.keys(infoMSG[i].message)[0]
                const timestamp = infoMSG[i].messageTimestamp
                int = {
                   no: i,
                   type: type,
                   timestamp: timestamp,
                   data: dataInfo

                }
             }
          }
          const index = Number(int.no)
          const body = int.type == 'conversation' ? infoMSG[index].message.conversation : int.type == 'extendedTextMessage' ? infoMSG[index].message.extendedTextMessage.text : int.type == 'imageMessage' ? infoMSG[index].message.imageMessage.caption : int.type == 'stickerMessage' ? 'Sticker' : int.type == 'audioMessage' ? 'Audio' : int.type == 'videoMessage' ? infoMSG[index].videoMessage.caption : infoMSG[index]
          const mediaData = int.type === 'extendedTextMessage' ? JSON.parse(JSON.stringify(int.data).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : int.data
          if (int.type == 'conversation' || int.type == 'extendedTextMessage') {
            var itsme = `${nomornye}@s.whatsapp.net`
          var split = `${fake}`
          const pingbro23 = {
            contextInfo: {
              participant: itsme,
              quotedMessage: {
                extendedTextMessage: {
                  text: split,
                }
              }
            }
          }
             const strConversation = `\`\`\`[ ⚠️ ] Terdeteksi pengapusan pesan [ ⚠️ ]

Nama : ${pushname} ( @${sender.replace('@s.whatsapp.net', '')} )
Tipe : Text
Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}
Pesan : ${body ? body : '-'}\`\`\`
`
             misel.sendMessage(from, strConversation, MessageType.text, opt4tag,{quoted:hurtz})
          } else if (int.type == 'stickerMessage') {
             var itsme = `${nomornye}@s.whatsapp.net`
          var split = `${fake}`
          const pingbro23 = {
            contextInfo: {
              participant: itsme,
              quotedMessage: {
                extendedTextMessage: {
                  text: split,
                }
              }
            }
          }
             const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
             const savedFilename = await misel.downloadAndSaveMediaMessage(int.data, `./media/sticker/${filename}`);
             const strConversation = `\`\`\`[ ⚠️ ] Terdeteksi pengapusan pesan [ ⚠️ ]

Nama : ${pushname} ( @${sender.replace('@s.whatsapp.net', '')} )
Tipe : Sticker
Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}\`\`\`
`
        const buff = fs.readFileSync(savedFilename)
        misel.sendMessage(from, strConversation, MessageType.text, opt4tag)
        misel.sendMessage(from, buff, MessageType.sticker, pingbro23,{quoted:hurtz})
        // console.log(stdout)
        fs.unlinkSync(savedFilename)

      } else if (int.type == 'imageMessage') {
        var itsme = `${nomornye}@s.whatsapp.net`
          var split = `${fake}`
          const pingbro22 = {
            contextInfo: {
              participant: itsme,
              quotedMessage: {
                extendedTextMessage: {
                  text: split,
                }
              }
            }
          }
        const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
        const savedFilename = await misel.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
        const buff = fs.readFileSync(savedFilename)
        const strConversation =  `\`\`\`[ ⚠️ ] Terdeteksi pengapusan pesan [ ⚠️ ]

Nama : ${pushname} ( @${sender.replace('@s.whatsapp.net', '')} )
Tipe : Image
Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}
Pesan : ${body ? body : '-'}\`\`\`
`
             misel.sendMessage(from, buff, MessageType.image, { quoted: hurtz,contextInfo: { mentionedJid: [sender] }, caption: strConversation ,quoted:hurtz})
             fs.unlinkSync(savedFilename)
      } else if (int.type == 'audioMessage') {

        var itsme = `${nomornye}@s.whatsapp.net`

          var split = `${fake}`
          const pingbo22 = {
            contextInfo: {
              participant: itsme,
              quotedMessage: {
                extendedTextMessage: {
                  text: split,
                }
              }
            }
          }
        const filename = `${sender.replace('@s.whatsapp.net', '')}-${moment().unix()}`
        const savedFilename = await misel.downloadAndSaveMediaMessage(int.data, `./media/revoke/${filename}`);
        const buff = fs.readFileSync(savedFilename)
        const strConversation =  `\`\`\`[ ⚠️ ] Terdeteksi pengapusan pesan [ ⚠️ ]

Nama : ${pushname} ( @${sender.replace('@s.whatsapp.net', '')} )
Tipe : Audio
Waktu : ${moment.unix(int.timestamp).format('HH:mm:ss DD/MM/YYYY')}
Pesan : ${body ? body : '-'}\`\`\`
`
             misel.sendMessage(from, buff, MessageType.audio, { contextInfo: { mentionedJid: [sender] }, caption: strConversation ,quoted:hurtz})
             fs.unlinkSync(savedFilename)
             
          }

         }
  } catch (e) {
    console.log('Message : %s', color(e, 'green'))
    // console.log(e)
  }
})


misel.on('message-new', async (mek) => {
  try {
    if (!mek.message) return
    if (mek.key && mek.key.remoteJid == 'status@broadcast') return
    let infoMSG = JSON.parse(fs.readFileSync('./src/msg.data.json'))
    infoMSG.push(JSON.parse(JSON.stringify(mek)))
    fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
    const urutan_pesan = infoMSG.length

    if (urutan_pesan === 5000) {
      infoMSG.splice(0, 4300)
      fs.writeFileSync('./src/msg.data.json', JSON.stringify(infoMSG, null, 2))
    }
        cekafk(afk)
    if (urutan_pesan === 5000) {
      infoMSG.splice(0, 4300)
      fs.writeFileSync('./database/off.json', JSON.stringify(infoMSG, null, 2))
    }
       if (!publik) {
  }
       
      global.prefix
      global.blocked
      const vhkey = 'MRKINGLEO7788'
      const LolApi = 'BELI SENDIRI'
      const content = JSON.stringify(mek.message)
      const from = mek.key.remoteJid
      const type = Object.keys(mek.message)[0]
      const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, productm } = MessageType
      const speed = require('performance-now')
      const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
      body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
      budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
      var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
      const messagesLink = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
      const command = body.slice(0).trim().split(/ +/).shift().toLowerCase()
      const args = body.trim().split(/ +/).slice(1)
      const isCmd = body.startsWith(prefix)
      const ramadhan = await axios.get('https://xinzbot-api.herokuapp.com/api/hitungmundur?apikey=XinzBot&tanggal=12&bulan=4')
     
      

        mess = {
        wait: 'otw',
        success: '️Sukses(:',
        error: {
          stick: 'Yah gagal, coba ulangi ^_^',
          Iv: 'Link yang ada kirim tidak valid!!🙂'
        },

        only: {

          group: 'Perintah ini hanya bisa digunakan digrop ',
        }
      }

      
      const botNumber = misel.user.jid
      const ownerNumber = ["6285656214208@s.whatsapp.net","6285656214208@s.whatsapp.net","0@s.whatsapp.net"] 
      const tescuk = [`${nomornye}@s.whatsapp.net`]
      const isGroup = from.endsWith('@g.us')
      const sender = isGroup ? mek.participant : mek.key.remoteJid
      const totalchat = await misel.chats.all()
      const groupMetadata = isGroup ? await misel.groupMetadata(from) : ''
      const groupName = isGroup ? groupMetadata.subject : ''
      const groupId = isGroup ? groupMetadata.jid : ''
      const groupMembers = isGroup ? groupMetadata.participants : ''
      const groupDesc = isGroup ? groupMetadata.desc : ''
      const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
      const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

      const isGroupAdmins = groupAdmins.includes(sender) || false
      const isOwner = ownerNumber.includes(sender)  
      const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.#?&/=]*)/, 'gi'))
      }
      const reply = (teks) => {
        misel.sendMessage(from, teks, text, {contextInfo: {participant: `${nomornye}@s.whatsapp.net`,quotedMessage: {conversation: '𝐒𝐄𝐋𝐅 - 𝐁𝐎𝐓 '}}})
      }
      const sendMess = (hehe, teks) => {
        misel.sendMessage(hehe, teks, text, {contextInfo: {participant: `${nomornye}@s.whatsapp.net`,quotedMessage: {conversation: '𝐒𝐄𝐋𝐅 - 𝐁𝐎𝐓 '}}})
      }
      const sendMediaURL = async(to, url, text="", mids=[]) =>{
		if(mids.length > 0){
		    text = normalizeMention(to, text, mids)
		}
		const fn = Date.now() / 10000;
		const filename = fn.toString()
		let mime = ""
		var download = function (uri, filename, callback) {
		    request.head(uri, function (err, res, body) {
			mime = res.headers['content-type']
			request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
		    });
		};
		download(url, filename, async function () {
		    console.log('done');
		    let media = fs.readFileSync(filename)
		    let type = mime.split("/")[0]+"Message"
		    if(mime === "image/gif"){
			type = MessageType.video
			mime = Mimetype.gif
		    }
		    if(mime.split("/")[0] === "audio"){
			mime = Mimetype.mp4Audio
		    }
		    misel.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
		    
		    fs.unlinkSync(filename)
		});
	    }
      const mentions = (teks, memberr, id) => {
        (id == null || id == undefined || id == false) ? misel.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : misel.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
      }


    if (!mek.key.remoteJid.endsWith('@g.us') && offline){
      if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
      heheh = ms(Date.now() - waktuafk) 
      misel.sendMessage(mek.key.remoteJid,`@6285656214208 lagi Offline!\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi nanti`, MessageType.text,{contextInfo:{ mentionedJid: ['6285751056816@s.whatsapp.net'],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}})
      }
    }   
    if (mek.key.remoteJid.endsWith('@g.us') && offline) {
      if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
          if (mek.message.extendedTextMessage.contextInfo != undefined){
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
          if (ment === "6285656214208@s.whatsapp.net"){
                        if (isAfk(mek.key.remoteJid)) return
                        addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktuafk)
            misel.sendMessage(mek.key.remoteJid,`@6285656214208 lagi Offline!\n\n *Alasan :* ${alasanafk}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan hubungi lagi nanti`, MessageType.text,{contextInfo:{ mentionedJid: ['6285751056816@s.whatsapp.net'],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
//mana tau
      colors = ['red','white','black','blue','yellow','green']
    const isMedia = (type === 'imageMessage' || type === 'videoMessage')
    const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
    const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
    const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
    const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
 	  if (!mek.key.fromMe && banChats === true) return
function createExif(pack, auth) {
	const code = [0x00,0x00,0x16,0x00,0x00,0x00]
	const exif = {"sticker-pack-id": "com.misel.tech", "sticker-pack-name": pack, "sticker-pack-publisher": auth, "android-app-store-link": "https://play.google.com/store/apps/details?id=com.termux", "ios-app-store-link": "https://itunes.apple.com/app/sticker-maker-studio/id1443326857"}
	let len = JSON.stringify(exif).length
	if (len > 256) {
		len = len - 256
		code.unshift(0x01)
	} else {
		code.unshift(0x00)
	}
	if (len < 16) {
		len = len.toString(16)
		len = "0" + len
	} else {
		len = len.toString(16)
	}
	//len = len < 16 ? `0${len.toString(16)}` : len.toString(16)
	const _ = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00]);
	const __ = Buffer.from(len, "hex")
	const ___ = Buffer.from(code)
	const ____ = Buffer.from(JSON.stringify(exif))
	fs.writeFileSync('./src/dat/ha_jadi.exif', Buffer.concat([_, __, ___, ____]), function (err) {
		console.log(err)
		if (err) return console.error(err)
		return `./src/dat/ha_jadi.exif`
	})

}
      //chat
    switch(command) {

		
			case `${prefix}take`:
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await misel.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, misel, mek, from)
			break
			case `${prefix}ttp`:
					if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} Alpha`)
					txt = args.join(" ")
				    buffer = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${txt}`)
					misel.sendMessage(from, buffer, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「  𝐒𝐀𝐊𝐔𝐑𝐀 」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('database/jadi.jpeg')} } } })
					break
					misel.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 𝐒𝐀𝐊𝐔𝐑𝐀 」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('database/jadi.jpeg')}}}})
					break
		case `${prefix}tiktok`:
  			if (args.length < 1) return reply('linknya mana')
  			tes = args[0]
  			anu = await fetchJson(`https://lolhuman.herokuapp.com/api/tiktok?apikey=682aeab645ed61cf137cf971&url=${tes}`,{method:'get'})
 	 		buff = await getBuffer(anu.result.link)
  			misel.sendMessage(from, buff,video,{mimetype:'video/mp4',quoted:mek,caption: `*Title*: ${anu.result.title}\n*Desc*: ${anu.result.description}`})
  			break
        case '${prefix}halloween':
				if (args.length < 1) return reply('Teks nya mana kak?')
				ct = args[0]
				await reply (mess.await)
				ct = await getBuffer(`http://api.lolhuman.xyz/api/textprome/halloween?apikey=MRKINGLEO7890&text=${ct}`)
				misel.sendMessage(from, ct, image, {quoted: mek})
				break
				case `${prefix}attp`:

					if (args.length < 1) return reply('Textnya mana om?')

					const ini = body.slice(6)

					const atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(ini)}`)

					//misel.sendMessage(from, atetepe, sticker, {quoted: mek})
					misel.sendMessage(from, atetepe, sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_*SAKURA BOT*_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('database/jadi.jpeg')} }  } })
					break
					case `${prefix}searchstiker`: //Update by sakura
ranp = getRandom('.png')
rano = getRandom('.webp')
anu = await fetchJson(`https://api.zeks.xyz/api/searchsticker?apikey=apivinz&q=${body.slice(14)}`, {method: 'get'})
buffer = await getBuffer(anu.thumb)
teks = `Nama Sticker : ${anu.title}`
dung = (anu.sticker)
misel.sendMessage(from, buffer, image, {quoted: mek, caption: teks})
var tes2 =  dung[Math.floor(Math.random() * dung.length)];
exec(`wget ${tes2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
	if (err) return reply('Error cok')
						fs.unlinkSync(ranp)
						
						buffer2 = fs.readFileSync(rano)
						costum(buffer2, sticker, tescuk, `Judul Sticker : ${anu.title}`)
						
						fs.unlinkSync(rano)
					})
break
					case `${prefix}emoji`: //By sakura
teks = emojiUnicode(body.slice(7))
buffer = await getBuffer(`https://videfikri.com/api/emojitopng/?emojicode=${teks}`)
misel.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih'})
break
         case `${prefix}swm`:
            pe = args[0]
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
			if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await misel.downloadAndSaveMediaMessage(encmedia)
        	await createExif(a,b)
        	out = getRandom('.webp')
			ffmpeg(media)
			.on('error', (e) => {
			console.log(e)
			misel.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
			fs.unlinkSync(media)
			})
			.on('end', () => {
			_out = getRandom('.webp')
			spawn('webpmux', ['-set','exif','./src/dat/ha_jadi.exif', out, '-o', _out])
			.on('exit', () => {
			misel.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
			fs.unlinkSync(out)
        	fs.unlinkSync(_out)
			fs.unlinkSync(media)
			})
			})
			.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
			.toFormat('webp')
			.save(out)
          	} else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
          	}
			break
          case `${prefix}fitnah`:
        	if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
        	var gh = args[0]
        	mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
          	var replace = gh.split("|")[0];
          	var target = gh.split("|")[1];
          	var bot = gh.split("|")[2];
          	misel.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
          	break
        case `${prefix}sticker`: 
        case `${prefix}stiker`:
        case `${prefix}sg`:
        case `${prefix}s`:
          if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await misel.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.webp')
            await ffmpeg(`./${media}`)
              .input(media)
              .on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
              })
              .on('error', function (err) {
                console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply(mess.error.stick)
              })
              .on('end', function () {
                console.log('Finish')
                misel.sendMessage(from, fs.readFileSync(ran), sticker, { contextInfo: { participant: `${nomornye}@s.whatsapp.net`, quotedMessage: { conversation: '*_STICKER_*' } } }) 
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
              })
              .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('webp')
              .save(ran)
          } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await misel.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.webp')
            reply(mess.wait)
            await ffmpeg(`./${media}`)
              .inputFormat(media.split('.')[1])
              .on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
              })
              .on('error', function (err) {
                console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
              })
              .on('end', function () {
                console.log('Finish')
                misel.sendMessage(from, fs.readFileSync(ran), sticker, { contextInfo: { participant: `${nomornye}@s.whatsapp.net`, quotedMessage: { conversation: '*_STICKER GIF_*' } } }) 
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
              })
              .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
              .toFormat('webp')
              .save(ran)
          } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await misel.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.webp')
            reply(mess.wait)
            await ffmpeg(`./${media}`)
              .inputFormat(media.split('.')[1])
              .on('start', function (cmd) {
                console.log(`Started : ${cmd}`)
              })
              .on('error', function (err) {
                console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                reply(`Yah gagal, coba ulangi ^_^`)
              })
              .on('end', function () {
                console.log('Finish')
                buff = fs.readFileSync(ran)
                misel.sendMessage(from, buff, sticker, { contextInfo: { participant: `${nomornye}@s.whatsapp.net`, quotedMessage: { conversation: '*_STICKER GIF_*' } } }) 
                fs.unlinkSync(media)
                fs.unlinkSync(ran)
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else {
            reply(`Kirim gambaar dengan caption ${prefix}sticker atau reply/tag gambar`)
          	}
          	break
		case `${prefix}nobg`:
			if ((isMedia || isQuotedImage ) && args.length == 0) {
            const encmedia = isQuotedImage  ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await misel.downloadAndSaveMediaMessage(encmedia)
            ranw = getRandom('.webp')
            ranp = getRandom('.png')           
            keyrmbg = 'C5ZeygbiedTZixDJJrm663Az'
            await removeBackgroundFromImageFile({path: media, apiKey: 'C5ZeygbiedTZixDJJrm663Az', size: 'auto', type: 'auto', ranp}).then(res => {
            fs.unlinkSync(media)
            let buffer = Buffer.from(res.base64img, 'base64')
            fs.writeFileSync(ranp, buffer, (err) => {
            if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
            })
            exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
            fs.unlinkSync(ranp)
            if (err) return reply(mess.error.stick)
            misel.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
            })
            })
            } else {
            reply(`Kirim gambaar dengan caption ${prefix}nobg atau reply/tag gambar`)
          	}
         	break
         	case `${prefix}kontag`:
            if (!mek.key.fromMe) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            misel.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
         	case `${prefix}niatsholat`: // Case By Arga
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://onlydevcity.herokuapp.com/api/muslim/niatshalat?apikey=onlyonedeveloper`, {method: 'get'})
				teks = '=================\n'
				for (let i of anu.result) {
				teks += `Sholat : ${i.name}\n*Arab* : ${i.arabic}\n*Latin* : ${i.latin}\n*Terjemah* : ${i.terjemahan}\n=================\n`
				}
				reply(teks.trim())
				break
		case `${prefix}ytsearch`:
			if (args.length < 1) return reply('Tolong masukan query!')
			const srch = args[0];
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await misel.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n________________________\n\n'
    		});
    		ytresult += '◩ *👑𝐒𝐚𝐤𝐮𝐫𝐚👑*'
    		await misel.sendMessage(from, tbuff, image, {thumbnail: fs.readFileSync('./jadi.jpeg'),quoted: mek, caption: ytresult})
			break
			case `${prefix}bc`:
					misel.updatePresence(from, Presence.composing) 
				     if (!mek.key.fromMe) return reply('Owner bukan?')
					if (args.length < 1) return reply('.......')
					anu = await baby.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await baby.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							misel.sendMessage(_.jid, buff, image, {caption: `*「 DANZZ 」*\n\n${body.slice(4)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 SAKURA 」*\n\n${body.slice(4)}`)
						}
						reply('*「 SUKSES BOSKU 」*')
					}
					break
				case `${prefix}bcgc`:
				  if (!mek.key.fromMe) return reply('Owner bukan?')
          	var alue = args[0]
					if (args.length < 1) return reply('Teksnya mana bosku >_<')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await baby.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							misel.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\n➸ Dari Grup : ${groupName}\n➸ Pengirim : wa.me/${(sender.split('@')[0])}\n➸ Pesan : ${body.slice(6)}`})
						}
						reply('*「 SUKSES BOSKU 」*')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP SAKURA 」*\n\n➸ Dari Grup : ${groupName}\n➸ Pengirim : wa.me/${(sender.split('@')[0])}\n➸ Pesan : ${body.slice(6)}`)
						}
						reply('*「 SUKSES BOSKU 」*')
					}
					break
          //By Noire-XV
		case `${prefix}play`:
			if (args.length < 1) return reply('Tolong masukan judul!')
			const srcsong = args[0]			
			let kanna = await yts(srcsong);
			kanna = kanna.all;
			if (kanna.length < 1) return await misel.sendMessage(from, 'Error!', text,  {quoted: mek})
    		await reply('Downloading...')
    		var kThumb = await getBuffer(kanna[0].image)
    		let kTitle = 'kianaplay'
    		let kStream = ytdl(kanna[0].videoId, {
        	quality: 'highestaudio',
   			});
    	    got.stream(kanna[0].image).pipe(fs.createWriteStream(kTitle + '.jpg'));
    		ffmpeg(kStream)
        	.audioBitrate(320)
        	.save('./' + kTitle + '.mp3')
        	.on('end', async () => {
           	const kWrite = new ID3Writer(fs.readFileSync('./' + kTitle + '.mp3'));
           	kWrite.setFrame('TIT2', kanna[0].title)
            .setFrame('TPE1', [kanna[0].author.name])
            .setFrame('APIC', {
            type: 3,
            data: fs.readFileSync(kTitle + '.jpg'),
            description: kanna[0].description
            });
            kWrite.addTag();
            kPlayRes = `*「 NOW PLAYING 」*\n\n❏ *Title* : ${kanna[0].title}\n❏ *By* : ${kanna[0].author.name}\n\n_Sending Audio..._`
            await misel.sendMessage(from, kThumb, image, {quoted: mek, caption: kPlayRes})
            await misel.sendMessage(from, Buffer.from(kWrite.arrayBuffer), audio, {mimetype: Mimetype.mp4Audio, ptt: false, quoted: mek});
        	fs.unlinkSync(kTitle + '.jpg')
        	fs.unlinkSync('./' + kTitle + '.mp3')
        	});
			break
			case `${prefix}autosticker`:
	        case `${prefix}autostiker`:
            case `${prefix}autostik`:
				if (args.length == 0) return misel.reply(from, `Pilih enable atau disable`, id)
                if (args[0] === 'enable') {
                    if (isAutoStikerOn) return await misel.reply(from, 'Fitur auto stiker sudah diaktifkan', id)
                    _autostiker.push(chat.id)
                    fs.writeFileSync('./lib/helper/autosticker.json', JSON.stringify(_autostiker))
                    await misel.reply(from, 'Fitur autosticker berhasil diaktifkan' , id)
                } else if (args[0] === 'disable') {
                    _autostiker.splice(chat.id, 1)
                    fs.writeFileSync('./lib/helper/autosticker.json', JSON.stringify(_autostiker))
                    await misel.reply(from, 'Fitur autostiker berhasil dinonaktifkan' , id)
                } else {
                    await misel.reply(from, 'Format salah' , id)
                }
            break
				case `${prefix}infocuaca`:
     if (args.length < 1) return reply(from, 'Kirim perintah *!cuaca [tempat]*\nContoh : *!cuaca Banyuwangi', text)
     reply(`[❕] Loading`)
            tempat = `${body.slice(11)}`
            weather = await fetchJson('https://videfikri.com/api/cuaca/?daerah='+ tempat, {method: 'get'})
            if (weather.error) {
             reply(from, weather.error, text)
            } else {
             misel.sendMessage(from, `➸ Tempat : ${weather.result.tempat}\n\n➸ Angin : ${weather.result.angin}\n➸ Cuaca : ${weather.result.cuaca}\n➸ Deskripsi : ${weather.result.desc}\n➸ Kelembapan : ${weather.result.kelembapan}\n➸ Suhu : ${weather.result.suhu}\n➸ Udara : ${weather.result.udara}`, text, {quoted: mek})
            }
            await limitAdd(sender)
            break 
            case `${prefix}tiktoknowm`:
			if (args.length == 0) return misel.reply(from, `Untuk mendownload video dari tiktok, gunakan ${prefix}tiktoknowm link`, id)
			const lika = body.slice(12)
		
			axios.get(`https://videfikri.com/api/tiktok/?url=${lika}&apikey=apivinz`)
			.then(async(res) => {
				await misel.sendFileFromUrl(from, res.data.no_watermark, '', `*music name: ${res.data.music_name}*`, id)
				await misel.sendFileFromUrl(from, res.data.audio, '', '', id)
				.catch(() => {
					misel.reply(from, 'Mungkin url anda salah', id)
				})
			})
			.catch(err => {
				console.log(err)
			})
			break
				case `${prefix}kisahnabi`: 
				reply(`[❕] Loading`)
				anu = await fetchJson(`https://videfikri.com/api/religi/kisahnabi/?nabi=${body.slice(11)}&apikey=onlyonedeveloper`)
				buffer7 = await getBuffer(anu.result.image)
				teks = `*HASIL*\n\n*➸ Nama Nabi :* ${anu.result.nabi}\n*➸ Lahir :* ${anu.result.lahir}\n*➸ Umur :* ${anu.result.umur}\n*➸ Tempat :* ${anu.result.tempat}\n*➸ Kisah :* ${anu.result.kisah}`
				misel.sendMessage(from, buffer7, image, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "@denssptraa", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('jadi.jpeg')} } }, caption: teks})
				break
		case `${prefix}slot`:
   
                const sotoy = [
                    '🍊 : 🍒 : 🍐',
                    '🍒 : 🔔 : 🍊',
                    '🍇 : 🍒 : 🍐',
                    '🍊 : 🍋 : 🔔',
                    '🔔 : 🍒 : 🍐',
                    '🔔 : 🍒 : 🍊',
                    '🍊 : 🍋 : 🔔',		
                    '🍐 : 🍒 : 🍋',
                    '🍐 : 🍐 : 🍐',
                    '🍊 : 🍒 : 🍒',
                    '🔔 : 🔔 : 🍇',
                    '🍌 : 🍒 : 🔔',
                    '🍐 : 🔔 : 🔔',
                    '🍊 : 🍋 : 🍒',
                    '🍋 : 🍋 : 🍌',
                    '🔔 : 🔔 : 🍇',
                    '🔔 : 🍐 : 🍇',
                    '🔔 : 🔔 : 🔔',
                    '🍒 : 🍒 : 🍒',
                    '🍌 : 🍌 : 🍌',
                    '🍇 : 🍇 : 🍇'
                    ]
                const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                const somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                const somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                if (somtoyy  == '🍌 : 🍌 : 🍌') {
                    misel.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | YOU WIN ]`, text)
                     memekmu = Math.floor(Math.random() * 10) + 200
                	addUserBC(sender.id, memekmu)
                    misel.reply(from, `Win, Yey kamu dapat +Rp. ${memekmu} 🥳`, text)
	     	    } else if (somtoyy == '🍒 : 🍒 : 🍒') {
                    misel.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | YOU WIN ]`, text)
                    memekmu = Math.floor(Math.random() * 10) + 200
                	addUserBC(sender.id, memekmu)
                    misel.reply(from, `Win, Yey kamu dapat +Rp. ${memekmu} 🥳`, text)
	     	    } else if (somtoyy == '🔔 : 🔔 : 🔔') {
                    misel.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | YOU WIN ]`, text)
                   memekmu = Math.floor(Math.random() * 10) + 200
                	addUserBC(sender.id, memekmu)
                    misel.reply(from, `Win, Yey kamu dapat +Rp. ${memekmu} 🥳`, text)
	     	    } else if (somtoyy == '🍐 : 🍐 : 🍐') {
                    misel.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | YOU WIN ]`, text)
                    memekmu = Math.floor(Math.random() * 10) + 200
                	addUserBC(sender.id, memekmu)
                    misel.reply(from, `Win, Yey kamu dapat +Rp. ${memekmu} 🥳`, text)
	     	    } else if (somtoyy == '🍇 : 🍇 : 🍇') {
                    misel.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | YOU WIN ]`, text)
                    memekmu = Math.floor(Math.random() * 10) + 200
                	addUserBC(sender.id, memekmu)
                    aguzbot.reply(from, `Win, Yey kamu dapat +Rp. ${memekmu} 🥳`, text)
	     	    } else {
	     	        misel.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[  🎰 | LOST ]\n\n`, text)
	     	    }
            break
            case `${prefix}colong`:
                    if ((isMedia && !misel.message.videoMessage || isQuotedSticker)) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await misel.downloadAndSaveMediaMessage(encmedia, filename = getRandom());
                        file_name = getRandom(".webp")
                        request({
                            url: `http://api.lolhuman.xyz/api/convert/towebpauthor?apikey=${LolApi}`,
                            method: 'POST',
                            formData: {
                                "img": fs.createReadStream(filePath),
                                "package": 'misel🌹aguz',
                                "author": 'jan colong ya sayang'
                            },
                            encoding: "binary"
                        }, function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            misel.sendMessage(from, ini_buff, sticker, { quoted: mek })
                            fs.unlinkSync(file_name)
                        });
                    } else {
                        reply(`Kirim stiker dengan caption ${prefix + command} atau tag gambar yang sudah dikirim`)
                    }
                    break
                    case `${prefix}bpfont`:
					
			bp = `${body.slice(8)}`

			anu = await fetchJson(`https://api.terhambar.com/bpk?kata=${bp}`, {method: 'get'})

			reply (anu.text)

			break  
			case `${prefix}quran`:


					anu = await fetchJson(`https://api.banghasan.com/quran/format/json/acak`, {method: 'get'})

					quran = `${anu.acak.ar.teks}\n\n${anu.acak.id.teks}\nQ.S ${anu.surat.nama} ayat ${anu.acak.id.ayat}`

					//baby.sendMessage(from, quran, text, {quoted: mek})

					misel.sendMessage(from, quran, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_*𝐀𝐌𝐈𝐍*_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('database/jadi.jpeg')} }  } })
		
					await limitAdd(sender) 
					break
					case `${prefix}autosticker`:
				if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
                if (Number(args[0]) === 1) {
                    if (isAutoStikerOn) return reply('Fitur auto stiker sudah diaktifkan')
                    _autostiker.push(from)
                    fs.writeFileSync('./lib/aguzx/autostiker.json', JSON.stringify(_autostiker))
                    reply('Fitur autosticker berhasil diaktifkan')
                } else if (Number(args[0]) === 0) {
                    _autostiker.splice(from, 1)
                    fs.writeFileSync('./lib/aguzx/autostiker.json', JSON.stringify(_autostiker))
                    reply('Fitur autostiker berhasil dinonaktifkan')
                } else {
                    reply(ind.satukos())
                }
            break
          case `${prefix}fake`:
                    await fake(teks = "Fake", url_image = "https://i.ibb.co/JdfQ73m/photo-2021-02-05-10-13-39.jpg", title = "Dark", code = "IDR", price = 1000000)
                    break
    	case `${prefix}sticktag`:
            if (!mek.key.fromMe) return reply('Owner bukan?')
       		if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await misel.downloadAndSaveMediaMessage(encmedia)
    		ran = getRandom('.webp')
          	var group = await misel.groupMetadata(from)
          	var member = group['participants']
        	var mem = []
          	member.map( async adm => {
          	mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
          	})
          	var options = {
          	text: args.join(' '),
          	contextInfo: { mentionedJid: mem },         
          	}
          	await ffmpeg(`./${media}`)
            .input(media)
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            reply(mess.error.stick)
            })
            .on('end', function () {
            console.log('Finish') 
            buff = fs.readFileSync(ran)
            misel.sendMessage(from,buff,sticker,options,  {contextInfo: {"mentionedJid" : mem}})
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)           
          	} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await misel.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.webp')
            var group = await misel.groupMetadata(from)
          	var member = group['participants']
          	var mem = []
          	member.map( async adm => {
          	mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
          	})
          	var gotions = {
         	text: args.join(' '),
         	contextInfo: { mentionedJid: mem },         
          	}
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            buffo = fs.readFileSync(ran)
            misel.sendMessage(from,buffo,sticker,gotions, {contextInfo: {"mentionedJid" : mem}})            
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(ran)
            } else {
            reply(`Kirim gambaar dengan caption ${prefix}sticker atau reply/tag gambar`)
          	}
          	break
        case `${prefix}pinterest`:
        	if(args.length < 1) return reply('teksnya?')
        	teks = args[0]
          	data = await fetchJson(`https://api.vhtear.com/pinterest?query=${teks}&apikey=GAMODALANJG`, {method: 'get'})
          	n = JSON.parse(JSON.stringify(data.result));
          	nimek =  n[Math.floor(Math.random() * n.length)];
          	pok = await getBuffer(nimek)
          	misel.sendMessage(from, pok, image,{thumbnail:fs.readFileSync('./jadi.jpeg'),quoted:mek,caption:'NIH'}) 
          	break
		case `${prefix}sethumb`:
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await misel.downloadMediaMessage(boij)
			fs.writeFileSync(`./jadi.jpeg`, delb)
        	anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `SUKSES`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}
			misel.sendMessage(from, `Sukses Mengganti gambar`, MessageType.text, anu,{ quoted: mek })
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break
        case `${prefix}on`:
          	if (!mek.key.fromMe) return reply('Owner bukan?')
          	offline = false
          	anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `ONLINE`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}
          	misel.sendMessage(from, `ANDA SEKARANG ONLINE`,MessageType.text,anu)
          	break       
      	case `${prefix}off`:
         	if (!mek.key.fromMe) return reply('Owner bukan?')
          	offline = true
          	waktuafk = Date.now()
          	anuu = args[0] ? args[0] : '-'
          	alasanafk = anuu
          	anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `OFFLINE`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}
          	misel.sendMessage(from, `ANDA SEKARANG OFFLINE`,MessageType.text,anu)
          	break
        case `${prefix}upstory`:
        	anu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `LIST UP STORY`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}
        	misel.sendMessage(from, `DAFTAR UP STORY\n\n~${prefix}swteks\n~${prefix}swimage\n~${prefix}swvideo`,MessageType.text,anu)
        	break
        case `${prefix}swteks`:
        case `${prefix}swtext`:
       	 	if (!mek.key.fromMe) return reply('Owner bukan?')
          	misel.updatePresence(from, Presence.composing)
          	misel.sendMessage('status@broadcast', `${body.slice(7)}`, extendedText)
          	reply(`Sukses Up story ${body.slice(7)}`)
          	break
        case `${prefix}swimage`:
           if (!mek.key.fromMe) return reply('Owner bukan?')
          	misel.updatePresence(from, Presence.composing)
          	if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await misel.downloadMediaMessage(swsw)
            misel.sendMessage('status@broadcast', cihcih, image, { caption: `${body.slice(10)}` })
          	}
          	bur = `Sukses Up Story${body.slice(8)}`
          	misel.sendMessage(from, bur, text, { quoted: mek })
          	break
        case `${prefix}swvideo`:
        	if (!mek.key.fromMe) return reply('Owner bukan?')
          	misel.updatePresence(from, Presence.composing)
          	if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await misel.downloadMediaMessage(swsw)
            misel.sendMessage('status@broadcast', cihcih, video, { caption: `${body.slice(10)}` })
          	}
          	bur = `Sukses Up Story ${body.slice(8)}`
          	misel.sendMessage(from, bur, text, { quoted: mek })
          	break
		case `${prefix}toimg`:
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await misel.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			misel.sendMessage(from,buffer, image, { thumbnail:fs.readFileSync('./jadi.jpeg'),quoted:mek})
			fs.unlinkSync(ran)
			})
			break
		case `${prefix}ytmp3`:
			if (args.length < 1) return reply('Tolong masukan url!')
			const urlmsc = args[0];
		    try {
        	var aramam = await yts({videoId: ytdl.getURLVideoID(urlmsc)});
    		} catch {
        	return await misel.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		await reply(mess.wait)
    		let titles = 'kianamusic'
    		let streams = ytdl(aramam.videoId, {
        	quality: 'highestaudio',
   			});
    		var mbuff = await getBuffer(aramam.image)
    		got.stream(aramam.image).pipe(fs.createWriteStream(titles + '.jpg'));
    		ffmpeg(streams)
        	.audioBitrate(320)
        	.save('./' + titles + '.mp3')
        	.on('end', async () => {
            const writers = new ID3Writer(fs.readFileSync('./' + titles + '.mp3'));
            writers.setFrame('TIT2', aramam.title)
            .setFrame('TPE1', [aramam.author.name])
            .setFrame('APIC', {
            type: 3,
            data: fs.readFileSync(titles + '.jpg'),
            description: aramam.description
            });
            writers.addTag();
            playmsc = `*「 YOUTUBE MUSIC 」*\n\n❏ *Title* : ${aramam.title}\n❏ *By* : ${aramam.author.name}\n\n_Sending Audio..._`
            await misel.sendMessage(from, mbuff, image, {quoted: mek, caption: playmsc})
            await misel.sendMessage(from, Buffer.from(writers.arrayBuffer), audio, {mimetype: Mimetype.mp4Audio, ptt: false, quoted: mek});
        	fs.unlinkSync(titles + '.jpg')
        	fs.unlinkSync('./' + titles + '.mp3')
        	});
			break
		case `${prefix}ytmp4`:
	 		if (args.length < 1) return reply('Tolong masukan url!')
			const urlvid = args[0]
		    try {
        	var aramav = await yts({videoId: ytdl.getURLVideoID(urlvid)});
    		} catch {
        	return await misel.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		await reply(mess.wait)
    		var yt = ytdl(aramav.videoId, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
  			yt.pipe(fs.createWriteStream('./' + aramav.videoId + '.mp4'));
  			yt.on('end', async () => {
  			playvid = `*「 YOUTUBE VIDEO 」*\n\n❏ *Title* : ${aramav.title}\n❏ *By* : ${aramav.author.name}\n\n◩ *SELF Z*`	
        	await misel.sendMessage(from, fs.readFileSync('./' + aramav.videoId + '.mp4'), video, {mimetype: Mimetype.mp4, quoted: mek, caption: playvid});
        	fs.unlinkSync('./' + aramav.videoId + '.mp4')
        	});
			break
		case `${prefix}brainly`:
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args[0];
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			misel.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
		case `${prefix}setpic`:
			misel.updatePresence(from, Presence.composing) 
			if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setpic atau tag gambar yang sudah dikirim`)
			enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await misel.downloadAndSaveMediaMessage(enmedia)
			await misel.updateProfilePicture(botNumber, media)
			reply('oke')
			break
        case `${prefix}setno`:
          	if (args.length < 1) return
          	nomornye = args[0]
          	reply(`berhasil ubah Number reply menjadi : ${nomornye}`)
          	break
        case `${prefix}getpic`:
			if (!isGroup) return reply(mess.only.group)
			if (args.length < 1) return reply('Mohon tag target!')
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target!')
			mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
			let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
			try {
			pp = await misel.getProfilePicture(id)
			buffer = await getBuffer(pp)
			misel.sendMessage(from, buffer, image, {thumbnail:fs.readFileSync('./jadi.jpeg'),quoted: mek, caption: 'Success!'})
			} catch (e) {
			reply('Error!')
			}
			break
		case `${prefix}setprefix`:							
			prefix = body.slice(10)
			reply(`SUKSES PREFIX SEKARANG MENJADI : ${prefix}`)
			break 
		case `${prefix}ping`:
			uptime = process.uptime()
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			anu  = {contextInfo:{'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n*${kyun(uptime)}*`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}
			const pingnya = `${teks}\nSpeed: ${latensi.toFixed(4)} S`
			misel.sendMessage(from, `${teks}*Speed: ${latensi.toFixed(4)} S*`, text,anu)
			})
			break
		case `${prefix}help`:
        case `${prefix}menu`:
        	uptime = process.uptime()
        	// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0
        	 ghost = mek.participant
        	try {
          	ppimg = await misel.getProfilePicture(ghost)
          	} catch {
          	ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
          	}
            const conts = mek.key.fromMe ? misel.user.jid : misel.contacts[sender] || { notify: jid.replace(/@.+/, '') }
          	const ushname = mek.key.fromMe ? misel.user.name : conts.notify || conts.vname || conts.name || '-'
        	const bruhhhh = { contextInfo: {participant: itsme, quotedMessage: {extendedTextMessage: { text: split, }}}}
      		const menunye = `${tampilTanggal}    
*_Selamat ${tampilHari} 🌚 ${ushname}_*

*ROAD TO RAMADHAN*
${ramadhan.data.result}

*_Simpel Menu_*
❏ PREFIX ${prefix}

► _${prefix}sticker_
► _${prefix}attp <teks>_
► _${prefix}nobg_
► _${prefix}sticktag_
► _${prefix}swm_ <author|packname>
► _${prefix}take_ <author|packname>
► _${prefix}toimg_
► _${prefix}fdeface_
► _${prefix}hidetag_
► _${prefix}sethumb_
► _${prefix}quran_
► _${prefix}bpfont_
► _${prefix}ytsearch_ <query>
► _${prefix}play_ <link>
► _${prefix}ytmp3_ <link>
► _${prefix}ytmp4_ <link>
► _${prefix}ig_ <link>
► _${prefix}tiktok_ <link>
► _${prefix}pinterest_ <query>
► _${prefix}brainly_ <query>
► _${prefix}image_ <query>
► _${prefix}antidelete_
► _${prefix}self/public_
► _${prefix}on_
► _${prefix}off_
► _${prefix}slot_
► _${prefix}emoji_
► _${prefix}searchstiker_
► _${prefix}tinyurl_
► _${prefix}coffe <teks>_
► _${prefix}mugflower <teks>_
► _${prefix}lovemss <teks>_
► _${prefix}narutobanner <teks>_
► _${prefix}paperglass <teks>_
► _${prefix}glitch <teks>_
► _${prefix}shadow <teks>_
► _${prefix}romance <teks>_
► _${prefix}colong_
► _${prefix}upstory_
► _${prefix}settarget_
► _${prefix}setpic/getpic_
► _${prefix}term_ <code>
► _${prefix}return_ <code>
► _${prefix}antidelete_
► _${prefix}autostiker_
► _${prefix}kickall_ mau ngapain tod:v
► _${prefix}slap_
► _${prefix}buylimit_
► _${prefix}bc_
► _${prefix}bcgc_
► _${prefix}tampar_
► _${prefix}mutual_
► _${prefix}transfer_
► _${prefix}dompet_

❏ABOUT BOT
 │ • Name : 𝐒𝐀𝐊𝐔𝐑𝐀
 │ • browser : ${client.browserDescription[1]}
 │ • server : ${client.browserDescription[0]}
 │ • version : ${client.browserDescription[2]}
 │ • speed : ${process.uptime()}
 │ • handphone : ${client.user.phone.device_manufacturer}
 ╰ • versi wa : ${client.user.phone.wa_version}
 
❏THANGKS TO
 │
 │ • AFFIS JUNIANTO <dev>
 │ • FADHIL GRAPHY <partner>
 │ • MHANKBARBARS <sc ori>
 │ • MYBOT TEAM <team>
 │ • MICHEL <team>
 │ • AGUZ <team>
 │ • SAKURA <team>
 │ • ANGGA🌈 <team>
 │
 ╰ • NOTE : jangan ngemis ajg
 
ẉa.me/6283811473200
❏ 👑𝐒𝐄𝐋𝐅𝐁𝐎𝐓👑 ❏`
			anu  = {caption:`${menunye}`,thumbnail: fs.readFileSync('./jadi.jpeg'),contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n*${kyun(uptime)}*`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}
  			buffer = await getBuffer(ppimg)
        	misel.sendMessage(from, buffer,image,anu)

           	break
           	 break
				case `${prefix}mutual`:
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
            case `${prefix}next`:
                if (!isRegistered) return reply( ind.noregis())
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup!')
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                await reply('Looking for a partner...')
                await reply(`wa.me/${anug}`)
                await reply( `Partner found: 🙉\n*${prefix}next* — find a new partner`)
            break
				case `${prefix}transfer`:
				if (!isRegistered) return reply(ind.noregis())
				if (!q.includes('|')) return  reply(ind.wrongf())
                const tujuan = q.substring(0, q.indexOf('|') - 1)
                const jumblah = q.substring(q.lastIndexOf('|') + 1)
                if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                if (jumblah < 100 ) return reply(`minimal transfer 100`)
                if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                const tujuantf = `${tujuan.replace("@", '')}@s.whatsapp.net`
                fee = 0.005 *  jumblah
                hasiltf = jumblah - fee
                addKoinUser(tujuantf, hasiltf)
                confirmATM(sender, jumblah)
                addKoinUser('6283811473200@s.whatsapp.net', fee)
                reply(`*「 SUKSES 」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : ${fee}`)
                break
				case `${prefix}dompet`:
				if (!isRegistered) return reply(ind.noregis())
				const kantong = checkATMuser(sender)
				reply(ind.uangkau(pushname, sender, kantong))
				break
				case `${prefix}buylimit`:
				if (!isRegistered) return reply(ind.noregis())
				payout = body.slice(10)
				if(isNaN(payout)) return await reply('limit harus berupa angka!!')
				const koinPerlimit = 300
				const total = koinPerlimit * payout
				if ( checkATMuser(sender) <= total) return reply(`maaf uang kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
				if ( checkATMuser(sender) >= total ) {
					confirmATM(sender, total)
					bayarLimit(sender, payout)
					await reply(`*「 PEMBAYARAN BERHASIL 」*\n\n*pengirim* : Admin\n*penerima* : ${pushname}\n*nominal pembelian* : ${payout} \n*harga limit* : ${koinPerlimit}/limit\n*sisa uang mu* : ${checkATMuser(sender)}\n\nproses berhasil dengan nomer pembayaran\n${createSerial(15)}`)
				} 
				break
				//no rest api 
				case `${prefix}slap`:
                    kapankah = body.slice(1)
                    if (isLimit(sender)) return reply(ind.limitend(pusname))
					const slap =['anjing','babi lu','anak anjing','udah tolol nub Lagi','muka lo kek monyet','udah jomblo sendirian lagi dirumah tolol','so so an mau punya pacar muka aja kek monyet lepass dari kandang','ganteng doang di toxic aja dibilang baperan','pantek kau','bangsat kau','ku entod kalian nangis kau','memek lu semua','lihat anak anjing lagi baca','ganteng doang jemput cewe dipanggang','kamu cantik beb bullshit anjing cowo buaya','anak dajjal','puki lu','anjing ngajak gelud','sama hantu takut cupu ngentod','cupu cupu aja gausah bacot','kontol lu semua','bocah lu semua kontol','3 Hari Lagi']
					const ple = slap[Math.floor(Math.random() * slap.length)]
					pod = await getBuffer(`https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif`)
					client.sendMessage(from, pod, image, { quoted: mek, caption: '*Toxic*\n\n'+ ple })
					await limitAdd(sender)
					break
					case `${prefix}tampar`:
					if (!isRegistered) return reply(ind.noregis())
					if (isLimit(sender)) return reply(ind.limitend(pusname))
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					buffer = await getBuffer('https://media.giphy.com/media/S8507sBJm1598XnsgD/source.gif', {method: 'get'})
					exec(`wget ${buffer.result} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
						fs.unlinkSync(ranp)
						if (err) return reply(ind.stikga())
						buffer = fs.readFileSync(rano)
						client.sendMessage(from, buffer, sticker, {quoted: mek})
						fs.unlinkSync(rano)
					})
					await limitAdd(sender)
					break
           	case 'tinyurl':
					const tinyurl = body.slice(9)
					var itsme = `${numbernye}@s.whatsapp.net`
					var split = `${fake}`
					// var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					const srotlink = {
					contextInfo: {
					participant: itsme,
					quotedMessage: {
					extendedTextMessage: {
					text: split,
									}
								}
							}
						}
					axios.get(`https://tobz-api.herokuapp.com/api/tinyurl?url=${tinyurl}&apikey=BotWeA`).then((res) => {
						let hasil = `${res.data.result}`;
						misel.sendMessage(from, hasil, MessageType.text, srotlink)
				})
				break
				//Update by misel
				case `${prefix}kickall`:
                    if (!isOwner) return reply(ind.ownerb())
			        members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `*😘* ${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					misel.groupRemove(from, members_id)
					break 
        case `${prefix}antidelete`:
        	const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
        	const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
        	const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
        	const isRevoke = dataRevoke.includes(from)
        	const isCtRevoke = dataCtRevoke.data
        	const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
        	const argz = body.split(' ')
        	if (argz.length === 1) return misel.sendMessage(from, `Penggunaan fitur antidelete :\n\n_${prefix}antidelete [aktif/mati]* (Untuk grup)\n_${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n_${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
        	if (argz[1] == 'aktif') {
          	if (isGroup) {
            if (isRevoke) return misel.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
            dataRevoke.push(from)
            fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
            misel.sendMessage(from, `*Sukses mengaktifkan Antidelete Grup!*`, MessageType.text)
          	} else if (!isGroup) {
            misel.sendMessage(from, `Untuk kontak penggunaan _${prefix}antidelete ctaktif*`, MessageType.text)
          	}
        	} else if (argz[1] == 'ctaktif') {
          	if (!isOwner) return 
          	if (!isGroup) {
            if (isCtRevoke) return misel.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
            dataCtRevoke.data = true
            fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
            misel.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
          	} else if (isGroup) {
            misel.sendMessage(from, `Untuk grup penggunaan _${prefix}antidelete aktif*`, MessageType.text)
          	}
        	} else if (argz[1] == 'banct') {
          	if (isBanCtRevoke) return misel.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
          	if (argz.length === 2 || argz[2].startsWith('0')) return misel.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
          	dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
          	fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
          	misel.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
        	} else if (argz[1] == 'mati') {
          	if (isGroup) {
            const index = dataRevoke.indexOf(from)
            dataRevoke.splice(index, 1)
            fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
            misel.sendMessage(from, `*Sukses mematikan Antidelete Grup!*`, MessageType.text)
          	} else if (!isGroup) {
            misel.sendMessage(from, `Untuk kontak penggunaan _${prefix}antidelete ctmati*`, MessageType.text)
          	}
        	} else if (argz[1] == 'ctmati') {
          	if (!isOwner) return
          	if (!isGroup) {
            dataCtRevoke.data = false
            fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
            misel.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
          	} else if (isGroup) {
            misel.sendMessage(from, `Untuk grup penggunaan _${prefix}antidelete mati*`, MessageType.text)
          	}
        	}
        	break
        	case 'settarget':
					if (args.length < 1) return
					targetprivate = args[0]
					reply(`Succes Mengganti target Privte Fake Reply : ${targetprivate}`)
					break
        case `${prefix}return`:
        	return misel.sendMessage(from, JSON.stringify(eval(body.slice(7))),text, {quoted: mek})
        	break
		case `${prefix}term`:
        	const cmd = args[0]
        	var itsme = `${nomornye}@s.whatsapp.net`
        	var split = `*EXECUTOR*`
        	const term = {contextInfo: {participant: itsme,quotedMessage: {extendedTextMessage: { text: split, } }}}
        	exec(cmd, (err, stdout) => {
          	if (err) return misel.sendMessage(from, `root@Botz01:~ ${err}`, text, { quoted: mek })
          	if (stdout) {
            misel.sendMessage(from, stdout, text, term)
          	}
        	})
        	break
        	case `${prefix}lovemss`:
if (args.length < 1) return reply(`Contoh: ${prefix}lovemss dns`)
lop = body.slice(9)
reply(`[❕] Loading`)
lepms = await getBuffer(`https://videfikri.com/api/textmaker/lovemsg/?text=${lop}`)
misel.sendMessage(from, lepms, image, {quoted: mek})
await limitAdd(sender)
break
case `${prefix}mugflower`:
if (args.length < 1) return reply(`Contoh: ${prefix}mugflower dns`)
mug = body.slice(11)
reply(`[❕] Loading`)
mflowg = await getBuffer(`https://videfikri.com/api/textmaker/mugflower/?text=${mug}`)
misel.sendMessage(from, mflowg, image, {quoted: mek})
await limitAdd(sender)
break
case `${prefix}narutobanner`:
if (args.length < 1) return reply(`Contoh: ${prefix}narutobanner dns`)
nar = body.slice(14)
reply(`[❕] Loading`)
narba = await getBuffer(`https://videfikri.com/api/textmaker/narutobanner/?text=${nar}`)
misel.sendMessage(from, narba, image, {quoted: mek})
await limitAdd(sender)
break
case `${prefix}paperglass`:
if (args.length < 1) return reply(`Contoh: ${prefix}paperglass dns`)
papg = body.slice(12)
reply(`[❕] Loading`)
gelas = await getBuffer(`https://videfikri.com/api/textmaker/paperonglass/?text=${papg}`)
misel.sendMessage(from, gelas, image, {quoted: mek})
await limitAdd(sender)
break
case `${prefix}romance`:
if (args.length < 1) return reply(`Contoh: ${prefix}romance dns`)
roce = body.slice(9)
reply(`[❕] Loading`)
roma = await getBuffer(`https://videfikri.com/api/textmaker/romancetext/?text=${roce}`)
//misel.sendMessage(from, roma, image, {quoted: mek})
 misel.sendMessage(from, roma, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? {teJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_*𝗦𝗘𝗟𝗙 𝗕𝗢𝗧*_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('database/jadi.jpeg')} }  } })
await limitAdd(sender)
break
case `${prefix}shadow`:
if (args.length < 1) return reply(`Contoh: ${prefix}shadow dns`)
sdow = body.slice(8)
reply(`[❕] Loading`)
shan = await getBuffer(`https://videfikri.com/api/textmaker/shadowtext/?text=${sdow}`)
//misel.sendMessage(from, shan, image, {quoted: mek})
 misel.sendMessage(from, shan, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_*𝗦𝗘𝗟𝗙 𝗕𝗢𝗧*_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('database/jadi.jpeg')} }  } })
await limitAdd(sender)
break
case `${prefix}glitch`: 
if (args.length < 1) return reply(`Contoh: ${prefix}glitch sakura/bot`)
gl = `${body.slice(8)}`
gel1 = gl.split("/")[0];
gel2 = gl.split("/")[1];
reply(`[❕] Loading`)
litsh = await getBuffer(`https://videfikri.com/api/textmaker/tiktokeffect/?text1=${gel1}&text2=${gel2}`, {method: 'get'})
//misel.sendMessage(from, litsh, image, {quoted: mek})
misel.sendMessage(from, listh, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_*𝗦𝗘𝗟𝗙 𝗕𝗢𝗧*_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('database/jadi.jpeg')} }  } })
await limitAdd(sender)
break		
        case `${prefix}public`:
          	if (!mek.key.fromMe) return
          	if (banChats === false) return
          	uptime = process.uptime()
          	anu  = {contextInfo:{'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n*${kyun(uptime)}*`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	misel.sendMessage(from, `「 *PUBLIC-MODE* 」`, text,anu)
          	break
		case `${prefix}self`:
          	if (!mek.key.fromMe) return
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	anu  = {contextInfo:{'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${nomornye}@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `「 𝐑𝐔𝐍𝐓𝐈𝐌𝐄 」\n*${kyun(uptime)}*`, 'jpegThumbnail': fs.readFileSync('./jadi.jpeg')}}}}
         	banChats = true
          	misel.sendMessage(from, `「 *SELF-MODE* 」`, text,anu)
          	break
        case `${prefix}fdeface`:
            ge = args[0]            
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await misel.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await misel.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		misel.sendMessage(from, mat, MessageType.extendedText, anu)
            break
		case `${prefix}music`:
           if (args.length === 0) return reply(`Kirim perintah ${prefix}music judul lagu`)
           const querv2 = args[0]
           try {
               const resmusv2 = await axios.get(`https://api.vhtear.com/youtube?query=${encodeURIComponent(querv2)}&apikey=MRKINGLEO7788`)
               const jsonsercmuv2 = await resmusv2.data
               let berhitung1 = 1
               const { result } = await jsonsercmuv2
               let xixixai = `Hasil pencarian dari ${querv2}\n\nKetik ${prefix}getmusic [id] untuk mengambil lagu. Atau reply pesan ini dan ketik ${prefix}getmusic 2\n`
               for (let i = 0; i < result.length; i++) {
                   xixixai += `\n═════════════════\n\n*Urutan* : ${i+1}\n*Title* : ${result[i].title}\n*Channel* : ${result[i].channel}\n*Durasi* : ${result[i].duration}\n*Perintah download*:\n${prefix}getmusic ${result[i].id}\n`
               }
                   xixixai += `\n\n`
               for (let ii = 0; ii < result.length; ii++) {
                   xixixai += `(#)${result[ii].id}`
               }
               await sendMediaURL(from, result[0].image, xixixai)
           } catch (err){
               console.log(err)
           }
           break
		case `${prefix}getmusic`:
            try {
                if (isQuotedImage) {
                    if (args.length === 1) return reply(`Kirim perintah *${prefix}getmusik _IdDownload_*`)
                    if (!Number(args[0])) return reply(`_Apabila ditag hanya cantumkan nomer urutan bukan ID Download!_  contoh : *!getmusik _1_*`)
                    const dataDownmp3 = mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
                    const pilur = dataDownmp3.split('(#)')
                    reply(mess.wait)
                    
                    yta(`https://youtube.com/watch?v=${pilur[args[0]]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb,captions)
                        sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })
                    }).catch((e) => {
                        reply('Kesalahan saat mendownload data yg dipilih! pastikan id from perintah *!musik* sudah mekar.')
                    })

                } else if (mek.message.extendedTextMessage.contextInfo.quotedMessage) { 
                    reply(`_Salah tag! hanya tag pesan berisi data hasil from penelusuran musik._`)
                } else {
                    if (args.length === 1) return reply('Kirim perintah *!getmusik _IdDownload_*, untuk contoh silahkan kirim perintah *!readme*')
                    if (args[0] <= 25) return reply(`_Apabila ingin mengambil data musik dengan nomor urutan, mohon tag pesan bot tentang pencarian musik!_`,)
                    reply(mess.wait)
                    yta(`https://youtu.be/${args[0]}`)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                        if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
                        })
                    })
                }
            } catch (err) {
                reply(`_Kesalahan! Pastikan id download sudah mekar._`)
            }
            break
            case `Halo`: //by zeeonee
var options = {
contextInfo: {
participant: '0@s.whatsapp.net',
quotedMessage: {
extendedTextMessage: {
text: '𝐈𝐲 𝐒𝐚𝐲𝐚𝐧𝐠'
}
}
}
}

misel.sendMessage(from, '𝐈𝐲 𝐤𝐚𝐤 𝐚𝐝𝐚 𝐚𝐩𝐚', text, options)

break
           case `${prefix}coffe`:
                
if (args.length < 1) return reply(`Contoh: ${prefix}coffe dns`)

kop = body.slice(6)

reply(`[❕] Loading`)

buffer = await getBuffer(`https://videfikri.com/api/textmaker/coffeecup/?text=${kop}`)

//misel.sendMessage(from, buffer, image, {quoted: mek})
misel.sendMessage(from, buffer, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_*𝗦𝗘𝗟𝗙 𝗕𝗢𝗧*_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('database/jadi.jpeg')} }  } })

await limitAdd(sender)

break
		case `${prefix}image`:
        	if (args.length < 1) return reply('Masukan teks!')
        	const gimg = args[0];
        	gis(gimg, async (error, result) => {
            for (var i = 0; i < (result.length < 3 ? result.length : 3); i++) {
            var get = got(result[i].url);
           	var stream = get.buffer();
            stream.then(async (images) => {
            await misel.sendMessage(from,images,  image, {thumbnail:fs.readFileSync('./jadi.jpeg'),quoted: mek});
            });
          	}
    		});
        	break
        case `${prefix}hidetag`:
          	if (!mek.key.fromMe) return reply('Owner bukan?')
          	var alue = args[0]
          	var group = await misel.groupMetadata(from)
          	var member = group['participants']
         	 var mem = []
          	member.map( async adm => {
          	mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
          	})
          	var options = {
          	text: alue,
          	contextInfo: { mentionedJid: mem },
          	quoted: mek
          	}
          	misel.sendMessage(from, options, text)
          	break
        case `${prefix}ig`:
            if (args.length < 1) return reply('Link nya mana?')
            anu = await fetchJson(`https://videfikri.com/api/igvideo/?url=${args[0]}`, {method: 'get'})          
            buffer = await getBuffer(anu.result.video)
            misel.sendMessage(from, buffer,video, { mimetype: 'video/mp4', filename: `${anu.result.fullname}.mp4`,quoted:mek})
            break
              
//======================================================================================================================================================================================================================================
        default:
        if (document.all||document.getElementById){
document.write('<span id="highlight">' + text + '</span>')
var storetext=document.getElementById? document.getElementById("highlight") : document.all.highlight
}
        
           if (budy.includes(`@13373330095`)) {
                const sakura = fs.readFileSync('./database/Owner.webp');
                //client.sendMessage(from, sakura, MessageType.sticker, {quoted: mek})
                misel.sendMessage(from, sakura, MessageType.sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_*𝗦𝗘𝗟𝗙 𝗕𝗢𝗧*_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('database/jadi.jpeg')} }  } })
                }
                  if (budy.includes(`@6283811473200`)) {
                const sakura = fs.readFileSync('./database/Memek.webp');
                //client.sendMessage(from, sakura, MessageType.sticker, {quoted: mek})
                misel.sendMessage(from, sakura, MessageType.sticker, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_*𝗦𝗘𝗟𝗙 𝗕𝗢𝗧*_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('database/jadi.jpeg')} }  } })
                }
        if (budy.includes(`asu`)) {
		const bot = fs.readFileSync('./database/kasar.mp3');
                misel.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                     if (budy.includes(`bot`)) {
		const bot = fs.readFileSync('./database/oniichan daisuki.mp3');
                misel.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                 //misel.sendMessage(from, bot, MessageType.audio, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_*𝗦𝗘𝗟𝗙 𝗕𝗢𝗧*_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('database/jadi.jpeg')} }  } })
                  }
                  if (budy.includes(`lonte`)) {
		const bot = fs.readFileSync('./database/lonte.mp3');
                misel.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                // misel.sendMessage(from, bot, MessageType.audio, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_*𝗦𝗘𝗟𝗙 𝗕𝗢𝗧*_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('database/jadi.jpeg')} }  } })
                  }
                  
                    if (budy.includes(`Lonte`)) {
		const bot = fs.readFileSync('./database/lonte.mp3');
                misel.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                // misel.sendMessage(from, bot, MessageType.audio, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_*𝗦𝗘𝗟𝗙 𝗕𝗢𝗧*_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('database/jadi.jpeg')} }  } })
                  }
                    if (budy.includes(`hai`)) {
		const bot = fs.readFileSync('./database/hai.mp3');
                misel.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                // misel.sendMessage(from, bot, MessageType.audio, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_*𝗦𝗘𝗟𝗙 𝗕𝗢𝗧*_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('database/jadi.jpeg')} }  } })
                  }
                    if (budy.includes(`Hai`)) {
		const bot = fs.readFileSync('./database/hai.mp3');
                misel.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                // misel.sendMessage(from, bot, MessageType.audio, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_*𝗦𝗘𝗟𝗙 𝗕𝗢𝗧*_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('database/jadi.jpeg')} }  } })
                  }
                  
                  
                   if (budy.includes(`Bot`)) {
		const bot = fs.readFileSync('./database/oniichan daisuki.mp3');
                misel.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                // misel.sendMessage(from, bot, MessageType.audio, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_*𝗦𝗘𝗟𝗙 𝗕𝗢𝗧*_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('database/jadi.jpeg')} }  } })
                  }
                   if (budy.includes(`ajg`)) {
		const bot = fs.readFileSync('./database/fuck.mp3');
                misel.sendMessage(from, bot, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
              //    misel.sendMessage(from, bot, MessageType.audio, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_*𝗦𝗘𝗟𝗙 𝗕𝗢𝗧*_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('database/jadi.jpeg')} }  } })
                  }
                  
                  if (budy.startsWith(`x`)){
return misel.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
}  
        
			if (isGroup && budy != undefined) {
          	} else{
            console.log(color('[SELF-Z]', 'blue'), 'Any Message ? ', color(sender.split('@')[0]))
          	}
          }
    	} catch (e) {
      console.log('Error : %s', color(e, 'red'))
    } 
  })
