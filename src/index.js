import app from "./app.js";
import schedule from "node-schedule";
import config from './config.js';

// JOBS 
var rule = new schedule.RecurrenceRule();
rule.minute = 53; 

const scheduleAlertFirst = schedule.scheduleJob(process.env.TIME_ALERT_FIRST,  function(fireDate) {
    console.log(fireDate)
})
const scheduleAlertSecond = schedule.scheduleJob(process.env.TIME_ALERT_SECOND, async (fireDate) => {
    console.log(fireDate)
})
const scheduleAlertThird = schedule.scheduleJob(process.env.TIME_ALERT_THIRD, async (fireDate) => {
    console.log(fireDate)
})



app.listen(app.get('PORT'), () => {
    console.log(`Server running on port ${app.get('PORT')}`)
    console.log(config.TIME_ALERT_SECOND)
})

