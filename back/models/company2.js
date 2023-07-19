const db = require('../util/database');

module.exports = class Company2 {
    constructor( description ) {
        this.description = description;
    }

    static getCompany() {
        return db.execute('SELECT * FROM company LIMIT 1');
    }
}