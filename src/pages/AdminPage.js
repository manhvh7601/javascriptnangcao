import SidebarMenu from "../components/SidebarMenu";

const AdminPage = {
async render() {
    return /*html*/ `
    <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      ${SidebarMenu.render()}
    </nav>

    <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
      </div>
      <div>TRANG QUẢN TRỊ</div>
    </div>
  </div>
    `;
  }

};
export default AdminPage;
