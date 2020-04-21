const express = require("express");
const helmet = require("helmet");

const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(helmet());
app.use(helmet.xssFilter());
app.disable("x-powered-by");

app.get("/", function (_req, res) {
  res.send("OK. Reverse proxy service");
});

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
    target: "http://mouth-shapes:3005",
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

app.use(
  createProxyMiddleware("/front-end", {
    target: "http://front-end:3000",
    pathRewrite: {
      "^/front-end": "",
    },
  })
);

app.listen(8000);
