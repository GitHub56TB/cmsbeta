//Node JS Server Code
//Import express JS module into app and create its variable.

const express = require('express');
const app = express();
const path = require('path');


/* Function callName() is executed whenever URL is of the form localhost:3000/name
*/
app.get('/', (request, response) => {
// Line below - Just for stus while testing
  console.log(path.resolve(__dirname, 'index.html'));

  response.sendFile(path.resolve(__dirname, 'index.html'))

})

app.get('/about', (request, response) => {
// Line below - Just for stus while testing
    console.log(path.resolve(__dirname, 'about.html'));

    response.sendFile(path.resolve(__dirname, 'about.html'))

  })

app.get('/contact', (request, response) => {
  // Line below - Just for stus while testing
    console.log(path.resolve(__dirname, 'contact.html'));

    response.sendFile(path.resolve(__dirname, 'contact.html'))

  })

// You can use different varibles in the statement below. Just verify
  app.get('/beta', (req, resPHP) => {
    // Line below - Just for stus while testing
      console.log(path.resolve(__dirname, 'nodebeta.php'));

      resPHP.sendFile(path.resolve(__dirname, 'nodebeta.php'))

    })

    app.get('/hbeta', (request, response) => {
      // Line below - Just for stus while testing
        console.log(path.resolve(__dirname, 'beta.html'));

        response.sendFile(path.resolve(__dirname, 'beta.html'))

      })
app.listen(3000, () => {
   console.log('Server running on port 3000');
});



/*
const http = require('http')

const fs = require('fs')

const aboutPage = fs.readFileSync('about.html')

const contactPage = fs.readFileSync('contact.html')

const homePage = fs.readFileSync('index.html')

const betaPagePHP = fs.readFileSync('beta.html')

const jsPagePHP = fs.readFileSync('jsbeta.php')


const server = http.createServer((request, response) => {

  if (request.url === '/about'){

    return response.end(aboutPage)

  } else if (request.url === '/contact'){

      return response.end(contactPage)

  } else if (request.url === '/'){

      return response.end(homePage)

  } else if (request.url === '/beta'){

      return response.end(betaPagePHP)


  } else if (request.url === '/jsbeta.php'){

      return response.end(jsPagePHP)


  } else {

      response.writeHead(404)

      response.end('HTHE PAGE WAS NOT FOUND')

  }



//   response.writeHead(404)
//   response.end('HELLO NODE JS')
 })

 server.listen(3000)
*/
