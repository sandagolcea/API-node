var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);

// var client = require('redis').createClient();


app.set('view engine', 'ejs');

app.get('/', function(request, response){
  response.send("hello world");
});

app.get('/json', function(request, response){
  var india = {name: "India"};
  response.json(india);
});

app.get('/user', function(request, response){
  response.render('user', request.query );
});

app.get('/api', function(request, response){
  // response.render('api', request.query );
  response.json(request.query);
});

app.get('/greeting', function(request,response){
  response.render('greeting', { name: "India" });
});

server.listen('3000', function(){
  console.log('listening 3000')
});

module.exports = server;