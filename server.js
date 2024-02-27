const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.set("strictQuery" , false);
mongoose.connect('mongodb+srv://nesterovahanna:19931201jsIO@cluster0.aspg3l1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

//mongodb+srv://nesterovahanna:<password>@cluster0.aspg3l1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0//
//password - 19931201!jsIO=> по правилам их я также убирала * (19931201%jsIO)

app.listen(8000, () => {
    console.log('8000')
})