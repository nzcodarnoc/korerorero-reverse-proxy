const express = require("express");
const helmet = require("helmet");

const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(helmet());
app.use(helmet.xssFilter());
app.disable("x-powered-by");

app.use(
  createProxyMiddleware("/tts", {
    target: "http://tts:59125",
    pathRewrite: {
      "^/tts": "",
    },
  })
);

app.use(
  createProxyMiddleware("/mouth-shapes", {
    target: "http://mouth-shapes:3000",
    pathRewrite: {
      "^/mouth-shapes": "",
    },
  })
);

app.use(
  createProxyMiddleware("/orchestration", {
    target: "http://orchestration:3001",
    pathRewrite: {
      "^/orchestration": "",
    },
  })
);

app.listen(3000);
