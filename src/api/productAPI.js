import {axiosCient} from './axiosCient';

const ProductAPI = {
    getAll(){
        const url = `/product`;
        return axiosCient.get(url);
    },
    get(id){
        const url = `/product/${id}`;
        return axiosCient.get(url);
    },
    add(product){
        const url = `/product`;
        return axiosCient.post(url,product);
    },
    remove(id){
        const url = `/product/${id}`;
        return axiosCient.delete(url);
    },
    update(id,data){
        const url = `/product/${id}`;
        return axiosCient.put(url,data);
    }
    
}
export default ProductAPI;