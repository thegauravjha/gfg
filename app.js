const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.write("<h1>Welcome to GeeksforGeeks</h1>");
    res.write("<p>This article is about how to push code to Github using Git.");
    res.write("<p>This is the first version of the code - v1.0");
    res.send();
});

app.listen(3000, function () {
    console.log("server is up at port 3000");
});