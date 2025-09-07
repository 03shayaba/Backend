const { MongoClient } = require('mongodb');
// let dbconnectionUrl = 'mongodb://localhost:27017'
let dbconnectionUrl = 'mongodb://127.0.0.1:27017'     //we can also write this line above db connection Url
// here establishing connection to the database
const client = new MongoClient(dbconnectionUrl);

let dbConnection = async() =>{
    await client.connect();
    console.log("MOngodb connect successfully");
    let db = client.db("MongodbProject_database")
    return db;
}
module.exports ={dbConnection}
