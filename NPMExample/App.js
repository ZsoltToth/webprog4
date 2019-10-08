const winston = require('winston');
var logger = winston.createLogger({
    level : 'info',
    transports : [
        new winston.transports.Console(),
        new winston.transports.File({filename: 'app.log'})
    ]
});

logger.info('Hello');

const qrcode = require('qrcode');
const fs = require('fs');
qrcode.toDataURL('web programming 4', (err,url)=>{
    console.log(url)
});

qrcode.toFileStream(
    fs.createWriteStream('qr.png'), "web programming 4");

qrcode.toFileStream(
    fs.createWriteStream('qrH.png'),
    "web programming 4",
    {errorCorrectionLevel : "H"});