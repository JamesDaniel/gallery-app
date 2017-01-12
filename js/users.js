/**
 * Created by JamesDaniel on 12/01/2017.
 */
var users = (function () {
    var mod = {};
    var users = [
        {id: 1, name: 'John'},
        {id: 2, name: 'Pat'},
        {id: 3, name: 'Peter'},
        {id: 4, name: 'Paul'}
    ];
    mod.getUsers = function () {
        return users;
    };
    mod.getUserById = function (id) {
        return mod.getUsers().find(function (user) {
            return user.id === id;
        });
    };
    mod.getUserByName = function (name) {
        return mod.getUsers().find(function (user) {
            return user.name === name;
        });
    };
    return mod;
}());