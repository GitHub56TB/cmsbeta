
/*
//Node JS Server Code
//Import express JS module into app and create its variable.

const express = require('express');
const path = require('path');

//const expressEdge = require('express-edge');

const app = new express();

//app.use(expressEdge);

//app.set('views', `${__dirname}/views`);

const engine  = require('express-edge');

// Automatically sets view engine and adds dot notation to app.render
app.use(engine)
app.set('views', `${__dirname}/views`);

app.get('/', (req, res) => {
  res.render('index');
});

*/

const express = require('express');
const path = require('path');

const expressEdge = require('express-edge');
const app = new express();

app.use(express.static('public'));
app.use(expressEdge);

app.set('views', `${__dirname}/views`);

app.get('/', (req, res) => {
  res.render('index');
});

/*

app.use(express.static('public'));


app.get('/', (req, res) => {

  res.sendFile(path.resolve(__dirname, 'pages/index.html'));
//res.render('index');

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
*/
app.listen(4000, () => {
   console.log('Server running on port 4000');
});


/////////////////
/*

const express = require('express');
const app = express();
const { config, engine } = require('express-edge');

// Configure Edge if need to
config({ cache: process.env.NODE_ENV === 'production' });

// Automatically sets view engine and adds dot notation to app.render
app.use(engine);
app.set('views', `${__dirname}/views`);

app.get('/', (req, res) => {
  res.render('users.index', { users: [...] });
});

app.listen(3000);
*/
