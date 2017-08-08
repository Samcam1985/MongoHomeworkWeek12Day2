var express = require('express');
var parser = require('body-parser');
var app = express();
var path = require("path");
var MongoClient = require('mongodb').MongoClient
var db;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

app.get('/characters', function(req, res){
  db.collection('characters').find().toArray(function(err, results){
    res.json(results)
  })
})

app.post('/characters', function(req, res){
  db.collection('characters').save(req.body, function(err, result){
    res.redirect('/');
  });
});

app.post('/delete', function(req, res){
  db.collection('characters').remove({}, function(err, result){
  res.redirect('/')
})
});



MongoClient.connect('mongodb://localhost:27017/pokemon', function(err, database){

  if(err) {
    console.log(err);
    return;
  }

  db = database;

  console.log("Connected to database");

  app.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});



app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/build/index.html');

});