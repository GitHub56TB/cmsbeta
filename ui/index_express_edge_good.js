//Node JS Server Code
//Import express JS module into app and create its variable.
// https://www.npmjs.com/package/express-edge

const express = require('express');
const app = new express();
const path = require('path');

const { config, engine } = require('express-edge');

//const expressEdge = require('express-edge');

app.use(express.static('public'))

// Configure Edge if need to
config({ cache: process.env.NODE_ENV === 'production' });

// Automatically sets view engine and adds dot notation to app.render
app.use(engine);
app.set('views', `${__dirname}/views`);

// app.use(expressEdge);

// app.set('views', '${__dirname}/views');


/* Function callName() is executed whenever URL is of the form localhost:3000/name
*/
app.get('/', (req, res) => {

//  res.sendFile(path.resolve(__dirname, 'pages/index.html'));
  res.render('index');

})
// Added html for internal clicks on the web page menu items
app.get('/index.html', (req, res) => {

  res.sendFile(path.resolve(__dirname, 'pages/index.html'));

})

app.get('/about.html', (req, res) => {

  res.sendFile(path.resolve(__dirname, 'pages/about.html'));

})

app.get('/post.html', (req, res) => {

  res.sendFile(path.resolve(__dirname, 'pages/post.html'));

})

app.get('/contact.html', (req, res) => {

  res.sendFile(path.resolve(__dirname, 'pages/contact.html'));

})

app.listen(4000, () => {
   console.log('Server running on port 4000');
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
