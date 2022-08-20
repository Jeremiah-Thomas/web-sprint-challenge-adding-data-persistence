const validateProject = (req, res, next) => {
  if (req.body.project_name == null) {
    res.status(400).json({ message: "project_name is required" });
  } else {
    next();
  }
};

module.exports = { validateProject };
