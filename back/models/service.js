const db = require('../util/database');

module.exports = class Service {
    constructor(id, name, text) {
        this.id = id;
        this.name = name;
        this.text = text;
    }

    static getAllServices() {
        return db.execute('SELECT nazwa, text FROM uslugi');
    }
}