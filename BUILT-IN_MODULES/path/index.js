const path = require("path");

// console.dir(path)

const myPath = __filename;
console.log(myPath);

// 1. path.basename
const baseName1 = path.basename(myPath);
const baseName2 = path.basename(myPath, ".js");

// console.log("baseName1 ::", baseName1);
// console.log("baseName2 ::", baseName2);

// 2. path.delimiter
const delimiter = path.delimiter;
// console.log(delimiter)

// 3. path.dirname
const dirName = path.dirname(myPath);
// console.log("dirName :", dirName)
// console.log(__dirname)

// 4. path.extname
const ext = path.extname(myPath);
// console.log("ext ::", ext);

// 5. path.parse
const parse = path.parse(myPath);
// console.log("parse ::", parse);

// 6. path.format
const format = path.format(parse);
// console.log("format :", format);

// 7. path.isAbsolute
const isAbsolute = path.isAbsolute(myPath);
// console.log("isAbsolute :", isAbsolute)

// 8. path.join
const pathString = path.join(__dirname, "m", "n", "n", "a.txt");
// console.log("pathString :", pathString);

// 9. path.normalize
const normalize = path.normalize("/foo/bar//baz/asdf/g/.../hj?kl=10");
// console.log("normalize :", normalize);

// 10. path.posix
const posix = path.posix;
// console.log("posix :", posix)

// 11. path.relative
const relative = path.relative("/data/orandea/test/aaa", "/data/k/impl/bbb");
// console.log("relative :", relative);

// 12. path.resolve
const resolve = path.resolve("/foo", "/bar", "baz");
console.log("resolve :", resolve);

// 13. path.sep
const sep = path.sep;
// console.log("separator :", sep)

// 14. path.sep
const toNamespacedPath = path.toNamespacedPath(myPath);
// console.log("toNamespacedPath :", toNamespacedPath)

// 15. path.sep
const win32 = path.win32;
// console.log("win32 :", win32)
