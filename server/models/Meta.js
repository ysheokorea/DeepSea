const mongoose = require('mongoose');
const url = 'mongodb+srv://jongdae94:rlarnltjs1@cluster0.vtr5yee.mongodb.net/?retryWrites=true&w=majority'

module.exports = class Mongo {
    constructor() {
        this.conn = mongoose.model('Meta');
    }

    static initializeDB() {
        mongoose.connect(url, (err) => {
            if (err) {
                throw new Error('initializeDB: Connect mongodb failed');
            }
            mongoose.model('Meta', new mongoose.Schema({
                id: { type: Number, maxlength: 50, unique: 1 },
                name: { type: String, maxlength: 100 },
                description: { type: String, maxlength: 100 },
                image: { type: String, maxlength: 500 }
            }));
            console.log('initializeDB: Connection mongodb And Set Schema');
        })
    }

    getAllList() {
        return new Promise(resolve => {
            this.conn.find({}, (err, users) => {
                if (err) {
                    throw new Error(`getAllList Error: ${err}`);
                }

                if (users.length > 0) {
                    resolve(users);
                }
            })
        })
    }

    saveList(obj, i) {
        const _conn = new this.conn({
            id: i,
            name: obj.name,
            description: obj.description,
            image: obj.image

        })

        _conn.save().then(() => {
            console.log('insert success!')
        })
    }

    a() {
        return new Promise(resolve => {
            this.conn.find({}, 'id', (err, userID) => {
                if (err) {
                    throw new Error(`getAllList Error: ${err}`);
                }

                resolve(userID);

            }).sort({
                id: -1
            }).limit(1)
        })

    }

}