var path = require("path");
var express = require("express");

var app = express();


module.exports = function(app){

    // this is a default route to take the user to the home page
    app.get('/', function(req, res){
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
    
    //displays the survey page
	app.get('/survey', function(req, res){
		res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    
};