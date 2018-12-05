const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const fs = require("fs");
const mongoose = require('mongoose');

const qs = require("./model/modelTotal");

mongoose.connect("mongodb://localhost/minihack",
    {useNewUrlParser: true},
    (err) => {
        if(!err) console.log("Database Connected");
});

qs.find({}, (err, questions) => {
    if(!err) console.log("List question: ", questions);
});

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static('js'));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/view/inScore.html");
});

app.get("/ask", (req, res) =>{
    res.sendFile(__dirname + "/view/inScore.html");
});

app.post("/ask", (req, res) =>{
    qs.create({ Name: { Player1: req.body.player1,
                        Player2: req.body.player2,
                        Player3: req.body.player3,
                        Player4: req.body.player4,} }, (err, qsCreated) => {
        if(!err) {
            // // console.log(qsCreated);
            // res.redirect("/randomquestion");
            console.log("Oke gái eeiii");
        }
    });
});

app.get("/:id", (req, res) => {
    res.sendFile(__dirname + "/view/scoreKeeper.html")
})

app.post("/:id", (req, res) => {
    const id = req.body.id;
    console.log(req.body.id);
    qs.findById(id, (err, players) => {
        res.send({players});
    })
})

app.listen(1234, (err) => {
    if(!err) console.log("Success!");
});
