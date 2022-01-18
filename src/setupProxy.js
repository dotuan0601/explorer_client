const { createProxyMiddleware } = require('http-proxy-middleware');

const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/api/', // replace with your endpoint
        {
            target: 'http://localhost:8090',
            secure: false,
        } // replace with your target
    ));

    app.use(createProxyMiddleware('/auth/', // replace with your endpoint
        {
            target: 'http://localhost:8090',
            secure: false,
        } // replace with your target
    ));
}