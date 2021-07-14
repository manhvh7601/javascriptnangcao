import categoryAPI from "../api/categoryAPI.js";
import { $, reRender } from "../ultis.js";
import ListCategory from "../components/ListCategory.js";

const CateAddPage = {
  render() {
    return /*html*/ `
            <div class="">
              <h3>NEW CATEGORY</h3>
              <form id="form-add" name="myform" method="post">
                  <div class="form-group">
                      <input type="text" placeholder="Tên danh mục" id="cate-name" class="form-control" name="nameCategory"/>
                  </div>
                  <div class="form-group">
                      <input type="submit" class="btn btn-primary" value="ADD CATEGORY">
                  </div>    
              </form>
            </div>
        `;
  },
  afterRender() {
    $("#form-add").addEventListener("submit", (e) => {
      e.preventDefault();
      let x = document.forms["myform"]["nameCategory"].value;
      if (x == null || x == "") {
        alert("Chua nhap ten danh muc");
        return false;
      } else {
        const category = {
          id: Math.random().toString(36).substr(2, 9),
          // categoryID: $("#category-category-id").value,
          name: $("#cate-name").value,
        };
        console.log(category);
        categoryAPI.add(category);
        reRender(ListCategory, "#list-category");
        window.location.hash = "/listcategory";
      }
    });
  },
};
export default CateAddPage;
