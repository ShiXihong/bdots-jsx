import data from './data'
import * as HttpHelp from './http-help';

const api = {
    getData() {
        return HttpHelp.Get('/user/59ae4233a2f2a00170d4934d');
    },

    submitData(data){
        return new Promise( resolve =>{
            setTimeout(() => resolve(data), 2000)
        })
    }
};

export default api;