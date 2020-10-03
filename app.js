// jshint esversion: 6

const express = require("express")

const bodyParser = require("body-parser")

const app = express();

app.set('view engine', 'ejs');



app.get("/", function (req, res) {

    var today = new Date();

    var currentDay = today.getDay();

    var day = ""

    switch (currentDay) {
        case 0:
            day = "Sunday"
            
            break;

            case 6:

            day = "Saturday"

            break;
    
        default:
            break;
    }

        
    res.render("list", { kindOfDay: day })


})


app.listen(3000, function () {
    console.log("server is running on port 3000")
})