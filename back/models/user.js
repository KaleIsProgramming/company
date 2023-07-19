const db = require('../util/database');

module.exports = class User {
    constructor(id, name, surname, position, company_id, phone, mail, contact_email, addon_information, accomodation, s1, s2, s3, s4){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.position = position;
        this.company_id = company_id;
        this.phone = phone;
        this.mail = mail;
        this.contact_email = contact_email;
        this.addon_information = addon_information;
        this.accomodation = accomodation;
        this.s1 = s1;
        this.s2 = s2;
        this.s3 = s3;
        this.s4 = s4;
    }

    static fetchUserById(id) {
        return db.execute('SELECT * FROM uzytkownicy WHERE id = ? LIMIT 1', [id]);
    }

    static fetchAllUsers() {
        return db.execute('SELECT * FROM uzytkownicy');
    }
}