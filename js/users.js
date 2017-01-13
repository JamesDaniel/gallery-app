/**
 * Created by JamesDaniel on 12/01/2017.
 */
var users = (function () {
    var mod = {};
    var users = [
        {id: 1, name: 'John', height: 1.6, gender: 'm'},
        {id: 2, name: 'Patricia', height: 1.7, gender: 'f'},
        {id: 3, name: 'Peter', height: 1.8, gender: 'm'},
        {id: 4, name: 'Pauline', height: 1.55, gender: 'f'}
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
    mod.getNewId = function () {
        return mod.getUsers().reduce(function (maxId, user) {
            return user.id > maxId ? user.id + 1 : maxId;
        }, 1);
    };
    // Currying with closure functions.
    mod.createUser = function (name) {
        return function (height) {
            return function (gender) {
                return {
                    id: mod.getNewId(),
                    name: name,
                    height: height,
                    gender: gender
                };
            };
        };
    };
    mod.addUser = function (user) {
        mod.getUsers().push(user);
    };
    return mod;
}());