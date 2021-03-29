const express = require("express");
const app = express();

// middlewares
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is node-bloiler-plate code");
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`=> Server started on ${port}`);
});
