import mongoose from "mongoose";

var book_d = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    date: {
        type: String,
        require: true
      
    }
})

var schema = new mongoose.Schema({
    author: {
        type: String,
        require: true
    },
    book: [book_d]
})
const authordb = mongoose.model('authordb', schema)
export {authordb};
