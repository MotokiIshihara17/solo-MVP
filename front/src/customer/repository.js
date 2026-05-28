// function createCustomerRepository(rawKnex, table = "distance") {
//   /**
//    * @param {number} limit - 顧客データの最大数（制限）
//    * @return {Promise<Array>} - すべての顧客データ
//    */

//   const knex = rawKnex.defalut ? rawKnex.defalut : rawKnex;

//   const list = async (limit = 100) =>
//     await knex(table).sum("run_distance as distance");

//   const distance = async () => {
//     return await knex(table).sum("run_distance as distance");
//   };

//   return { distance };
// }

// export { createCustomerRepository };

import knexInitializer from "knex";

const startDate = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
const endDate = new Date(
  new Date().getFullYear(),
  new Date().getMonth() + 1,
  0,
  23,
  59,
  59,
  999,
);

function createCustomerRepository(configOrKnex) {
  let knex;

  if (configOrKnex && configOrKnex.client) {
    knex = knexInitializer(configOrKnex);
  } else {
    knex = configOrKnex.default ? configOrKnex.default : configOrKnex;
  }
  const distance = async (userId) => {
    const result = await knex("distance")
      .where("id", userId)
      .whereBetween("run_date", [startDate, endDate])
      .sum("run_distance as distance");
    return result;
  };

  const upload = async (data) => {
    console.log("データだよ", data);
    const result = await knex("distance").insert(data).returning("*");
    return result;
  };

  const create = async (data) => {
    console.log("データだよ", data);
    const result = await knex("user_data").insert(data).returning("*");
    console.log("データお返しします", result);
    return result;
  };

  const user = async () => {
    const result = await knex.select().from("user_data");
    return result;
  };

  const rest = async (userId) => {
    const result = await knex("distance")
      .where("id", userId)
      .whereBetween("run_date", [startDate, endDate])
      .sum("run_distance as distance");
    return result;
  };

  return { distance, upload, create, user, rest };
}

export { createCustomerRepository };
