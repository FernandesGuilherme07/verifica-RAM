const os = require('os');

const {arch, platform, totalmem, freemem} = os;
const tRAM = totalmem() / 1024 /1024;
const fRAM = freemem() / 1024 /1024; 

const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRAM: parseInt(tRAM),
    FreeRAM: parseInt(fRAM),
}

console.log(stats)