const projects = require("../project/model");
const db = require("../../data/dbConfig");

const validateTask = (req, res, next) => {
  if (req.body.task_description == null || req.body.project_id == null) {
    res
      .status(400)
      .json({ message: "task_description and project_id are required" });
  } else {
    next();
  }
};

const validateId = async (req, res, next) => {
  const projectsList = await db("projects");

  const result = projectsList.filter((project) => {
    return project.project_id === parseInt(req.body.project_id);
  });

  if (result.length < 1) {
    res.status(404).json({
      message: `no project with id: ${req.body.project_id} was found`,
    });
  } else {
    next();
  }
};

module.exports = { validateTask, validateId };
