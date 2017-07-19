import http from 'http';
import router from "./src/routes";
import express from "express"
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api',router)
// http.createServer((req, res)=> {
//     res.writeHead(200,{'Content-type':'text/plain'});
//     res.end('HELLO WORLD');
// }).listen(3000,'localhost');
mongoose.connect('mongodb://mughees605:mughees1997@ds163701.mlab.com:63701/es6-mongoose')
app.listen(process.env.port || 4000, function () {
    console.log("4000")
})