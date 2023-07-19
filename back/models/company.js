const db = require('../util/database');

module.exports = class Company {
    constructor(id, name, nip, address, phoneNumber, postCode, city, website){
        this.id = id;
        this.name = name;
        this.nip = nip;
        this.address = address;
        this.postCode = postCode;
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.website = website;
    }

    static fetchCompanyById(id) {
        return db.execute('SELECT * FROM firmy WHERE id = ? LIMIT 1', [id]);
    }

    static fetchAllCompanies() {
        return db.execute('SELECT * FROM firmy');
    }
}