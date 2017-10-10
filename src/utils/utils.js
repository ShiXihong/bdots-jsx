'use strict';

function queryString(name, url = window.location.href) {
    name = name.replace(/[[]]/g, "\\$&");

    const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
    const results = regex.exec(url);

    if (!results) {
        return null;
    }
    if (!results[2]) {
        return '';
    }

    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function getUserLanguage() {
    const lang = window.navigator.language;

    return {
        local: 'zh',
        lang: 'zh-CN'
    }
}

export {
    queryString,
    getUserLanguage
}