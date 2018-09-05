const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db) => {
    if (err) throw err;

    const dbo = db.db("mydb");
    
    const myquery = {
        address: 'Silicon Valley 37'
    };
    
    dbo.collection("customers").deleteOne(myquery, (err, obj) => {
        if (err) throw err;
    
        console.log("1 document deleted");
    });

    const myquerys = {
        address: /^O/
    };

    dbo.collection("customers").deleteMany(myquerys, (err, obj) => {
        if (err) throw err;
        
        console.log(obj.result.n + " document(s) deleted");
        
        db.close();
    });
});