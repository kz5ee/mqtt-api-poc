const db = require("./db");
const helper = require('./helper'); 

//#region Get devices
async function getDevices(){
    const devicesQuery = 'SELECT id FROM devices'
    try {
        //const offset = helper.getOffset(page, config.listPerPage);
        const rows = await db.query(devicesQuery);

        //const data = helper.emptyOrRows(rows);
        //const meta = {page};
        return rows;
    }
    catch (e){
        return e;
    }
}
//#endregion

//#region Get device details
async function getDevice(deviceId){
    const deviceQuery = 'SELECT * FROM devices WHERE id=?'
    try {
        //const offset = helper.getOffset(page, config.listPerPage);
        const params = [deviceId];
        const rows = await db.query(deviceQuery, params);

        //const data = helper.emptyOrRows(rows);
        //const meta = {page};
        return rows;
    }
    catch (e){
        return e;
    }
}
//#endregion


module.exports = {
    getDevices,
    getDevice
}