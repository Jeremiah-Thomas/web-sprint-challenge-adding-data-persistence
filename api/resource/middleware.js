const resources = require("./model");

const validateResource = (req, res, next) => {
  if (req.body.resource_name == null) {
    res.status(400).json({ message: "resource_name required" });
  } else {
    next();
  }
};

const confirmUnique = (req, res, next) => {
  resources.getResources().then((resources) => {
    const match = resources.filter((resource) => {
      return resource.resource_name === req.body.resource_name;
    });
    if (match.length > 0) {
      res.status(400).json({
        message: `a resource with name: ${req.body.resource_name} already exists`,
      });
    } else {
      next();
    }
  });
};
module.exports = { validateResource, confirmUnique };
