const notFound = (err, req, res, next) => {
  console.log("Not found middleware");
  return res.status(404).send("Route does not exist");
};

module.exports = notFound;
