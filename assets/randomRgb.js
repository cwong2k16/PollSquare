function random_rgb() {
    var max = 255;
    return ('rgb(' + Math.round(Math.random()*max) + ',' + Math.round(Math.random()*max) + ',' + Math.round(Math.random()*max) + ')');
}