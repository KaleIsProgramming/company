const db = require('../util/database');

module.exports = class Article {
    constructor(header, content, image, date) {
        this.header = header;
        this.content = content;
        this.image = image;
        this.date = date;
    }

    static fetchAllArticles() {
        return db.execute("SELECT * FROM aktualnosci");
    }

    static fetchArticleById(id) {
        return db.execute("SELECT * FROM aktualnosci WHERE id = ?", [id]);
    }

    static addArticle() {
        return db.execute("INSERT INTO aktualnosci(nazwa, tresc, zdjecie) VALUES (?, ?, ?)", [ this.header, this.content, this.image ]);
    }

    static editArticle(id) {
        db.execute("UPDATE aktualnosci SET nazwa = ?, tresc = ?, zdjecie = ? WHERE id = ?", [this.header, this.content, this.zdjecie, id]);
    }

    static removeArticle(id) {
        db.execute("DELETE FROM aktualnosci WHERE id = ?", [id]);
    }
}