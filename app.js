var express = require("express"),
    app     = express(),
    mongoose= require("mongoose"),
    methodOverride = require("method-override"),
    bodyParser = require("body-parser");

//APP Config    
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
mongoose.connect("mongodb://localhost/enerjiciks");


//ROUTES
app.get("/", function(req, res){
    res.render("home");
});

//NEW -GET
//CREATE -POST
//SHOW -GET
//EDIT -GET
//UPDATE -PUT
//DELETE -DELETE













app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server activated and online!");
});