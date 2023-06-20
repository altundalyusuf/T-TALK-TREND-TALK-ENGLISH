const mongoose = require("mongoose");

module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log("Veritabanına başarıyla bağlanıldı.")
    } catch (error) {
        console.log(error);
        console.log("Hata! Veritabanına bağlanılamadı!");
    }
}