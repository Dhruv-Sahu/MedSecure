const express = require('express');
const app = express();
const ImageKit = require('imagekit');

const imagekit = new ImageKit({
    urlEndpoint: 'https://ik.imagekit.io/DamnDaniel',
    publicKey: 'public_XPZuw9vMC1BETWsYx4Mvks7Kq24=',
    privateKey: 'private_wu+ZWASyuyiyQIPglGZQyhm+vJA='
});

// allow cross-origin requests
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/auth', function (req, res) {
    var result = imagekit.getAuthenticationParameters();
    res.send(result);
});

app.listen(3001, function () {
    console.log('Live at Port 3001');
});