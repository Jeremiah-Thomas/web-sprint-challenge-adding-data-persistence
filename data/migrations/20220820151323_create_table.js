exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments("project_id");
      tbl.varchar("project_name", 100).notNullable();
      tbl.varchar("project_description");
      tbl.boolean("projects_completed").defaultTo(0);
    })
    .createTable("resources", (tbl) => {
      tbl.increments("resource_id");
      tbl.varchar("resource_name", 100).notNullable().unique();
      tbl.varchar("resource_description", 200);
    })
    .createTable("tasks", (tbl) => {
      tbl.increments("task_id");
      tbl.varchar("task_description", 200).notNullable();
      tbl.varchar("task_notes", 300);
      tbl.boolean("task_completed").defaultTo(0);
      tbl
        .integer("project_id")
        .references("project_id")
        .inTable("projects")
        .notNullable();
    })
    .createTable("project_resources", (tbl) => {
      tbl
        .integer("project_id")
        .references("project_id")
        .inTable("projects")
        .notNullable();
      tbl
        .integer("resource_id")
        .references("resource_id")
        .inTable("resources")
        .notNullable();
      tbl.primary(["project_id", "resource_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
