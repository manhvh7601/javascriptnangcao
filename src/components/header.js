import CategoryAPI from "../api/categoryAPI";

const Header = {
  async render() {
    const { data: categories } = await CategoryAPI.getAll();
    return /*html*/ `

    <div class="main-header ">
    <div class="header-top ">
    <div class="container">
    <div class="row">
    <div class="col-xl-12">
    <div class="d-flex justify-content-between align-items-center flex-sm">
    <div class="header-info-left d-flex align-items-center">
    
    <div class="logo">
    <a href="index-2.html"><img src="assets/img/logo/logo.png" alt=""></a>
    </div>
    <form action="#" class="form-box">
    <input type="text" name="Search" placeholder="Search book by author or publisher">
    <div class="search-icon">
    <i class="ti-search"></i>
    </div>
    </form>
    </div>
    <div class="header-info-right d-flex align-items-center">
    <ul>
    <li><a href="#">FAQ</a></li>
    <li><a href="#">Track Order</a></li>
    <li class="shopping-card">
    <a href="cart.html"><img src="assets/img/icon/cart.svg" alt=""></a>
    </li>
    <li><a href="/#/login/" class="btn header-btn">Sign in</a></li>
    </ul>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div class="header-bottom  header-sticky">
    <div class="container">
    <div class="row align-items-center">
    <div class="col-xl-12">
    
    <div class="logo2">
    <a href="index-2.html"><img src="assets/img/logo/logo.png" alt=""></a>
    </div>
    
    <div class="main-menu text-center d-none d-lg-block">
    <nav>
    <ul id="navigation">
    <li><a href="/">Home</a></li>
    <li><a href="/#/product">Product</a></li>
    <li><a href="">Category</a>
    <ul class="submenu">
    ${categories.map((category) => {
      return `<li><a style="text-decoration: none" class="p-2 text-dark" href="/#/category/${category.id}">${category.name}</a></li>`;
    })}
    </ul>
    </li>
    <li><a href="/#/about">About</a></li>
    <li><a href="/#/contact">Contact</a></li>
    <li><a href="/#/admin">Admin</a></li>
    </ul>
    </nav>
    </div>
    </div>
    
    <div class="col-xl-12">
    <div class="mobile_menu d-block d-lg-none"><div class="slicknav_menu"><a href="#" aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed" style="outline: none;"><span class="slicknav_menutxt">MENU</span><span class="slicknav_icon"><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span></span></a><ul class="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style="display: none;">
    <li><a href="index-2.html" role="menuitem" tabindex="-1">Home</a></li>
    <li><a href="categories.html" role="menuitem" tabindex="-1">Categories</a></li>
    <li><a href="about.html" role="menuitem" tabindex="-1">About</a></li>
    <li class="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row" style="outline: none;"><a href="#" tabindex="-1">Pages</a>
    <span class="slicknav_arrow">+</span></a><ul class="submenu slicknav_hidden" role="menu" aria-hidden="true" style="display: none;">
    <li><a href="login.html" role="menuitem" tabindex="-1">login</a></li>
    <li><a href="cart.html" role="menuitem" tabindex="-1">Cart</a></li>
    <li><a href="checkout.html" role="menuitem" tabindex="-1">Checkout</a></li>
    <li><a href="book-details.html" role="menuitem" tabindex="-1">book Details</a></li>
    <li><a href="blog_details.html" role="menuitem" tabindex="-1">Blog Details</a></li>
    <li><a href="elements.html" role="menuitem" tabindex="-1">Element</a></li>
    </ul>
    </li>
    <li><a href="blog.html" role="menuitem" tabindex="-1">Blog</a></li>
    <li><a href="contact.html" role="menuitem" tabindex="-1">Contect</a></li>
    </ul></div></div>
    </div>
    </div>
    </div>
    </div>
    </div>`;
  },
};
export default Header;
