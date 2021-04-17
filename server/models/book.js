const mongoose = require("mongoose")

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    authorId: {
        type: String,
        required: true,
        ref: "Author"
    }
})

const Book = mongoose.model("Book", Schema)

exports.Book = Book