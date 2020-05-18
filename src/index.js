// @ts-nocheck
const express = require("express");
const helmet = require("helmet");
const https = require('https');
const fs = require('fs');

const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(helmet());
app.use(helmet.xssFilter());
app.disable("x-powered-by");

app.get("/", function (_req, res) {
  res.send("OK. Reverse proxy service");
});

app.use(
  createProxyMiddleware("/orchestration", {
    target: "http://orchestration:3001",
    pathRewrite: {
      "^/orchestration": "",
    },
  })
);

app.use(
  createProxyMiddleware("/front-end", {
    target: "http://front-end:3000",
    pathRewrite: {
      "^/front-end": "",
    },
  })
);


// ANCHOR /recognizer
app.use(
  createProxyMiddleware("/recognizer", {
    target: "http://speech-recognition:4000",
    pathRewrite: {
      "^/recognizer": "",
    },
    ws: true,
  })
);

if (process.env.USE_HTTPS === 'false') {
  app.listen(8000)  
} else {
  https.createServer({
    key: fs.readFileSync(process.env.KEY),
    cert: fs.readFileSync(process.env.CERT),
    passphrase: process.env.PASSPHRASE
  }, app).listen(443);
}
