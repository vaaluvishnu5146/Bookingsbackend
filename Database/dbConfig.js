const mongoose = require("mongoose");
const BASE_URL = "mongodb://localhost:27017/";
const DATABASE_NAME = "Bookudu";

mongoose
  .connect(`${BASE_URL}${DATABASE_NAME}`)
  .then((response) => {
    if (response) {
      console.log("DATABASE CONNECTION SUCCESSFULL");
    } else {
      console.log("SOMETHING WENT WRONG");
    }
  })
  .catch((err) => {
    if (err) {
      console.log("ERROR CONNECT DATABASE", err);
    } else {
      console.log("SOMETHING WENT WRONG");
    }
  });
