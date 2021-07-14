import ProductAPI from "../api/productAPI.js";
import CategoryAPI from "../api/categoryAPI.js";
import { $ , reRender } from "../ultis.js";
import firebase from "../firebase";
import ListProduct from "../components/ListProduct";


const ProductAddPage = {
  async render() {
    const { data:categories } = await CategoryAPI.getAll();
    return /*html*/ `
            <form id="form-add" name="myForm" method="post">
            <div class="form-group">
                <input type="text" placeholder="Tên sản phẩm" id="product-name" name="prdName" class="form-control"/>
            </div>
            <div id="form-group">
              <select id="product-cate" name="form-control" class="form-control">
                  ${categories.map((categories) => {
                    return `<option  value="${categories.id}">${categories.name}</option>`;
                  })}
              </select>
            </div>
            <div class="form-group">
                
                <input type="file" id="product-image" name="prdImg" class="form-control"/>
            </div>
            <div class="form-group">
                <input type="number" placeholder="Giá sản phẩm" id="product-price" name="prdPrice" class="form-control"/>
            </div>
            <div class="form-group">
                <input type="text" placeholder="Trạng thái" id="product-status" name="prdStatus" class="form-control"/>
            </div>
            <div class="form-group">
                <input type="text" placeholder="Miêu tả" id="product-description" name="prdDesc" class="form-control"/>
            </div>
            <div class="form-group">
            <input type="submit" class="btn btn-primary" value="ADD PRODUCT">
            </div>    
            </form>
        `     
  },
  afterRender() {
    $("#form-add").addEventListener("submit", (e) => {
      e.preventDefault();
      let prdName = document.forms["myForm"]["prdName"].value;
      let prdImg = document.forms["myForm"]["prdImg"].value;
      let prdPrice = document.forms["myForm"]["prdPrice"].value;
      let prdStatus = document.forms["myForm"]["prdStatus"].value;
      let prdDesc = document.forms["myForm"]["prdDesc"].value;

      if(prdName == null || prdName == ''){
        alert('Chua nhap ten san pham');
        return false;
      }else if(prdImg == null || prdImg == ''){
        alert('Chua chon anh');
        return false;
      }else if(prdPrice == null || prdPrice == '' || prdPrice < 0){
        alert('Chua nhap gia va gia khong duoc am');
        return false;
      }else if(prdStatus == null || prdStatus == ''){
        alert('Chua nhap trang thai');
        return false;
      }else if(prdDesc == null || prdDesc == ''){
        alert('Chua nhap mieu ta');
        return false;
      }else{
      const productImage = $("#product-image").files[0];
      let stogareRef = firebase.storage().ref(`images/${productImage.name}`);
      stogareRef.put(productImage).then(function () {      
        stogareRef.getDownloadURL().then((url) => {
          const product = {
            id: Math.random().toString(36).substr(2, 9),
            // categoryID: $("#product-category-id").value,
            name: $("#product-name").value,
            image: url,
            categoryID: $('#product-cate').value,
            price: $("#product-price").value,
            status: $("#product-status").value,
            description: $("#product-description").value,
          };
          console.log(product);
          ProductAPI.add(product);
          reRender(ListProduct, "#list-products");
          window.location.hash = "/listproduct";
          })
        })
      }
    })
  }
}

export default ProductAddPage;
