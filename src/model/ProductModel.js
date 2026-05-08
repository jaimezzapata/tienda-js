import { createStorage } from "../utils/storage.js";
import { getStorage } from "../utils/storage.js";

let product_model = [];

export function getProducts(llave) {
  product_model = getStorage(llave);
  return product_model;
}

export function findProduct() {}

export function createProduct(producto) {
  product_model.push(producto);
  console.log(product_model);
  createStorage("productos", product_model);
}