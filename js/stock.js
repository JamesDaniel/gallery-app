/**
 * Created by JamesDaniel on 09/01/2017.
 */
var stock = (function () {
    var mod = {};
    mod.photoUrls = [{url: 'http://www.w3schools.com/css/img_fjords.jpg', color: 'red'},
        {url: 'https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/leisa_christmas_false_color.png?itok=Jxf0IlS4', color: 'blue'},
        {url: 'http://wallpaper-gallery.net/images/image/image-17.png', color: 'red'},
        {url: 'http://wallpaper-gallery.net/images/image/image-13.jpg', color: 'blue'},
        {url: 'http://wallpaper-gallery.net/images/image/image-18.png', color: 'yellow'},
        {url: 'https://s3-us-west-1.amazonaws.com/powr/defaults/image-slider2.jpg', color: 'blue'},
        {url: 'http://wallpaper-gallery.net/images/image/image-23.jpg', color: 'pink'},
        {url: 'https://www.smashingmagazine.com/wp-content/uploads/2015/06/10-dithering-opt.jpg', color: 'green'},
        {url: 'http://www.menucool.com/slider/jsImgSlider/images/image-slider-2.jpg', color: 'blue'}];
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
    return mod;
}());