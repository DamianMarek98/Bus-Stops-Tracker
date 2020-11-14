const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

module.exports = app;
const Database = require('./database');
const UserModel = require('./Models/user');
const UserController = require('./Controllers/UserController');
const routesConfig = require('./Models/routesConfig');
const usr = new UserModel({username: 'deny', password: '12345', stops: [1, 213]});

/*usr.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })*/

UserModel
    .find({
        username: 'deny',   // search query
        password: '12345'
    })
    .then(doc => {
        console.log(doc);
    })
    .catch(err => {
        console.error(err);
    })


app.listen(3000, () => {
    console.log("Server running on port " + 3000);
});
app.get('/', (req, res) => {
    res.json({app: 'Run app'});
});