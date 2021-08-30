const twilio = require('twilio');
const config = require('../config/index.js');
const CEL_PHONE_NUMBER = config.CEL_PHONE_NUMBER;

const acctSid = 'AC4b274ff5fa7677d9cc588c84315fbb12'
const authToken = '847e304834cc20f01e0f3079bdb6faf3'

const twilioClient = twilio(acctSid, authToken)

const from = '+12695808122'
const to = CEL_PHONE_NUMBER
const body = ''

async function twilioSms(body) {
    try {
        await twilioClient.messages.create({ body, from, to })
    }
    catch (error) {
        console.log(error)
    }
}


module.exports = {twilioSms}
