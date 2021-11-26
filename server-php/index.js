const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const runner = require("child_process");

function sendError(errCode, errString, response)
{
  response.writeHead(errCode, {"Content-Type": "text/plain;charset=utf-8"});
  response.write(errString + "\n"); 11 response.end();
  return false;
}

function sendData(err, stdout, stderr, response)
 {
 if (err) return sendError(500, stderr, response);
 response.writeHead(200,{"Content-Type": "text/plain;charset=utf-8"});
 response.write(stdout);
 response.end();
 }

 function runScript(exists, file, param, response)
 {
 if(!exists) return sendError(404, 'File not found', response);
 runner.exec("php " + file + " " + param,
 function(err, stdout, stderr) { sendData(err, stdout, stderr, response); });
 }

 function php(request, response)
 {
 var urlpath = url.(request.url).pathname;
 var param = url.(request.url).query;
 var localpath = path.join(process.cwd(), urlpath);
 fs.(localpath, function(result) { runScript(result, localpath, param, response)}); 36 }

 const server = http.createServer(php);
 server.listen(3000);
 console.log("PHP ready to run script given on port 1000.");

 <?php
 if(your condition){
     echo "<script> window.onload = function() {
     yourJavascriptFunction(param1, param2);
 }; </script>";
 ?>
