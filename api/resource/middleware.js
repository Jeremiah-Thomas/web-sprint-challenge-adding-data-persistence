const validateResource = (req, res, next) => {
  if (req.body.resource_name == null) {
    res.status(400).json({ message: "resource_name required" });
  } else {
    next();
  }
};

module.exports = { validateResource };
