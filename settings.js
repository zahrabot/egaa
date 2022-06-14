const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	webnya: 'https://api.lolhuman.xyz',
}

global.APIKeys = {
	'https://api.lolhuman.xyz': 'RINTISAJA',
}

global.owner = ['6287776665992']
global.premium = ['6287776665992']
global.packname = 'Owner Egaabot'
global.author = 'Wa : https://wa.me/6287776665992\nYT : BALZ YT\nIG : balzshop\nGH : KirBotz\nTT : yt_balzbotz'
global.sessionName = 'balzbotz'
global.namabotnya = 'EGAA BOT'
global.namaownernya = 'EGAA STORE'
global.lolkey = 'RINTISAJA'
global.wame = 'https://wa.me/6287776665992'
global.gckirbotz = 'https://chat.whatsapp.com/CswK4kvQD1u7SfSmsYfM'
global.ownerNumber = ["6287776665992@s.whatsapp.net"]
global.email = 'tesheroku123@gmail.com'
global.yt = 'https://youtube.com/channel/UC7NslQroUqQYzo2wDFB'
global.region = 'Indonesia'
global.prefa = ['','!','.','#','-','•']
global.sp = '⭔'
global.mess = {
    success: 'Success 💯',
    admin: 'Fitur Khusus Admin Group!!!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!!!',
    owner: 'Fitur Khusus Owner Bot!!!',
    group: 'Fitur Digunakan Hanya Untuk Group!!!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!!!',
    bot: 'Fitur Khusus Pengguna Nomor Bot!!!',
    error: 'Error Kak Silahkan Chat Owner',
    wait: '❗Waittt...',
    noPetualang: 'Itssss Kamu Belum Jadi Member Petualang, Silahkan Ketik .joinrpg <namamu>',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    premium: 'Maaf Sebelumya Kamu Belum Premium, Silahkan Pencet Di Bawah Untuk Beli Premium',
    banned: 'Maaf Kamu Sudah Di Banned Silahkan Chat Owner Untuk Membuka Banned Nya',
}


global.limitawal = {
    premium: "Infinity",
    free: 5
}


global.thumb = fs.readFileSync('./Image/kirbotz.jpg')
global.thumbrpg = fs.readFileSync('./Image/kirbotzrpg.jpg')
global.imgjoinrpg = fs.readFileSync('./Image/joinrpg.jpg')
global.imgmining = fs.readFileSync('./Image/mining.jpg')

global.imgdevil = fs.readFileSync('./Image/img/devil.jpg')
global.imgslime = fs.readFileSync('./Image/img/slime.jpg')
global.imgdemon = fs.readFileSync('./Image/img/demon.jpg')
global.imggoblin = fs.readFileSync('./Image/img/goblin.jpg')
global.imgdemonking = fs.readFileSync('./Image/img/demonking.jpg')
global.imgbehemoth = fs.readFileSync('./Image/img/behemoth.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
