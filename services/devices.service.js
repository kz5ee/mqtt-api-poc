const devicesDb  = require('../db/devices.db');

//#region Get devices list
async function getDeviceList(){
    try {
        let devices = await devicesDb.getDevices();
        return devices;
    }
    catch(e){
        throw e;
    }
}
//#endregion

//#region Get device details
async function getDevice(deviceId){
    try {
        let device = await devicesDb.getDevice(deviceId);
        return device;
    }
    catch(e){
        throw e;
    }
}
//#endregion


module.exports = {
    getDeviceList,
    getDevice
}