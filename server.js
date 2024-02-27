const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.set("strictQuery" , false);
mongoose.connect('mongodb+srv://nesterovahanna:w2vA*58Wb4VD6*j@cluster0.aspg3l1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

//mongodb+srv://nesterovahanna:<password>@cluster0.aspg3l1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0//
//password - w2vA*58Wb4VD6*j => по правилам их я также убирала * (w2vA%58Wb4VD6%j) => а еще так пробовала (w2vA%2A58Wb4VD6%2Aj)

app.listen(8000, () => {
    console.log('8000')
})