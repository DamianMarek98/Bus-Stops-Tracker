import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import VueGoodTablePlugin from 'vue-good-table';
import VueCookies from 'vue-cookies';

import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VueGoodTablePlugin);
Vue.use(VueCookies);

new Vue({
  render: h => h(App),
}).$mount('#app')
