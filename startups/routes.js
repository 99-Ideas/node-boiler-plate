const asyncMiddleware = require("./middlewares/async");
const error = require("./middlewares/error");

module.exports = function (app) {
  app.get(
    "/",
    asyncMiddleware(async (req, res) => {
      res.send("This is node-bloiler-plate code");
    })
  );
  app.use(error);
};
