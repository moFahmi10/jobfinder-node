const express = require("express");
const {loadRoutes} = require("./router");
const cors = require("cors");





const MainApp = express();

//TO BE CHANGED TO 'process.env.PORT' WHEN HOSTED ON GLITCH
const PORT = 3000;

MainApp.use(express.json());

MainApp.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
MainApp.use(function (req, res, next) {
    console.log("new request", req.path, req.ip);
    next();
})

loadRoutes(MainApp);

MainApp.listen(PORT)

