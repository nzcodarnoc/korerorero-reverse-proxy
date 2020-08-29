const app = require('./app.js');
const env = require("./env")

require('greenlock-express')
    .init({
        packageRoot: __dirname,

        // contact for security and critical bug notices
        maintainerEmail: env.MAINTAINER_EMAIL,

        // where to look for configuration
        configDir: './greenlock.d',

        // whether or not to run at cloudscale
        cluster: false
    })
    // Serves on 80 and 443
    // Get's SSL certificates magically!
    .serve(app);
