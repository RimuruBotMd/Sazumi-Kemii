"use strict"
const  { default: makeWASocket,
Browsers,
DisconnectReason,
fetchLatestBaileysVersion
} = (await import('baileys')).default
import chalk from 'chalk'
import { Boom } from '@hapi/boom'
import spin from 'spinnies'
import CFonts from 'cfonts'
import chalkAnimation from 'chalk-animation'


const spinnies = new spin();
const spinner = { 
  "interval": 120,
  "frames": [
"✖ [░░░░░░░░░░░░░░░]",
"✖ [■░░░░░░░░░░░░░░]",
"✖ [■■░░░░░░░░░░░░░]",
"✖ [■■■░░░░░░░░░░░░]",
"✖ [■■■■░░░░░░░░░░░]",
"✖ [■■■■■░░░░░░░░░░]",
"✖ [■■■■■■░░░░░░░░░]",
"✖ [■■■■■■■░░░░░░░░]",
"✖ [■■■■■■■■░░░░░░░]",
"✖ [■■■■■■■■■░░░░░░]",
"✖ [■■■■■■■■■■░░░░░]",
"✖ [■■■■■■■■■■■░░░░]",
"✖ [■■■■■■■■■■■■░░░]",
"✖ [■■■■■■■■■■■■■░░]",
"✖ [■■■■■■■■■■■■■■░]",
"✖ [■■■■■■■■■■■■■■■]"
  ]}
let globalSpinner;
const getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
return globalSpinner;
}
let spins = getGlobalSpinner(false)
  
  
const start = (id, text) => {
spins.add(id, {text: text})
}
const success = (id, text) => {
spins.succeed(id, {text: text})
}




export const connectionUpdate = async(connectToWhatsApp,conn,update) => {


const { version, isLatest } = await fetchLatestBaileysVersion()
const {connection, lastDisconnect,receivedPendingNotifications,isNewLogin,qr } = update

//receivedPendingNotifications = false  
  
const  reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (connection === 'close') {

console.log(chalk.red(lastDisconnect.error));

if(lastDisconnect.error == "Error: Stream Errored (unknown)"){
process.send('reset')

} else if (reason === DisconnectReason.badSession) { 
  
console.log(`Bad Session File, Please Delete Session and Scan Again`); 
process.send('reset')
  
} else if (reason === DisconnectReason.connectionClosed) { 
  
console.log("[SYSTEM]",chalk.red('Connection closed, reconnecting...')); 
process.send('reset')
  
} else if (reason === DisconnectReason.connectionLost) { 
  
console.log(chalk.red("[SYSTEM]", "white"), chalk.green('Connection lost, trying to reconnect'));
process.send('reset')
  
} else if (reason === DisconnectReason.connectionReplaced) { 
  
console.log(chalk.red("Connection Replaced, Another New Session Opened, Please Close Current Session First"));
conn.logout(); 
  
} else if (reason === DisconnectReason.loggedOut) { 
  
console.log(chalk.red(`Device Logged Out, Please Scan Again And Run.`)); 
conn.logout(); 
  
} else if (reason === DisconnectReason.restartRequired) {
  
console.log("Restart Required, Restarting..."); 
connectToWhatsApp(); 
process.send('reset')
  
} else if (reason === DisconnectReason.timedOut) {
  
console.log(chalk.red("Connection TimedOut, Reconnecting..."));
connectToWhatsApp(); 

}

} else if (connection === 'connecting') {
//console.log(`${chalk.white(`[`)+chalk.red(`1`)+chalk.white(`]`)}`,`WA v${version.join('.')}`)
//await sleep(400) 
//console.log(`${chalk.white(`[`)+chalk.red(`2`)+chalk.white(`]`)}`,`${calender}`)
//await sleep(400) 
//console.log(`${chalk.white(`[`)+chalk.red(`2`)+chalk.white(`]`)}`,`https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`)
//await sleep(400)  
//console.log(`${chalk.white(`[`)+chalk.red(`2`)+chalk.white(`]`)}`,`data 5`)
//await sleep(400)  
console.log(chalk.magenta(``),``,  chalk.red(`LANA BOT`), ``,  chalk.magenta(``))
//await sleep(400)  
start(`1`,`Connecting...`)
} else if (connection === 'open') { 
success(`1`,`[■■■■■■■■■■■■■■■] Connected`) 
}



}//akhir connection

