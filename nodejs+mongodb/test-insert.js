const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
        
    const dbo = db.db("mydb");
    const myobj = { 
        name: "Apple", 
        address: "Silicon Valley 37"
    };
    
    dbo.collection("customers").insertOne(myobj, (err, res) => {
        if (err) throw err;
        
        console.log("1 document inserted");
    });

    const myobjs = [
        {
            name: "Google", 
            address: "Silicon Valley 41"
        },
        {
            name: "Facebook", 
            address: "Silicon Valley 45"
        }
    ];

    dbo.collection("customers").insertMany(myobjs, (err, res) => {
        if (err) throw err;
        
        console.log("Number of documents inserted: " + res.insertedCount);
        
        db.close();
    });
});