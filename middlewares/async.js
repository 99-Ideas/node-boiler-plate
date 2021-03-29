/**
 * Async error handler middler to be used with all router handlers
 * @param {express.Router} routeHandler
 * @returns exception if occured
 */

module.exports = function (routeHandler) {
  return async (req, res, next) => {
    try {
      await routeHandler(req, res);
    } catch (ex) {
      next(ex);
    }
  };
};
