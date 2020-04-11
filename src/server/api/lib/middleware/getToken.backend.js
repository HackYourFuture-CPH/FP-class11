const getAuthToken = (req, res, next) => {
  if (req.headers.authorization) {
    const [Bearer, token] = req.headers.authorization.split(' ');
    req.token = Bearer === 'Bearer' && typeof token === 'string' ? token : null;
  } else {
    req.token = null;
  }
  next();
};

module.exports = {
  getAuthToken,
};
