  // importing node framework

  var express = require('express');

  var app = express();

  //respond with "hello world" for requests that hit our root "/" 
  app.get('/', function(req,res) {
    res.send('hello world');
  });

  //listen to the port 3000 by default


  app.listen(process.env.PORT || 3000);

  module.exports = app;