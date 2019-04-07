

var friendList = require('../data/friends.js');
var path = require('path');


module.exports = function(app){
    
    //This is used to display a json of all possible friends
    app.get('/api/friends', function(req, res){
		res.json(friendList);
	});

    //This is used to handle incoming survey results.
    //This route will also be used to handle compatability logic
	app.post('/api/friends', function(req, res){
		friendList.push(req.body);
	})
};