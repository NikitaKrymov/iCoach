"use strict";
var createProxyMiddleware = require('http-proxy-middleware').createProxyMiddleware;
module.exports = function (app) {
    app.use(createProxyMiddleware("/api/**", { target: 'http://localhost:5000' }));
};
