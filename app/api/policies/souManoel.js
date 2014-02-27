var url = require('url');

module.exports = function(req, res, next) {

    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    if ( query.usuario !== 'manoel' ) {
          return res.forbidden('Você não é Manoel. Se manda.');
    }

    next();

}