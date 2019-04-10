
var express = require("express");
var friendList = require('../data/friends.js');
var path = require('path');


module.exports = function(app){
    var bestMatch = [];    
    
    //This is used to get the list of friends from the friends.js file
    app.get('/api/friends', function(req, res){
		res.json(friendList);
	});

    //This is used to handle incoming survey results.
    //This route will also be used to handle compatability logic
	app.post('/api/friends', function(req, res){
        
        // create a new user profile. The user data includes name, photo and scores. The scores are an array of string numbers
        var userData = req.body;
        console.log(userData);
        
            //get passed in an array of answers from the user, find the friend that best matches the user
            //convert the score to a numerical array, then loop through and compare the user answers to each friends
            //answers.  If you find someone with a better score, remember thier index.  return the individual that is the best match
        //    var findBestMatch = function(stringArray) {
        var stringArray = userData.scores;
        console.log("stringArray " + stringArray);

        //Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).  
        var numAnswers = [];
        for (i=0; i < stringArray.length; i++){
            var numAns = parseInt(stringArray[i]);
            numAnswers.push(numAns);
        }
        console.log("numAnswers: " + numAnswers);

        //setting this variable as higer than any possible score from the questionair (which is 40)
        var lowestDiff = 100;
        var lowestIndex;

        console.log(friendList.length);
        console.log(friendList[1].name);
        //loop through each friend making a comparison
        for (i=0; i < friendList.length - 1; i++){
            console.log(friendList.length);
            console.log(friendList[i].name);
            
            var difference = 0;
            //loop through the answers of each person and compare them to the newUser data. store the cumulative difference
            for (j = 0; j < friendList[i].scores[j].length ;j++) {
                console.log("Friendlist score length" + friendList[i].scores[j].length);
                console.log("numAnswers: " + numAnswers[j] + " friendList[i].scores[j]: " + friendList[i].scores[j]);
                difference += Math.abs(numAnswers[j]-friendList[i].scores[j]);            
            }
            
            console.log("lowestDiff: " +  lowestDiff);
            console.log("Difference: "+ difference);
            //if the difference is lower than the previous, set the new lowest difference and the index of the individual with that lowest difference
            if (difference < lowestDiff){
                lowestDiff = difference;
                lowestIndex = i;
            }

        }
        bestMatch = friendList[lowestIndex];
        console.log(bestMatch);

    //now I know who the lowest difference individual is and what the difference is 
    //return the indivudual who is the best match
    
    res.json(bestMatch);
      
    //friendList.push(req.body);
    });
 
    
};

