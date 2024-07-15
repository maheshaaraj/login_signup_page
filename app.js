const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');

const app = express();
bodyParser

// app.use(express.static(__dirname + "/styles.css"));
app.use(express.static(path.join(__dirname, "public")));

// app.get('/styles.css', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'styles.css'));
// });


app.get("/", (req, res) => {
    // res.send("hello from server");
    res.sendFile(__dirname + "/signup.html");
    
});



app.listen(3000, ()=>{
    console.log("App started on port 3000 REFRESH localhost:3000");
});
