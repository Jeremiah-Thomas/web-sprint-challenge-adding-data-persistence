// build your `/api/resources` router here
const express = require("express");
const helpers = require("./model");

const router = express.Router();

router.post("/", (req, res) => {
  helpers.createResource(req.body).then((resource) => {
    res.status(201).json(resource);
  });
});

router.get("/", (req, res) => {
  helpers.getResources().then((resources) => {
    res.json(resources);
  });
});

module.exports = router;
