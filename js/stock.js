/**
 * Created by JamesDaniel on 09/01/2017.
 */
var stock = (function () {
    var mod = {};
    mod.photoUrls = [{owner: 1, id: 1, url: 'http://www.w3schools.com/css/img_fjords.jpg', color: 'red'},
        {owner: 1, id: 2, url: 'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png?itok=Jxf0IlS4', color: 'blue'},
        {owner: 1, id: 3, url: 'http://wallpaper-gallery.net/images/image/image-17.png', color: 'red'},
        {owner: 4, id: 4, url: 'http://wallpaper-gallery.net/images/image/image-13.jpg', color: 'blue'},
        {owner: 4, id: 5, url: 'http://wallpaper-gallery.net/images/image/image-18.png', color: 'yellow'},
        {owner: 4, id: 6, url: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg', color: 'blue'},
        {owner: 4, id: 7, url: 'http://wallpaper-gallery.net/images/image/image-23.jpg', color: 'pink'},
        {owner: 3, id: 8, url: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg', color: 'green'},
        {owner: 1, id: 9, url: 'http://www.menucool.com/slider/jsImgSlider/images/image-slider-2.jpg', color: 'blue'}];
    mod.getPhotos = function () {
        return this.photoUrls;
    };
    mod.getByColor = function (color) {
        return mod.photoUrls.filter(function (photo) {
            return photo.color === color;
        });
    };
    mod.excludeColor = function (color) {
        return mod.photoUrls.filter(function (photo) {
            return !(photo.color === color);
        });
    };
    mod.toString = function () {
        return mod.photoUrls.map(function (photo) {
            return 'The Url is: ' + photo.url + '. The average color is: ' + photo.color;
        });
    };
    mod.findById = function (id) {
        return mod.photoUrls.find(function (photo) {
            return photo.id === id;
        });
    };
    mod.countColor = function (color) {
        return mod.photoUrls.reduce(function (sum, photo) {
            return photo.color === color? sum + 1: sum;
        }, 0);
    };
    mod.getPhotosAndUsers = function () {
        return mod.photoUrls.map(function (photo) {
            return {photo: photo, user: users.getUserById(photo.owner)};
        });
    };
    mod.getTidyUsersAndPhotos = function () {
        return users.getUsers().map(function (user) {
            return mod.getTidyUserPhotos(user.name) || user;
        });
    };
    mod.getPhotosByUserName = function (name) {
        return mod.getPhotosAndUsers().filter(function (photosAndUsers) {
            return photosAndUsers.user.name === name;
        });
    };
    mod.getTidyUserPhotos = function (name) {
        return mod.getPhotosByUserName(name).reduce(function (user, photosAndUser) {
            user.id = photosAndUser.user.id;
            user.name = photosAndUser.user.name;
            user.photos = user.photos || [];
            user.photos.push(photosAndUser.photo);
            return user;
        }, {});
    };
    return mod;
}());