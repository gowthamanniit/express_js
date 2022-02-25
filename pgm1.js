const { response } = require('express');
var express = require('express');  
var app = express();  

      

app.get('/index.html', function (req, res) {  
   //res.redirect("https://www.gmail.com");   
   //req.accepts("text/html");
   //res.send('Welcome dssdf Ajay stack : '+d);  
   res.sendFile(__dirname+"/"+"index.html");
})  

app.get('/process_get', function (req, res) {  
   response = {  
          first_name:req.query.first_name,  
          last_name:req.query.last_name  
      };  
      console.log(response);  
      res.end(JSON.stringify(response));  
      
   })  
  

var server = app.listen(3000, function () {  
var host = server.address().address
  var port = server.address().port
 console.log("Example app listening at http://%s:%s", host, port)  
})  