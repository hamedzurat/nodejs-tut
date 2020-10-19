var http = require("http");
var fs = require("fs");

var host = "0.0.0.0";
var port = "8112";

fs.readFile("./index.html",function(err,file){
    if(err){console.log(err);return 1;}

    var server = http.createServer(function(req,res)
    {
        res.statusCode = 200;
        res.setHeader('content-type','text/html');
        res.write(file);
        res.end();
    });
    
    server.listen(port,host,function(){
        console.log("running..")
    });

});