var proxy = require('/lib/frontend-proxy/proxy');

exports.get = function (req) {

    log.info(`Default page controller:\nUrl: ${req.path}\nmode: ${req.mode}`);

    return proxy.get(req);
}



