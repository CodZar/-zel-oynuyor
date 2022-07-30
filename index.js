var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Youtube By Atomik'de Yapılışı Bulunuyor", // Yazı
assets : {
large_image : "LOGO", // Eklediğimiz Fotonun İsmi
large_text : "By Atomik" // Fotya Mause Getirince Çıkan Yazı
},
buttons : [{label : "Youtube" , url : "https://www.youtube.com/channel/UCaY-Jv_A9kR1Wo7KHFrAChw"},{label : "Discord",url : "https://discord.gg/44qc4BcwWV"}] //kendinize göre yazın
}
})
})
client.login({ clientId : "Botun Client İdsi" }).catch(console.error);