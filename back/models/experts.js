const db = require('../util/database');

module.exports = class Experts {
    constructor(id, imie, nazwisko, rola, opis, zdjecie) {
        this.id = id;
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.rola = rola;
        this.opis = opis;
        this.zdjecie = zdjecie;
    }

    static getExperts() {
        return db.execute('SELECT imie, nazwisko, rola, opis, zdjecie FROM eksperci;');
    }
}