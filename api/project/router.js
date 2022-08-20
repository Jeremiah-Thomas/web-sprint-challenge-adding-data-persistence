// build your `/api/projects` router here
const express = require("express");
const helpers = require("./model");
const { validateProject } = require("./middleware");

const router = express.Router();

router.post("/", validateProject, (req, res) => {
  helpers
    .createProject(req.body)
    .then((project) => res.status(201).json(project));
});

router.get("/", (req, res) => {
  helpers.getProjects().then((projects) => {
    res.json(projects);
  });
});

module.exports = router;
