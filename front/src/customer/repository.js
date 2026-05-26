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

function createCustomerRepository(configOrKnex) {
  let knex;

  if (configOrKnex && configOrKnex.client) {
    knex = knexInitializer(configOrKnex);
  } else {
    knex = configOrKnex.default ? configOrKnex.default : configOrKnex;
  }
  const distance = async () => {
    const result = await knex("distance").sum("run_distance as distance");
    return result;
  };

  const upload = async (data) => {
    console.log("データだよ", data);
    const result = await knex("distance")
      .insert({ id: 1, ...data })
      .returning("*");
    return result;
  };

  return { distance, upload };
}

export { createCustomerRepository };
