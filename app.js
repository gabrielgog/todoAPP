// jshint esversion:6

const express = require("express");

const bodyParser = require("body-parser");

const app = express();


let values = []

let workItems = []


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.get("/", function (req, res) {

    let today = new Date()



    let options = {
        weekday: 'long',
        day: 'numeric',

        month: 'long'
    }

    let day = (today.toLocaleDateString("en-US", options))







    res.render("list", { listTitle: day, newListItems: values })


});


app.post("/", function (req, res) {
    value = req.body.newItem;

    values.push(value)




    res.redirect("/");
})




app.get("/work", function (req, res) {

    res.render("list", { listTitle: "work List", newListItems: workItems})
})

app.post("/work", function (req, res) {
  let  value = req.body.newItem;
    workItems.push(value)

    console.log(req.body)


    // res.redirect("/");

});


app.get("/about", function(req, res){

    res.render("about")
})


app.listen(3000, function () {
    console.log("server is running on port 3000")
})