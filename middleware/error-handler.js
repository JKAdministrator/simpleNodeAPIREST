const { CustomAPIError } = require("../errors/custom");
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log("errorHandlerMiddleware");
  if (err instanceof CustomAPIError) {
    console.log("error is CustomAPIError returning ", { err });
    return res.status(err.status).json({ msg: err.message });
  }
  return res.status(500).json({ msg: "Something went wrong, try again later" });
};
module.exports = errorHandlerMiddleware;
