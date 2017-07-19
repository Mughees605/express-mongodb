import router from "./src/routes";
import express from "express"
import bodyParser from "body-parser";
import mongoose from "mongoose";
const app = express();

const port = process.env.PORT || 4000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api',router)


mongoose.connect('mongodb://mughees605:mughees1997@ds163701.mlab.com:63701/es6-mongoose')
app.listen(port,() => {
    console.log("server is running at : " + process.env.PORT || 8080)
})