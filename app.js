// jshint esversion:6

const express = require("express");

const bodyParser = require("body-parser");

const app = express(); 
var values = [];


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){




var today = new Date()



var options = {
    weekday: 'long', 
    day: 'numeric',

    month: 'long'
}

var day = (today.toLocaleDateString("en-US", options))

res.render("list", {kindOfDay: day, newListItems: values})


});


 app.post("/", function(req, res){
     value = req.body.newItem;

     values.push(value)



    res.redirect("/");
 })



app.listen(3000, function(){
    console.log("server is running on port 3000")
})