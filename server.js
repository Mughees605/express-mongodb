import router from "./src/routes";
import express from "express"
import bodyParser from "body-parser";
import mongoose from "mongoose";
const port = process.env.PORT || 4000;
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api',router)
// http.createServer((req, res)=> {
//     res.writeHead(200,{'Content-type':'text/plain'});
//     res.end('HELLO WORLD');
// }).listen(3000,'localhost');
app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});
mongoose.connect('mongodb://mughees605:mughees1997@ds163701.mlab.com:63701/es6-mongoose')
app.listen(port, function () {
    console.log("server is running at : " + port)
})