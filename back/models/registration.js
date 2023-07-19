const db = require('../util/database');

module.exports = class Registrationes {
    constructor(course_id, name, surname, position, company_name, nip, street, post_code, city, company_phone, user_phone, address, parcipitan_mail, website, others, accomodation, discount, other_discount, r1, r2, r3, r4) {
        this.id;
        this.course_id = course_id;
        this.name = name;
        this.surname = surname;
        this.position = position;
        this.company_name = company_name;
        this.nip = nip;
        this.street = street;
        this.post_code = post_code;
        this.city = city;
        this.company_phone = company_phone;
        this.user_phone = user_phone;
        this.user_mail = address;
        this.parcipitan_mail = parcipitan_mail;
        this.website = website;
        this.others = others;
        this.accomodation = accomodation;
        this.discount = discount;
        this.other_discount = other_discount;
        this.r1 = r1;
        this.r2 = r2;
        this.r3 = r3;
        this.r4 = r4;
    };

    addRegistrationes() {
        db.execute("INSERT INTO zgloszenia(szkolenie_id, imie, nazwisko, stanowisko, nazwa_firmy, nip_firmy, ulica, kod_pocztowy, miasto, tel_firmy, tel_uzytkownika, mail_zglaszajacego, mail_uczestnika, strona_www, uwagi, nocleg, rabat, rabat_inny, r1, r2, r3, r4)VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
        [
            this.course_id,
            this.name,
            this.surname,
            this.position,
            this.company_name,
            this.nip,
            this.street,
            this.post_code,
            this.city,
            this.company_phone,
            this.user_phone,
            this.user_mail,
            this.parcipitan_mail,
            this.website,
            this.others,
            this.accomodation,
            this.discount,
            this.other_discount,
            this.r1,
            this.r2,
            this.r3,
            this.r4 
        ]);
    }

    removeRegistrationes(id) {
        db.execute("DELETE FROM zgloszenia WHERE id = ?", [id]);
    }
};