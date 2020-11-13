const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1:27017/BUS_STOPS_TRACKER';

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect(mongoDB).then(() => {
            console.log('Database connection successful')
        })
            .catch(err => {
                console.error('Database connection error')
            })
    }
}

module.exports = new Database()
