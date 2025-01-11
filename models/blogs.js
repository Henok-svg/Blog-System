const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogSchema = new schema ({
    title : {
        type: String,
        reqiured: true
    },
    snippet : {
        type: String,
        reqiured: true
    },
    body : {
        type: String,
        required: true
    }
}, {timestamps : true});

const Blog = mongoose.model('Blog', blogSchema);

module.exports  = Blog;