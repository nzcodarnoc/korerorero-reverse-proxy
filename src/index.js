var express = require('express')
var { createProxyMiddleware } = require('http-proxy-middleware')

var app = express()

app.use(createProxyMiddleware('/tts', {
    target: 'http://tts:59125',
    pathRewrite: {
      '^/tts': '',
    },
  })
)

app.use(createProxyMiddleware('/mouth-shapes', {
  target: 'http://mouth-shapes:3000',
  pathRewrite: {
    '^/mouth-shapes': ''
  }
}));

app.listen(3000);
