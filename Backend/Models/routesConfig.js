let UsersController = require('../Controllers/UserController');
const app = require('../app');

app.get('/users/:username/:password', [
    UsersController.getUser
]);

app.put('/users/addStop/:username/:stopId', [
    UsersController.addStop
]);

app.delete('/users/removeStop/:username/:stopId', [
    UsersController.removeStop
]);