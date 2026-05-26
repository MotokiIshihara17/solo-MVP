/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("distance", function (table) {
    table.integer("id").references("user_data.id").onDelete("CASCADE");
    table.decimal("run_distance", 6, 1);
    table.date("run_date");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("distance");
};
