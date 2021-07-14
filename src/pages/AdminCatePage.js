import ListCategory from "../components/ListCategory";
import SidebarMenu from "../components/SidebarMenu";

const AdminCatePage = {
async render() {
    return /*html*/ `
    <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      ${SidebarMenu.render()}
    </nav>

    <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">List Category</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary"><a href="/#/addcategory">Add Category</a></button>
          </div>
        </div>
      </div>


      <div class="table-responsive" id="list-category">
        ${await ListCategory.render()}
      </div>
    </div>
  </div>
    `;
  },
async afterRender(){
  return `${await ListCategory.afterRender()}`;
}
};
export default AdminCatePage;
