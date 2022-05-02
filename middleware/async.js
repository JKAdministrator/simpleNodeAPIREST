const asyncWrapper = (fn) => {
  console.log("executing async wrapper");
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (e) {
      console.log("async wrapper catch");
      next(e);
    }
  };
};
module.exports = asyncWrapper;
