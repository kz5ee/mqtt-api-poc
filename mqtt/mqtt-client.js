//Create an MQTT connection object for use elsewhere.
var mqttHandler = require('./mqtt-handler');
var mqttClient = new mqttHandler();
//Connect to the broker
mqttClient.connect();

module.exports = mqttClient;