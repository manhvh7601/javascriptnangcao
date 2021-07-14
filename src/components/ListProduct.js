import ProductAPI from "../api/productAPI";
import { $, reRender } from "../ultis.js";

const ListProduct = {
  async render() {
    const { data: products } = await ProductAPI.getAll();
    return /*html*/ `
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
              <th>Status</th>
              <th>Description</th>
              <th><a href="/#/addproduct" style="text-decoration: none">ADD Product</a></th>
            </tr>
          </thead>
          <tbody>
          ${products
            .map((product, index) => {
              return /*html*/ `<tr>
              <td>${index}</td>
              <td>${product.name}</td>
              <td>${product.price}</td>
              <td><img src="${product.image}" width="50px" height="50px" /></td>
              <td>${product.status ? "Còn hàng" : "Hết Hàng"}</td>
              <td>${product.description}</td>
              <td>
              <a href="/#/editproduct/${
                product.id
              }" class="btn btn-outline-primary">Update</a>
              <button class="btn btn-outline-danger btn-remove" data-id="${
                product.id
              }">Remove</button>
              </td>
            </tr>`;
            })
            .join("")}
          </tbody>
        </table>
        `;
  },
  async afterRender() {
    const btns = $("#list-product .btn");
    // console.log(btns);

    btns.forEach((btn) => {
      let id = btn.dataset.id;
      btn.addEventListener("click", async function () {
        if (btn.classList.contains("btn-remove")) {
            const question = confirm("Are you sure?");
            if (question) {
              await ProductAPI.remove(id);
              await reRender(ListProduct, "#list-product");
            }
        }
      });
    });
  },
};
export default ListProduct;
