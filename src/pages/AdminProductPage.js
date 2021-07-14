import ListProduct from "../components/ListProduct";
import SidebarMenu from "../components/SidebarMenu";

const AdminProductPage = {
async render() {
    return /*html*/ `
    <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      ${SidebarMenu.render()}
    </nav>

    <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">List Product</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary"><a href="/#/addproduct">Add product</a></button>
          </div>
        </div>
      </div>


      <div class="table-responsive" id="list-product">
        ${await ListProduct.render()}
      </div>
    </div>
  </div>
    `;
  },
async afterRender(){
  return `${await ListProduct.afterRender()}`;
}
};
export default AdminProductPage;
