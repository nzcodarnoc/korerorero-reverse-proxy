const dotenv = require("dotenv");
const envalid = require("envalid");
const { port, url } = envalid;
dotenv.config();

const env = envalid.cleanEnv(process.env, {
  PORT: port(),
  ORCHESTRATION: url(),
  FRONT_END: url(),
  RECOGNIZER: url(),
});

module.exports = env;
