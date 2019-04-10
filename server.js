

//Set up the Dependencies
var express = require("express");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/apiroutes.js")(app);
require("./app/routing/htmlroutes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

//set up routing
// var apiroutes = require("./app/routing/apiroutes.js");
// var htmlroutes = require("./app/routing/htmlroutes.js");
// app.use(apiroutes);
// app.use(htmlroutes); 