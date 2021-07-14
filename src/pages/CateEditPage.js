import categoryAPI from "../api/categoryAPI";
import { ParseRequestUrl , $ , reRender } from "../ultis";

const CateEditPage = {
    
    async render(){
        const {id} = ParseRequestUrl();
        const { data : cate } = await categoryAPI.get(id);
        return /*html*/ `
        <form id="form-update-product">
        <div class="mb-3">
            <label for="product-name" class="form-label">Tên sản phẩm</label>
            <input type="text" class="form-control" id="cate-name" value="${cate.name}">
        </div>
        <button type="submit" class="btn btn-primary">Update</button>
</form>
        `
    },
    async afterRender(){
        const {id} = ParseRequestUrl();
        const { data : product } = await categoryAPI.get(id);
        $('#form-update-product').addEventListener('submit',e => {
            e.preventDefault();
            console.log('old', product)
            const newProduct = {
                ...product,
                name: $('#cate-name').value,
            }
            categoryAPI.update(id,newProduct);
            window.location.hash = '/listcategory';
        });
    }
}
export default CateEditPage;