const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    stops: [{type: Number}]
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;


module.exports.findUser = (username, password) => {
    return userModel.findOne({
        username: username,
        password: password
    }).then((result) => {
        result = JSON.stringify(result);
        return result;
    });
}

module.exports.addStop = (username, stopId) => {
    return userModel.findOne({
        username: username
    }).then((result) => {
        if (result !== null) {
            const busStopId = parseInt(stopId);
            const found = result.stops.find(elem => elem === busStopId);
            if (found === undefined) {
                result.stops.push(busStopId);
                result.save();
                return result.stops;
            }
        }

        return false;
    })
}

module.exports.removeStop = (username, stopId) => {
    return userModel.findOne({
        username: username
    }).then((result) => {
        if (result !== null) {
            const busStopId = parseInt(stopId);
            const found = result.stops.find(elem => elem === busStopId);
            if (found !== undefined) {
                let i = result.stops.indexOf(found);
                if (i > -1) {
                    result.stops.splice(i, 1);
                    result.save();
                    return result.stops;
                }
            }
        }

        return false;
    })
}