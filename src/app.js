// @ts-nocheck
const express = require("express");
const helmet = require("helmet");
const env = require("./env")

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
    target: env.ORCHESTRATION,
    pathRewrite: {
      "^/orchestration": "",
    },
  })
);

app.use(
  createProxyMiddleware("/front-end", {
    target: env.FRONT_END,
    pathRewrite: {
      "^/front-end": "",
    },
  })
);

// ANCHOR /recognizer
app.use(
  createProxyMiddleware("/recognizer", {
    target: env.RECOGNIZER,
    pathRewrite: {
      "^/recognizer": "",
    },
    ws: true,
  })
);

module.exports = app
