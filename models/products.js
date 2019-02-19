const products = require('../data/products');

const getProducts = () => products;
const getProductById = (id) => products.find((product) => product.id === id);

export { getProducts, getProductById };