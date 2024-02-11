const db = require("./db");
const helper = require('./helper'); 

//#region Get devices
async function getDevices(){
    const devicesQuery = 'SELECT * FROM devices'
    try {
        const offset = helper.getOffset(page, config.listPerPage);
        const rows = await db.query(devicesQuery);

        const data = helper.emptyOrRows(rows);
        const meta = {page};
    }
    catch (e){
        return e;
    }
}
//#endregion


module.exports = {
    getDevices
}