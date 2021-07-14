//Khởi tạo
import Error404Page from "./pages/Err404.js";
import HomePage from "./pages/HomePage.js";
import ProductsPage from "./pages/ProductPage.js";
import ProductDetail from "./pages/ProductsDetail.js";
import { ParseRequestUrl, $ } from "./ultis.js";
import Header from "./components/header.js";
import CategoryPage from "./pages/CategoryPage.js";
import ProductAddPage from "./pages/ProductAddPage.js";
import AdminProductPage from "./pages/AdminProductPage.js";
import ProductEditPage from "./pages/ProductEditPage.js";
import AdminPage from "./pages/AdminPage.js";
import CateEditPage from "./pages/CateEditPage.js";
import CateAddPage from "./pages/CateAddPage.js";
import AdminCatePage from "./pages/AdminCatePage.js";
import AboutPage from './pages/AboutPage.js';
import ContactPage from "./pages/ContactPage.js";
import LoginPage from "./pages/LoginPage.js";




const routes = {
  '/': HomePage,
  '/product': ProductsPage,
  '/product/:id': ProductDetail,
  '/category/:id': CategoryPage,

  '/addproduct': ProductAddPage,
  '/listproduct': AdminProductPage,
  '/editproduct/:id': ProductEditPage,

  '/listcategory': AdminCatePage,
  '/editcategory/:id': CateEditPage,
  '/addcategory': CateAddPage,

  '/admin': AdminPage,
  '/about': AboutPage,
  '/contact': ContactPage,
  '/login' :LoginPage
}

//khởi tạo hàm router
const router = async () => {
  const { resource , id } = ParseRequestUrl();
  const parseUrl = (resource ? `/${resource}` : '/') + (id ? `/:id` : '');
  // console.log(parseUrl);
  const page = routes[parseUrl] ? routes[parseUrl] : Error404Page;
  $('#header').innerHTML = await Header.render();

  $("#main-content").innerHTML = await page.render();
  await page.afterRender();
};

window.addEventListener("DOMContentLoaded", router);
window.addEventListener("hashchange", router);