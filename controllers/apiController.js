const Product = require("../models/Product");
const response = require("../utils/response");
const stringSimilarity = require("string-similarity");

module.exports = {
  getStocks: async (req, res) => {
    try {
      const products = await Product.getProducts();

      const responseData = {
        products,
      };
      response.success(res, responseData);
    } catch (error) {
      console.log(error);
      response.failed();
    }
  },

  getDetails: async (req, res) => {
    try {
      const { id } = req.params;

      const products = await Product.getProducts();
      const productById = await Product.getProductById(id);

      const similarProduct = [];

      const query = productById[0].product_name.toLowerCase();

      products.forEach((product) => {
        const query2 = product.product_name.toLowerCase();
        const similarity =
          stringSimilarity.compareTwoStrings(query, query2) * 100;

        if (similarity !== 100) {
          similarProduct.push({
            product,
            similarity,
          });
        }
      });

      similarProduct.sort((a, b) => {
        return a.similarity < b.similarity ? 1 : -1;
      });

      const responseData = {
        product: productById[0],
        similarProduct,
      };
      response.success(res, responseData);
    } catch (error) {
      console.log(`Ada error : ${error}`);
    }
  },
};
