import axios from 'axios';

let base = '';

export const defaultRequest = params => { return axios.post(`${base}/default`, params).then(res => res.data); };
