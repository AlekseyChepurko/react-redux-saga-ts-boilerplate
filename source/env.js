import axios from 'axios';

const serviceURLs = {
  GET_DATA: 'http://google.com',
  route_with_parameter: 'http://whatever/%parameter%/else',

};

export function readCookie(name) {
  if (typeof name === 'undefined') {
    return document.cookie;
  }
  const nameEQ = `${ name }=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

export function getURL(service) {
  return serviceURLs[service];
}

export function getGontentType(data) {
  return (typeof data === 'object') ? 'application/json' : 'application/xml';
}

export function replaceUrlPlaceholders(url, parameters) {
  let tmp = url;
  if (typeof parameters !== 'undefined') {
        for (const key in parameters) { // eslint-disable-line
          tmp = tmp.replace(`%${ key }%`, parameters[key]);
        }
  }
  return tmp;
}

export function getData(service, parameters) {
  const url = replaceUrlPlaceholders(getURL(service), parameters);
  const contentType = 'application/json';

  return axios.get(url, {
    headers: {
      Accept: contentType,
    },
  }).then((response) => response.data);
}

export function postData(service, data, parameters) {
  const url = replaceUrlPlaceholders(getURL(service), parameters);
  const contentType = getGontentType(data);

  return axios.post(url, data, {
    headers: {
      'Content-Type': contentType,
      Accept: contentType,
    },
  }).then((response) => response.data);
}

export function putData(service, data, parameters) {
  const url = replaceUrlPlaceholders(getURL(service), parameters);
  const contentType = getGontentType(data);

  return axios.put(url, data, {
    headers: {
      'Content-Type': contentType,
      Accept: contentType,
    },
  }).then((response) => response.data);
}

export function patchData(service, data, parameters) {
  const url = replaceUrlPlaceholders(getURL(service), parameters);
  const contentType = getGontentType(data);

  return axios.patch(url, data, {
    headers: {
      'Content-Type': contentType,
      Accept: contentType,
    },
  }).then((response) => response.data);
}

export function deleteData(service, parameters) {
  const url = replaceUrlPlaceholders(getURL(service), parameters);
  const contentType = 'application/json';

  return axios.delete(url, {
    headers: {
      Accept: contentType,
    },
  }).then((response) => response.data);
}
