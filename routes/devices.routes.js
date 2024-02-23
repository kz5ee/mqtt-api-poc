const router = require('express').Router();
const devicesService = require("../services/devices.service");
// const mqttHandler = require("../mqtt/mqtt-handler");
// const mqttClient = new mqttHandler();
// mqttClient.connect();
const broker = require("../mqtt/mqtt-client");

//#region Get known device list
router.get('/', (req, res) => {
    devicesService.getDeviceList()
    .then ( devices => {
        res.json(devices)
    })
    .catch((e) => {
        res.sendStatus(e.status).json({error: e.name, message: e.reason})
    })
});
//#endregion

//#region Get details of a specific device
router.get('/:deviceId', (req, res) => {
    devicesService.getDevice(req.params.deviceId)
    .then ( device => {
        res.json(device)
    })
    .catch((e) => {
        res.sendStatus(e.status).json({error: e.name, message: e.reason})
    })
});
//#endregion

//#region Send message to device
router.post("/:deviceId/send-mqtt", function(req, res) {
    //To send JSON data we need to use JSON.stringify()
    broker.sendMessage(`/network/${req.params.deviceId}`, `${req.body.message}`);
    res.send(`Message sent to mqtt:  ${req.body.message}`);
  });
//#endregion


module.exports = router;