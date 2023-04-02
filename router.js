const express = require("express");
const {getAllJobsController} = require("./controller") 
let app = express();
function loadAppRoutes(MainApp){
    app.get("/jobs",getAllJobsController)
    MainApp.use("",app)
}

function loadRoutes(MainApp){
    
loadAppRoutes(MainApp);
}

module.exports = {loadRoutes}