require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db.js");
const registerRoutes = require("./routes/register.js");
const loginRoutes = require("./routes/login.js");
const categoryRoutes = require("./routes/category.js");
const wordRoutes = require("./routes/word.js");
const movieRoutes = require("./routes/movie.js");

// database connection 
connection();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/register", registerRoutes);
app.use("/api/login", loginRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/word", wordRoutes);
app.use("/api/movie", movieRoutes);


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));

