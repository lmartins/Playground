module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: __dirname + "/build/js/",
        filename: "bundle.js"
    }
    // module: {
    //     loaders: [
    //         { test: /\.css$/, loader: "style!css" }
    //     ]
    // }
};
