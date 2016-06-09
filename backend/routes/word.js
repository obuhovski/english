var express = require('express');
var router = express.Router();
var Datastore = require('nedb');
db = new Datastore({ filename: 'words'});
db.loadDatabase();
db.remove({'_id': '3jRn1IFY4N7B6G5C'});

/* GET users listing. */
router.get('/', function(req, responce, next) {
  db.find({}).limit(50).exec(function (err, docs) {
    responce.send(docs);
  });
});


router.post('/', function(req, res, next) {
  data = req.body;
  // db.insert({})
});

module.exports = router;
