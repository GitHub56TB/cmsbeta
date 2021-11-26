//Node JS Server Code
//Import express JS module into app and create its variable.
const http = require('http')

const fs = require('fs')

//const aboutPage = fs.readFileSync('about.html')

//const contactPage = fs.readFileSync('contact.html')

//const homePage = fs.readFileSync('index.html')

//const betaPagePHP = fs.readFileSync('beta.html')

//const jsPagePHP = fs.readFileSync('jsbeta.php')

/
const server = http.createServer((request, response) => {
   
  if (request.url === '/about'){

    return response.end(aboutPage)

  } else if (request.url === '/contact'){

      return response.end(contactPage)

  } else if (request.url === '/'){

      return response.end(homePage)

  } else if (request.url === '/beta'){

      return response.end(betaPagePHP)


//  } else if (request.url === '/jsbeta.php'){

//     return response.end(jsPagePHP)

   
  } else {

      response.writeHead(404)

      response.end('THE PAGE WAS NOT FOUND')

  }



//   response.writeHead(404)
//   response.end('HELLO NODE JS')
 })
*/
 var app = server.listen(3000)

//var express = require('express');
//var app = express();

app.listen(3000, function(){
   console.log('Server running on port 3000');
});

/* Function callName() is executed whenever URL is of the form localhost:3000/name
*/
app.get('/name', callName);


function callName(req, res) {
/* Use child_process.spawn method from child_process module and assign it to variable spawn
*/
    var spawn = require("child_process").spawn;

// Parameters passed in spawn -
//1. type_of_script
//2. List containing PATH of the script and arguments for the script

//Example: http://localhost:3000/name?firstname=Mike&lastname=Will
// so, First Name = Mike and Last Name = Will
    var process = spawn('php',["./hello.php",
                  req.query.firstname,
                  req.query.lastname]);

    process.stdout.on('data', function(data){
      console.log('data received from PHP Script ::' + data.toString());
      res.send(data.toString());
    
    });

}