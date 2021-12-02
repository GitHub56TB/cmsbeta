//Node JS Server Code
//Import express JS module into app and create its variable.
// https://www.npmjs.com/package/express-edge
const port = 4000;
const express = require('express');
const app = new express();
const path = require('path');

const bodyParser = require('body-parser')

const { config, engine } = require('express-edge');

// https://www.npmjs.com/package/mongoose
const mongoose = require('mongoose');

//start mongodb server SERVICE on Mac ==> brew services start mongodb/brew/mongodb-community
//stop mongodb server SERVICE on Mac ==> brew services stop mongodb/brew/mongodb-community

// Reference Below:
// https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/#std-label-osx-prereq

// MongoDB (i.e. the mongod process) manually as a background process
// mongod --config /usr/local/etc/mongod.conf
// to stop manual process => ^C

mongoose.connect('mongodb://localhost/my_database')

// Now post needs the body parser in order to be able to retrieve
// the data and sort of "translate it" to JS, for that you need the body parser.

// app.use(bodyParser.urlencoded({extended: false})) //Post Body Parser


//const expressEdge = require('express-edge');

app.use(express.static('public'))

// Configure Edge if need to
config({ cache: process.env.NODE_ENV === 'production' });

// Automatically sets view engine and adds dot notation to app.render
app.use(engine);
app.set('views', `${__dirname}/views`);

// https://www.npmjs.com/package/body-parser
// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})


// app.use(expressEdge);

// app.set('views', '${__dirname}/views');


/* Function callName() is executed whenever URL is of the form localhost:3000/name
*/
app.get('/', (req, res) => {

  //res.sendFile(path.resolve(__dirname, 'pages/index_x.html'));
res.render('index');

})
// Added html for internal clicks on the web page menu items
app.get('/index.html', (req, res) => {

  res.sendFile(path.resolve(__dirname, 'pages/index.html'));

})

//app.get('/about.html', (req, res) => {
app.get('/about', (req, res) => {

//  res.sendFile(path.resolve(__dirname, 'pages/about.html'));
res.render('about');
})

//app.get('/post.html', (req, res) => {
app.get('/post', (req, res) => {

//  res.sendFile(path.resolve(__dirname, 'pages/post.html'));
res.render('post');

})

//app.get('/login.html', (req, res) => {
app.get('/login', (req, res) => {

//  res.sendFile(path.resolve(__dirname, 'pages/login.html'));
res.render('login');

})

//app.get('/contact.html', (req, res) => {
app.get('/contact', (req, res) => {

//  res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
res.render('contact');
})


app.get('/register', (req, res) => {
res.render('register');
})


app.get('/posts/new', (req, res) => {
res.render('create');
})


app.post('/posts/store', (req, res) => {

  console.log(req.body);

  res.redirect('/');

})



app.listen(port, () => {
   console.log("Server listening on port " + port);
});
