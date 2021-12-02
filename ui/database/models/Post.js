// https://www.npmjs.com/package/mongoose
// Using Node.js `require()`
const mongoose = require('mongoose');


// Users, Posts, Products - Examples


const PostSchema  = new mongoose.Schema({

  title: String,

  description: String,

  content: String

});


// Training called "MyPostModel" ==> "Post" below
const Post = mongoose.model('Post', PostSchema);

module.exports = Post;



/////////////////////
/*

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});

*/
