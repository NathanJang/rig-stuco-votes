module.exports = function(app) {
    var php = require('php-proxy-middleware');
    var path = require('path');

    app.use('/proxy', php(path.join(__dirname, '/../..', '/dist/proxy')));
};
