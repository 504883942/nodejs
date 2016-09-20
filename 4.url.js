var controllers=require('./3.file.js');
var express = require('express');
var app = express();

for(var i in controllers.controller ){
	for(var j in controllers.controller[i])
	{

		app.get("/"+i+"/"+j,controllers.controller[i][j])
	}
}
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("start http://%s:%s", host, port)

})