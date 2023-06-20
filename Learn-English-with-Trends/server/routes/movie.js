const router = require("express").Router();
const { Movie } = require("../models/movies.js");

router.get("/", async (req, res) => {
    try {
        let movie = await Movie.find();
        res.status(201).send({ data: movie, message: "Öneri film bilgileri veritabanından çekildi" })

        if (!movie)
            return res.status(401).send({ message: "Öneri film bulunamadı!" })

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
})


module.exports = router;