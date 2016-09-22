var controllers=require('./3.file.js');
var http = require('http');
var url = require('url');

http.createServer(function(req, res){
	var keys=["controller","action"];
	var pathname = url.parse(req.url).pathname;  //pathname => select    
	var para=pathname.substr(1).split('/');
	console.log(para);
	var route={};
	for(var i in keys){
		console.log(i);
		route[keys[i]]=para[i];
	} 
	console.log(route);
 
	
 
    var arg =url.parse(req.url, true).query ;    
	console.log(arg);
	console.log(controllers.controller);
	
	
	var content=controllers.controller[route["controller"]][route["action"]](arg);
	console.log(content);
    res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write("result= "+content);
    res.write("/"+route["controller"]+"/"+route["action"]);
	res.end();
	
	
}).listen(8081);

 