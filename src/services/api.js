import * as HttpHelp from './http-help';


function register(data) {
    return HttpHelp.Post('/user', data);
}

function login(data) {
    return HttpHelp.Post('/oauth', data);
}

function getSession() {
    return HttpHelp.Post('/getSession', {});
}
export {
    register,
    login,
    getSession
}