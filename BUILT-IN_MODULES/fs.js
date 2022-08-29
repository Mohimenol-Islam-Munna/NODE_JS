const fs = require("fs");

fs.rename("after.json", "before.json", (err, data) => {
  if (err) {
    console.log("error to reaname file", err);
  }

  console.log("fire reaname successfull");
});
