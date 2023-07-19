const db = require('../util/database');

module.exports = class Course {
    constructor(id, name, price, date, description, platform, coordinator, mail, speakers) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.date = date;
        this.description = description;
        this.platform = platform;
        this.coordinator = coordinator;
        this.mail = mail;
        this.speakers = speakers;
    }

    static fetchCourseById(id) {
        return db.execute('SELECT * FROM kursy WHERE id = ? LIMIT 1', [id]);
    }

    static fetchAllCourses() {
        return db.execute('SELECT * FROM kursy');
    }
}