const devicesDb  = require('../db/devices.db');

//#region Get devices list
async function getDeviceList(){
    try {
        let devices = await devicesDb.getDeviceList();
        return devices;
    }
    catch(e){
        throw e;
    }
}
//#endregion


module.exports = {
    getDeviceList
}