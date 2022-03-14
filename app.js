const {MongoClient, Logger} = require('mongodb');
//#const mongoDB = 'mongodb://mongodb:27017/';
const uri = 'mongodb://localhost:27017/test'

//MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

/*const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});*/

/*async function main(client) {
  // Set debug level
  Logger.setLevel("debug");
  const db = client.db("sample_mflix");
  // Run a sample command to produce logger messages
  await db.command({ isMaster: true });
}*/

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) throw err;
  const dbo = db.db("dbName");
  
  dbo.createCollection("testcollection", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
  
  dbo.collection("testcollection").find().toArray(function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  })
})
