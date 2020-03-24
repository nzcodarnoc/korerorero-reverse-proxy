var express = require('express')
var { createProxyMiddleware } = require('http-proxy-middleware')

var app = express()

app.use(
  createProxyMiddleware('/tts', {
    target: 'http://marytts:59125',
    pathRewrite: {
      '^/tts': '',
    },
  })
)

app.listen(3000)
