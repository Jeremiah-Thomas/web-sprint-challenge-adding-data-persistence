// build your `Resource` model here
const db = require("../../data/dbConfig");

const getResources = () => {
  return db("resources");
};

const createResource = async (resource) => {
  const [resource_id] = await db("resources").insert(resource);
  return getResources().where("resource_id", resource_id);
};

module.exports = {
  getResources,
  createResource,
};
