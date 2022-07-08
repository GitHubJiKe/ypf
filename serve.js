const esbuild = require("esbuild")
const { buildConfig } = require("./build")

esbuild
    .serve({ port: 9000, host: "localhost", servedir: "./dist" }, buildConfig)
    .then(() => console.log('http://localhost:9000'))
    .catch(err => console.error(err))