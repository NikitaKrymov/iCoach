const { creteProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
    app.use(creteProxyMiddleware("/api/**", { target: 'http://localhost:5000' }));
}