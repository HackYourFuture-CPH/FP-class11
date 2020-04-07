const getAuthToken = (req, res, next) => {
  if (req.headers.authorization) {
    req.token = req.headers.authorization;
  } else {
    req.token = null;
  }
  next();
};

module.exports = {
  getAuthToken,
};
