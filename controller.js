const {getAllJobs} = require("./DB")

async function getAllJobsController(req,res){
    let jobs = await getAllJobs();

    return res.json({jobs});
}

module.exports = {getAllJobsController}