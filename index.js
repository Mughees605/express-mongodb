var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");


var app = express();
var port = (process.env.PORT || 4000);

app.use(bodyParser.json());

var studentSchema = new mongoose.Schema({
    name : String,
    rollNum:Number,
    class:String
})

var studentModel = mongoose.model("student",studentSchema);

app.post("/post",function(req,res,next){

    var newStudent = new studentModel({
        name : req.body.name,
    })
    newStudent.save(function(err,data){

        if(!err){
            console.log("student is saved");
            res.send("student is saved");
        }
        else{
            res.send("student saving failed");
            console.log("student savig failed");
        }

    })
})

app.get('/post', function (req, res) {
    
        studentModel.find({}, function (err, docs) {
            res.json(docs);
            console.log(docs);
        });
    
});



// app.get("/",function(req,res,next){

//    // res.send("hello world")
//    studentModel.find(function(err,doc){
//    if(err){
//        res.send(err);
//    }
//    else{
//        res.send(doc);
//    }
//    })
       
app.get("/home",function(req,res,next){

    res.send("home");


});

app.listen(port,function(){
    console.log("local host is on port 3000");
})


mongoose.connect('mongodb://mughees605:mughees1996@ds151289.mlab.com:51289/hello-world');
mongoose.connection.on("connected",function(){
    console.log("moongose is connected")
})