const mongoose = require("mongoose");

const wordSchema = new mongoose.Schema({
    category: String,
    word: String,
    wordTranslate: String,
    sentence: String,
    sentenceTranslate: String,
})


const Word = mongoose.model("word", wordSchema);

module.exports = { Word }