var express = require("express");
var app = express();
var request = require("request");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var users = [];
var registeredLocations = [];
var events = [
    {
        name: "Game of Thrones",
        location: "New York",
        rating: 4.8,
        venue: "Bob's Bar"
    },
    {
        name: "Money Ball",
        location: "New York",
        ratin: 3.6,
        venue: "Joe's Joint"
    },
    {
        name: "Basketball game",
        location: "New York",
        rating: 4.3,
        Venue: "Laura's Lounge"
    }
    ];
var results = [];

app.get("/", function(req, res){
    res.render("home");
});

app.post("/search", function(req, res){
    // app.get("/search", function(req, res){
    var mySearch = req.body.mySearch;
    // var mySearch = "game";
    var nearMe = req.body.nearMe;
    var byName = req.body.byName;
    var byLocation = req.body.byLocation;
    
    // if(nearMe) {
        mySearch = mySearch.toLowerCase();
        events.forEach(function(event){
            var eventName = event.name.toLowerCase();
            var newWord = "";
            for(var i=0; i < eventName.length; i++) {
                if(eventName[i] !== " ") {
                    newWord += eventName[i];
                    console.log(newWord);
                    if(newWord === mySearch) {
                        results.push(event);
                        newWord = "";
                    }
                } else {
                    newWord = "";
                }
            }
            newWord == "";
        });
    // }
    res.send(results);
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Bar Hopper App has started!");
});