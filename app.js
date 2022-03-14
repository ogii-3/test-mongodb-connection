const {MongoClient} = require('mongodb');
const mongoDB = 'mongodb://mongodb:27017/';
const url = 'mongodb://localhost:27017/test'

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
