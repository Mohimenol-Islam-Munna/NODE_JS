const path = require("path");

const myPath = __dirname + __filename;

const baseName = path.basename(myPath);
console.log("baseName ::", baseName);

const ext = path.extname(myPath);
console.log("baseName ::", ext);

const parse = path.parse(myPath);
console.log("parse ::", parse);
