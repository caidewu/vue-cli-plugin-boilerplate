import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$http = axios;
Vue.prototype.axios = axios;

axios.interceptors.request.use(async (config) => {
  // Do something before request is sent，return false cancel request。

  return config;
});
