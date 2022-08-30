const emitter = require("./Events.js");

// console.log("player name :", emitter)

emitter.emit("playerEvent", { name: "messi", club: "PSG" });
