const mqtt = require('mqtt');
const subscriptions = require("../config/subscriptions.json");

class MqttHandler {
  constructor() {
    this.mqttClient = null;
    this.host = 'mqtt://192.168.0.204';
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
    for (var i=0; i<subscriptions['subscription-list'].length; i++){
      this.mqttClient.subscribe(subscriptions['subscription-list'][i], {qos: 0});
      console.log(`Subscribed to ${subscriptions['subscription-list'][i]}`);
    }

    // When a message arrives, console.log it
    this.mqttClient.on('message', (topic, message) => {
      //With incoming messages that contain JSON, we have to wrap it with JSON.parse()
      let incoming;
      try{
        incoming = JSON.parse(message);
      }
      catch {
        console.log(message.toString());
        return;
      }
      
      console.log(incoming.message);
    });

    this.mqttClient.on('close', () => {
      console.log(`mqtt client disconnected`);
    });
  }

  // Sends a mqtt message to topic: mytopic
  sendMessage(topic, message) {
    this.mqttClient.publish(topic, message);
  }
}

module.exports = MqttHandler;