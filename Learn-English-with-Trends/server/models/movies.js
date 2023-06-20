const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    image: String,
    name: String,
    year: String,
    about: String,
})


const Movie = mongoose.model("movie", movieSchema);

module.exports = { Movie }