// build your `/api/tasks` router here
const express = require("express");
const helpers = require("./model");
const { validateTask, validateId } = require("./middleware");

const router = express.Router();

router.post("/", validateTask, validateId, (req, res) => {
  helpers.createTask(req.body).then((task) => res.status(201).json(task));
});

router.get("/", (req, res) => {
  helpers.getTasks().then((tasks) => {
    res.json(tasks);
  });
});

module.exports = router;
