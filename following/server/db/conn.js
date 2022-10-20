
const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("social");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },

  // getDb returns a handle to the database that let's us execute queries.
  getDb: function () {
    return _db;
  },
};
