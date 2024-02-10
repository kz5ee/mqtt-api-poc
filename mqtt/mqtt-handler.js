const mqtt = require('mqtt');
const subscriptions = require("../config/subscriptions.json");

class MqttHandler {
  constructor() {
    this.mqttClient = null;
    this.host = 'mqtt://localhost';
    this.username = 'YOUR_USER'; // mqtt credentials if these are needed to connect
    this.password = 'YOUR_PASSWORD';
  }
  
  connect() {
    // Connect mqtt with credentials (in case of needed, otherwise we can omit 2nd param)
    this.mqttClient = mqtt.connect(this.host ); /*{ username: this.username, password: this.password }*/

    // Mqtt error calback
    this.mqttClient.on('error', (err) => {
      console.log(err);
      this.mqttClient.end();
    });

    // Connection callback
    this.mqttClient.on('connect', () => {
      console.log(`mqtt client connected`);
    });

    // mqtt subscriptions
    
      this.mqttClient.subscribe("/test", {qos: 0});
    
    

    // When a message arrives, console.log it
    this.mqttClient.on('message', (topic, message) => {
      console.log(message.toString());
    });

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);
    });
  }

  // Sends a mqtt message to topic: mytopic
  sendMessage(message) {
    this.mqttClient.publish("/test", message);
  }
}

module.exports = MqttHandler;