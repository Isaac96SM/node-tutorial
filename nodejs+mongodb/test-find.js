const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    
    var dbo = db.db("mydb");
    
    dbo.collection("customers").findOne({}, (err, result) => {
        if (err) throw err;
        
        console.log(result.name);
    });

    dbo.collection("customers").find({}).toArray((err, result) => {
        if (err) throw err;
        
        console.log(result);

        dbo.close();
    });
});