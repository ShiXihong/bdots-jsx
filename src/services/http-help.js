/* eslint-disable no-use-before-define */
import fetch from 'isomorphic-fetch';
import config from '../../../bdots-web/src/config';


function headers(customHeaders = {}) {
  const headers = Object.assign({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }, customHeaders);

  return new Headers(headers);
}


function request(url, method = 'GET', headers = headers(), body = {}) {
  if (!url) { return; }

  url.substring(0, 1) === '/'
    ? url = `${config.BASE_API_URL}${url}`
    : `${config.BASE_API_URL}/${url}`;

  let requestInit = {
    method: method,
    headers: headers,
    mode: 'cors',
    cache: 'default',
    credentials: 'include'
  };

  if (method !== 'GET' && method !== 'HEAD'){
    requestInit = Object.assign({}, requestInit, { body: JSON.stringify(body) })
  }

  return new Request(url, requestInit)
}

function responseHandle(response) {
  if (!response.ok) {
    rejectHandle();
    return;
  }
  const contentType = response.headers.get('content-type');
  if (/json/.test(contentType)) {
    return response.json()
  }
}

function rejectHandle() {
  console.log('fail');
}

function queryString(params = {}) {
  //return `?${Object.keys(params).map(k => [k, params[k]].map(encodeURIComponent).join('=')).join('&')}`;
  return '';
}


function Get(requestPath, params = {}) {
  const sQuery = queryString(params),
    url = `${requestPath}${sQuery}`,
    oRequest = request(url, 'GET', headers());

  return new Promise(function (resolve, reject) {
    fetch(oRequest).then((response) => {
      resolve.call(this, responseHandle(response));
    }).catch((error) => {
      reject.call(this, rejectHandle(error));
    });
  })
}

function Post(requestPath, body = {}, params = {}) {
  const sQuery = queryString(params),
    url = `${requestPath}${sQuery}`,
    oRequest = request(url, 'POST', headers(), body);

  return new Promise(function (resolve, reject) {
    fetch(oRequest).then((response) => {
      resolve.call(this, responseHandle(response));
    }).catch((error) => {
      reject.call(this, rejectHandle(error));
    });
  })
}


function Put(requestPath, params = {}, body = {}) {
  const queryString = queryString(params),
    url = `${requestPath}${queryString}`,
    request = request(url, 'PUT', headers(), body);

  return fetch(request).then((response) => {
    responseHandle(response);
  })
}

function Delete(requestPath, params = {}, body = {}) {
  const queryString = queryString(params),
    url = `${requestPath}${queryString}`,
    request = request(url, 'DELETE', headers(), body);

  return fetch(request).then((response) => {
    responseHandle(response);
  })
}

export {
  Get,
  Post,
  Put,
  Delete
}
