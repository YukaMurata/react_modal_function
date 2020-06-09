import axios from 'axios';

/**
 * 2つのajax情報を返す
 * @param {*} addresses
 */
export const getServers = (addresses) => {
  return Promise.all(addresses.map((address) => axios.get(`${address}`))).then((responses) => {
    const allResponse = {};
    allResponse.res = [];
    responses.forEach((res) => {
      allResponse.res.push(res.data);
    });
    return Promise.resolve(allResponse);
  });
};

export const getList = (url) => {
  axios.get(url).then((response) => {
    return response.data.list;
  });
};
