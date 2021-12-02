// https://www.npmjs.com/package/mongoose
// Using Node.js `require()`
const mongoose = require('mongoose');

const Post = require('./database/models/Post');

//Use any name for the database below

mongoose.connect('mongodb://localhost/node-js-test-blog');

// Diferent Options below

Post.find({}, (error, posts) => {

  console.log(error, posts)

})



/*



/////////
Post.findByIdAndUpdate("61a81f0afe4f6a882fee3553", {

  title: 'My first blog post - UPDATED'

}, (error, post) => {

  console.log(error, post)

})



////////
Post.findById("61a81f0afe4f6a882fee3553", (error, post) => {

  console.log(error, post)

})


/////////
Post.find({}, (error, posts) => {

  console.log(error, posts)

})
/////////
Post.find({
  title: 'My first blog post'
})

////////

Post.create({

  title: 'My first blog post',

  description: 'Blog post describing',

  content: 'Lorem stuff 2'

}, (error, post) => {

  console.log(error, post)

})
*/
