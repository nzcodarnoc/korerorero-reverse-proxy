const dotenv = require("dotenv");
const envalid = require("envalid");
const { port, url, email } = envalid;
dotenv.config();

const env = envalid.cleanEnv(process.env, {
  PORT: port(),
  ORCHESTRATION: url(),
  FRONT_END: url(),
  RECOGNIZER: url(),
  MAINTAINER_EMAIL:  email()
});

module.exports = env;
