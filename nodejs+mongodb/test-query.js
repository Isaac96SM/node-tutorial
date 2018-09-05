const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    
    const dbo = db.db("mydb");
    
    //Regular Expressions can be accepted too as values
    const query = {
        address: "Silicon Valley 41"
    };
    
    dbo.collection("customers").find(query).toArray((err, result) => {
        if (err) throw err;
        
        console.log(result);
        
        db.close();
    });
});