import { createProduct, getProducts } from "../model/ProductModel.js";

let btn_guardar_producto = document.querySelector("#btn_guardar_producto");
if (btn_guardar_producto) {
  btn_guardar_producto.addEventListener("click", function () {
    let id = document.querySelector("#id").value;
    let creadoEn = document.querySelector("#creadoEn").value;
    let nombre = document.querySelector("#nombre").value;
    let descripcion = document.querySelector("#descripcion").value;
    let precio = document.querySelector("#precio").value;
    let stock = document.querySelector("#stock").value;
    let imagen = document.querySelector("#imagen").value;
    let producto = { id, creadoEn, nombre, descripcion, precio, stock, imagen };
    createProduct(producto);
    // let producto = {
    //   id: id,
    //   creadoEn: creadoEn,
    //   nombre: nombre,
    //   descripcion: descripcion,
    //   precio: precio,
    //   stock: stock,
    //   imagen: imagen,
    // };
  });
}

let productos = getProducts("productos");
let elementos = document.querySelector("#elementos");
if (elementos) {
  let rowProduct = "";
  productos.forEach((index) => {
    rowProduct.innerHTML += `
        <tr class="hover:bg-slate-50">
          <td class="px-5 py-4 font-mono text-xs text-slate-600">1</td>
          <td class="px-5 py-4 font-semibold">Arroz blanco 1kg</td>
          <td class="px-5 py-4 text-slate-700">Arroz de grano largo, primera calidad</td>
          <td class="px-5 py-4">$3,500</td>
          <td class="px-5 py-4">100</td>
          <td class="px-5 py-4 font-mono text-xs text-slate-600">assets/img/arroz.png</td>
          <td class="px-5 py-4">
            <span class="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">true</span>
          </td>
          <td class="px-5 py-4 text-slate-700">2025-01-01</td>
        </tr>
  `;
  });
  elementos.innerHTML = rowProduct;
}
