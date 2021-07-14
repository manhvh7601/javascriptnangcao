import {axiosCient} from './axiosCient';

const CategoryAPI = {
    getAll(){
        const url = `/categories`;
        return axiosCient.get(url);
    },
    get(id){
        const url = `/categories/${id}`;
        return axiosCient.get(url);
    },
    add(cate){
        const url = `/categories`;
        return axiosCient.post(url,cate);
    },
    remove(id){
        const url = `/categories/${id}`;
        return axiosCient.delete(url);
    },
    update(id,data){
        const url = `/categories/${id}`;
        return axiosCient.put(url,data);
    }
    
}
export default CategoryAPI;