import app from "./app.js";
import schedule from "node-schedule";
import config from './config.js';
import { createExcel, sendMailTest } from "./controllers/SendMail.controller.js";
import { prefijoEmpresa } from "./arreglos/prefixempresas.js";

// JOBS 
// let rule = new schedule.RecurrenceRule();
// rule.minute = 28; 

// schedule.scheduleJob(rule,  async function(fireDate) {
//     for (const companie of prefijoEmpresa) {
//         await sendMailTest(companie.UUID);
//         await createExcel(companie.UUID);
//     }
// })

async function index(){
    for (const companie of prefijoEmpresa) {
        await sendMailTest(companie.UUID);
        await createExcel(companie.UUID);
    }
}

index()

// const scheduleAlertSecond = schedule.scheduleJob(process.env.TIME_ALERT_SECOND, async (fireDate) => {
//     console.log(fireDate)
// })
// const scheduleAlertThird = schedule.scheduleJob(process.env.TIME_ALERT_THIRD, async (fireDate) => {
//     console.log(fireDate)
// })
