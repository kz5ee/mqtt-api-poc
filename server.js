const config = require("./config/config");
const serverport = 3000;
const app = require('express')();
const routes = require('./routes/router');
const { json, urlencoded } = require('express');
const mqttHandler = require("./mqtt/mqtt-handler");

const topic ="/dev";

let version = "1.0.0.1";

app.use(urlencoded({extended: true}));
app.use(json());

const mqttClient = new mqttHandler();
mqttClient.connect();

// Connect routes to application
app.use("/", routes);

app.get("/", (req, res) => {
    res.status(200).end();
});

app.post("/send-mqtt", function(req, res) {
    mqttClient.sendMessage(topic, req.body.message);
    res.status(200).send(`Message sent to mqtt:  ${req.body.message}`);
  });

//Start the server
app.listen(serverport, () => {
    console.log(`Server running on port ${serverport} v${version}`);
});
