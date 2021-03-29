const express = require("express");
const error = require("./middlewares/error");
const app = express();

// middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is node-bloiler-plate code");
});

app.use(error);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`=> Server started on ${port}`);
});
