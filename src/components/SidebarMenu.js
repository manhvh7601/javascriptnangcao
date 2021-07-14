const SidebarMenu = {
  render() {
      return /*html*/`
      <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/#/admin" style="color: black";>
            <span data-feather="home"></span>
            Dashboard
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#/listproduct" style="color: black";>
            <span data-feather="file"></span>
            List Product
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#/listcategory" style="color: black";>
            <span data-feather="file"></span>
            List Category
          </a>
        </li>
      </ul>
    </div>`
  }
}
export default SidebarMenu;