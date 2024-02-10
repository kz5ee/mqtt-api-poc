const serverport = 3000;
const app = require('express')();
//const routes = require('./routes/router');
const { json, urlencoded } = require('express');


let version = "1.0.0.1";

app.use(urlencoded({extended: true}));
app.use(json());

// Connect routes to application
//app.use("/", routes);

app.get("/", (req, res)=>{
    res.status(200).end();
});

//Start the server
app.listen(serverport, () => {
    console.log(`Server running on port ${serverport} v${version}`);
});
