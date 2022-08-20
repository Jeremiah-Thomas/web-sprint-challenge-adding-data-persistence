// build your `Task` model here
const db = require("../../data/dbConfig");

const getTasks = async () => {
  const tasks = await db("tasks")
    .join("projects", "projects.project_id", "tasks.project_id")
    .select(
      "task_id",
      "task_description",
      "task_notes",
      "task_completed",
      "project_name",
      "project_description"
    );

  tasks.forEach((task) => {
    if (task.task_completed === 0) {
      task.task_completed = false;
    } else if (task.task_completed === 1) {
      task.task_completed = true;
    }
  });
  console.log(tasks);
  return tasks;
};

const createTask = async (task) => {
  const [task_id] = await db("tasks").insert(task);

  const [newTask] = await db("tasks").where("task_id", task_id);
  if (newTask.task_completed === 0) {
    newTask.task_completed = false;
  } else if (newTask.task_completed === 1) {
    newTask.task_completed = true;
  }
  return newTask;
};

module.exports = { getTasks, createTask };
