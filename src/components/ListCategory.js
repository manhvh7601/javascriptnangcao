import categoryAPI from "../api/categoryAPI";
import { $, reRender } from "../ultis.js";

const ListCategory = {
  async render() {
    const { data: categories } = await categoryAPI.getAll();
    return /*html*/ `
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          ${categories
            .map((cate, index) => {
              return /*html*/ `<tr>
              <td>${index}</td>
              <td>${cate.name}</td>
              <td>
              <a href="/#/editcategory/${cate.id}" class="btn btn-outline-primary">Update</a>
              <button class="btn btn-outline-danger btn-remove" data-id="${cate.id}">Remove</button>
              </td>
            </tr>`;
            })
            .join("")}
          </tbody>
        </table>
        `;
  },
  async afterRender() {
    const btns = $("#list-category .btn");
    console.log(btns);
    btns.forEach((btn) => {
      let id = btn.dataset.id;
      btn.addEventListener("click", async function () {
        if (btn.classList.contains("btn-remove")) {
          const question = confirm("Are you sure?");
          if (question) {
            await categoryAPI.remove(id);
            await reRender(ListCategory, "#list-category");
          }
        }
      });
    });
  },
};
export default ListCategory;
