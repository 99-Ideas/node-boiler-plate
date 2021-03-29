const express = require("express");
const app = express();

// middlewares
app.use(express.json());

require("./startups/logging")(); // log error and exceptions
require("./startups/routes")(app); // handle all routes

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`=> Server started on ${port}`);
});
