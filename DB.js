const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'ec2-13-48-28-70.eu-north-1.compute.amazonaws.com',
    port: 3306,
    database: 'sys',
    user: 'admin',
    password: 'Mysql@1234'
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
  
    console.log('Connected to database.');
  });

 // 'SELECT * FROM Jobs.JobPost'

function queryDB(query){
      return new Promise((resolve,reject)=>{
        connection.query(query , (err, results) => {
            if (err) {
            console.error('Error retrieving data from database:', err);
            }
            resolve(results)
            console.log('Retrieved data:', results);
        });
})
}

async function getAllJobs(){
    let jobs = await queryDB('SELECT * FROM Jobs.JobPost');
    
    return jobs;
}
module.exports ={ getAllJobs}

 