var fs=require('fs');
var path=require('path');
var files=fs.readdirSync(__dirname+"/controller");
var controller={};
var pattern=/[cC]ontroller.js$/;

//¶¯Ì¬¼ÓÔØcontrollerÄ£¿é
for(var i in files){
	var r= files[i].match(pattern); 
	if(r!=null){
	var a=files[i].replace(pattern,"");
 
	controller[a]=require('./controller/'+files[i]);
	}
}
 
exports.controller=controller;

/*var readline=require('readline');
var rl=readline.createInterface({
	input:process.stdin,
	output:process.stdout
	
});
rl.question("num of module",function(num){
	if('run' in controller[num] ){
			console.log(controller[num].run(1,1));
		
	}

	rl.close();
});
	*/
