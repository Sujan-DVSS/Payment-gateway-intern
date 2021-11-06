const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
// const ejs = require("ejs");
app.set('view engine','ejs');
app.use("/public",express.static(__dirname+'/public'));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/payment.html")
});
if(port == null  || port == ""){
  port = 3000;
}
app.listen(port, function(){
console.log("hello");
});
