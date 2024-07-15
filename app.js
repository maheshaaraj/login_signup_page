const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');

const app = express();


// app.use(express.static(__dirname + "/styles.css"));
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static(path.join(__dirname, "public", "images")));


// app.get('/styles.css', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'styles.css'));
// });

app.use(bodyParser.urlencoded({ extended : true }));

app.get("/", (req, res) => {
    // res.send("hello from server");
    res.sendFile(__dirname + "/signup.html");
    
});

app.post("/", (req, res) => {
    console.log(req.body);
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const email = req.body.email;
    console.log("name: " + firstName + " "+ lastName +" email: " + email);
    res.write("name: " + firstName + " "+ lastName +" email: " + email);
    res.send();
});



app.listen(3000, ()=>{
    console.log("App started on port 3000 REFRESH localhost:3000");
});
