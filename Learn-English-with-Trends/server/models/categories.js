const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    category: { type: Array },
})


const Category = mongoose.model("category", categorySchema);

module.exports = { Category }