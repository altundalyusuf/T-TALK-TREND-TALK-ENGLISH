const router = require("express").Router();
const { Category } = require("../models/categories.js");

router.get("/", async (req, res) => {
    try {
        let categories = await Category.find();
        res.status(201).send({ data: categories, message: "Bütün kategoriler veritabanından çekildi" })

        if (!categories)
            return res.status(401).send({ message: "Kategoriler bulunamadı!" })

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
    }
})


module.exports = router;