var proxy = require('/lib/frontend-proxy/proxy');

exports.get = function (req) {

    log.info(`Persons list controller:\nUrl: ${req.path}\nmode: ${req.mode}`);

    return proxy.get(req);
}
