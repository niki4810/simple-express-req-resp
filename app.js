var express = require('express');
var http = require('http');
var cors = require('cors');
var _ = require('lodash');
var bodyParser = require('body-parser')

var app = express();
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
app.use(cors());
app.set('port', 3000);

var users = [
  {
    id: "1",
    name: "Bob",
    email: "bob@abc.com"
  },
  {
    id: "2",
    name: "Alice",
    email: "alice@abc.com"
  }
];


// gets all users
app.get('/users', function(req, res) {
    res.send(users);
});

// gets user based on id
app.get('/users/:id', function(req, res) {
    var userId = req.params.id;
    var user = _.find(users,function(currentUser){
      if(currentUser.id === userId){
        return currentUser;
      }      
    });
    if(!user) {
      user = {};
    }
    res.send(user);
});

// adds a new user to the users array and 
// returns the new array
app.post('/users/', function(req, res) {
    users.push(req.body);
    res.send(users);
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});