const router = require("express").Router();
const { Word } = require("../models/words.js");

router.get("/", async (req, res) => {
    try {
        let words = await Word.find();
        res.status(201).send({ data: words, message: "Bütün kelimeler veritabanından çekildi" })

        if (!words)
            return res.status(401).send({ message: "Kelimeler bulunamadı!" })

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
})


module.exports = router;