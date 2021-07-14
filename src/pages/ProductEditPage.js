import ProductAPI from "../api/productAPI";
import { ParseRequestUrl , $ , reRender } from "../ultis";
import CategoryAPI from "../api/categoryAPI";

const ProductEditPage = {
    
    async render(){
        const {id} = ParseRequestUrl();
        const { data : product } = await ProductAPI.get(id);
        const { data:categories } = await CategoryAPI.getAll();
        return /*html*/ `
        <form id="form-update-product">
        <div class="mb-3">
            <label for="product-name" class="form-label">Tên sản phẩm</label>
            <input type="text" class="form-control" id="product-name" value="${product.name}">
        </div>
        <div id="form-group">
              <label for="product-name" class="form-label">Danh mục</label>
              <select id="product-cate" name="form-control">
                  ${categories.map((categories) => {
                    return `<option  value="${categories.id}">${categories.name}</option>`;
                  })}
              </select>
        </div>
        <div class="mb-3">
            <label for="product-image" class="form-label">Ảnh sản phẩm</label>
            <input type="file" class="form-control" id="product-image" value="${product.image}">
        </div>
        <div class="mb-3">
            <label for="product-price" class="form-label">Giá sản phẩm</label>
            <input type="number" class="form-control" id="product-price" value="${product.price}">
        </div>
        <div class="mb-3">
            <label for="product-status" class="form-label">Trạng thái</label>
            <input type="text" class="form-control" id="product-status" value="${product.status}">
        </div>
        <div class="mb-3">
            <label for="product-description" class="form-label">Miêu tả</label>
            <input type="text" class="form-control" id="product-description" value="${product.description}">
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
</form>
        `
    },
    async afterRender(){
        const {id} = ParseRequestUrl();
        const { data : product } = await ProductAPI.get(id);
        $('#form-update-product').addEventListener('submit',e => {
            e.preventDefault();
            console.log('old', product)
            const newProduct = {
                ...product,
                name: $('#product-name').value,
                categoryID: $('#product-cate').value,
                price: $('#product-price').value,
                status: $('#product-status').value,
                description: $('#product-description').value,

            }
            ProductAPI.update(id,newProduct);
            window.location.hash = '/listproduct';
        });
    }
}
export default ProductEditPage;