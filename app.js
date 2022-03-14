const {MongoClient} = require('mongodb');
const uri = 'mongodb://localhost:27017/test'

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) throw err;
  const dbo = db.db("dbName");
  
  dbo.createCollection("testcollection", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
})
