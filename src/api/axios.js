import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL = "http://192.168.0.5:5000";
axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = data => qs.stringify(data);

axios.interceptors.request.use(config => {
	return config
});

axios.interceptors.response.use(response => {
	return response.data;
});
export default axios;