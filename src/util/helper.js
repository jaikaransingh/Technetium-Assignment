const presentDate =new Date()
const months=['jan','feb','march','april','may','june','july','aug','sept','oct','nov','dec']

function printDate(){
    console.log(presentDate)
}

function currentMonth() {
    const month = presentDate.getMonth()
    console.log('current Month is',months[month])
}

function getBatchInfo(batch, weekDay, topic){
    console.log(`${batch}, ${weekDay},the topic ${topic}`)
}

module.exports.printDate=printDate
module.exports.currentMonth=currentMonth
module.exports.getBatchInfo=getBatchInfo