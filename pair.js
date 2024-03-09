const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Drex_Ai,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function DREX_AI_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Drex_Mose = Drex_Mose({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Drex_Mose.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Drex_Mose.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Drex_Mose.ev.on('creds.update', saveCreds)
            Pair_Code_By_Drex_Mose.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Drex_Mose.sendMessage(Pair_Code_By_Drex_Moseuser.id, { text: '' + b64data });

               let DREX_AI_TEXT = `
*_Pair Code Connected by DREX BOT_*
*_Made With ,🖤_*
______________________________________
╔════◇
║ *『 WOW YOU CHOOSEN DREX-AI 』*
║ _You Have Completed the First Step to Deploy a Whatsapp Bot._
╚══════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *Ytube:* _youtube.com/@drexmose
║❒ *Owner:* _https://wa.me/message/254102074064_
║❒ *Repo:* _https://github.com/drexmose/drex-ai_
║❒ *WaGroup:* _https://chat.whatsapp.com/L0ctUUVLlsrFYwBHApKfew_
╚══════════════════════╝ 
_____________________________________

_Don't Forget To Give Star To My Repo_`
 await Pair_Code_By_Drex_Mose.sendMessage(Pair_Code_By_Drex_Mose.user.id,{text:GIFTED_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Drex_Mose.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    GIFTED_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await DREX_AI_PAIR_CODE()
});
module.exports = router
