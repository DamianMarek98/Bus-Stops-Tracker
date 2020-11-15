const Database = require('../database');
const UserModel = require('../Models/user')

module.exports.getUser = (req, res) => {
    UserModel.findUser(req.params.username, req.params.password).then((result) => {
        res.status(200).send(result);
    });
};

module.exports.addStop = (req, res) => {
    UserModel.addStop(req.params.username, req.params.stopId).then((result) => {
       if (result === false) {
           res.status(200).send(JSON.stringify(false));
       } else {
           res.status(200).send(JSON.stringify(result));
       }
    });
}

module.exports.removeStop = (req, res) => {
    UserModel.removeStop(req.params.username, req.params.stopId).then((result) => {
        if (result === false) {
            res.status(200).send(JSON.stringify(false));
        } else {
            res.status(200).send(JSON.stringify(result));
        }
    });
}