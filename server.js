var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send("Display message")
		}); 

app.listen(3001);
console.log("Sver on port 3000");
