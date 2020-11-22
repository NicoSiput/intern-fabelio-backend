var apiRouter = require("./routes/api");

var express = require("express");
var cors = require("cors");
var app = express();
app.use(cors());

app.use("/api", apiRouter);

// Listen
var port = process.env.PORT || 3000;
app.listen(port);
console.log("Listening on localhost:" + port);
