const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())

const Database = require('./database');
const UserModel =require('./Models/user')
const usr = new UserModel({username: 'deny', password: '12345'});

usr.save()
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })

UserModel
    .find({
        username: 'deny'   // search query
    })
    .then(doc => {
        console.log(doc)
    })
    .catch(err => {
        console.error(err)
    })


app.listen(3000, () => {
    console.log("Server running on port " + 3000);
});
app.get('/', (req, res) => {
    res.json({app: 'Run app'});
    });