const connection = require("../connection/conn");

module.exports = {
  getProducts: async () => {
    const query = "SELECT * FROM _products p ORDER BY id";
    const [values] = await connection.promise().query(query);
    return values;
  },

  getProductById: async (id) => {
    const query = `SELECT * FROM _products p WHERE id='${id}'`;
    const [values] = await connection.promise().query(query);
    return values;
  },
};
