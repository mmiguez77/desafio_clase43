const { buildSchema } = require('graphql');
const ProductoModel = require('../models/productoSchema.js');
const logger = require('../helpers/winston.js');

const schema = buildSchema(`
  input ProductInput {
    title: String,
    price: Int,
    thumbnail: String
  },
  type Product {
    _id: ID,
    title: String,
    price: Int,
    thumbnail: String
  },
  type Query {
    getProducts: [Product]
  },
  type Mutation {
    createProduct(input: ProductInput): Product
  }
`);

const root = {
  getProducts: getProducts,
  createProduct: createProduct
};

async function getProducts() {
  try {
    const prodInDb = await ProductoModel.find();
    return prodInDb;
  } catch (error) {
    logger.error.error(error);
  }
}

async function createProduct({input}) {
  try {
    const newProd = await ProductoModel.create(input);
    return newProd;
  } catch (error) {
    logger.error.error(error);
  }
}


module.exports = { schema, root };