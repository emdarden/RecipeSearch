const util = require('util');
const fs = require('fs');
const readFile = util.promisify(fs.readFile)
const express = require('express');
const cors = require('cors');

var app = express();
app.use(cors()); // enable cors

app.get('/', function(req, res){
    readFile("recipes.json")
    .then(raw  => {
      var recipes = JSON.parse(raw);
      res.send(recipes);
    })
    .catch( e => { console.log(e) });
  });
  
app.listen(8080, function() {
    console.log("Data Server is running at localhost: 8080")
});