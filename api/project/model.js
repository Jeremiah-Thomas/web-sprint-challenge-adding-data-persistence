// build your `Project` model here
const e = require("express");
const db = require("../../data/dbConfig");

const getProjects = async () => {
  const projects = await db("projects");

  projects.forEach((project) => {
    if (project.project_completed === 0) {
      project.project_completed = false;
    } else if (project.project_completed === 1) {
      project.project_completed = true;
    }
  });

  return projects;
};

const createProject = async (project) => {
  const [project_id] = await db("projects").insert(project);
  const [newProject] = await db("projects").where("project_id", project_id);
  if (newProject.project_completed === 0) {
    newProject.project_completed = false;
  } else if (newProject.project_completed === 1) {
    newProject.project_completed = true;
  }

  return newProject;
};

module.exports = { getProjects, createProject };
