const EventEmitter = require("events");

const emitter = new EventEmitter();

// register event
emitter.on("myEvent", () => {
  console.log("My event happend");
});

// raise/occoure event
emitter.emit("myEvent");

// pass argument when event raise
emitter.on("eventWithArgument", (myArg) => {
  console.log("eventWithArgument ::", myArg);
});

// raise/occure event
emitter.emit("eventWithArgument", "my argument for event");

// multiple arguments pass when event raise
// if we need to pass multiple arguments then best practice is to pass object
emitter.on("eventWithMultipleArg", ({ name, campus }) => {
  console.log(`${name} completed graduation from ${campus}`);
});

// raise event
emitter.emit("eventWithMultipleArg", { name: "munna", campus: "PUST" });

// register player event
emitter.on("playerEvent", ({ name, club }) => {
  console.log(`${name} play at ${club}`);
});

module.exports = emitter
