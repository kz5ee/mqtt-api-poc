const router = require('express').Router();
const devicesService = require("../services/devices.service");

//#region Get known device list
router.get('/devices', (req, res) => {
    devicesService.getDeviceList()
    .then ( devices => {
        res.send(200).json(devices)
    })
    .catch((e) => {
        res.status(e.status).json({error: e.name, message: e.reason})
    })
});


//#endregion



module.exports = router;