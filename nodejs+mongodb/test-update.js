const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    
    const dbo = db.db("mydb");
    
    const myquery = {
        address: "Silicon Valley 41"
    };
    
    //Only the specified fields on $set are updated.
    const newvalues = {
        $set: {
            name: "Google Inc."
        }
    };
    
    dbo.collection("customers").updateOne(myquery, newvalues, (err, res) => {
        if (err) throw err;
        
        console.log("1 document updated");
        
        db.close();
    });
});