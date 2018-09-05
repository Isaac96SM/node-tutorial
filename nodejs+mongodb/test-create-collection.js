const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;

    const dbo = db.db("mydb");

    dbo.createCollection("customers", (err, res) => {
        if (err) throw err;

        console.log("collection created!");

        db.close();
    });
});