import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from '@/plugins/vuetify'
import VCurrencyField from 'v-currency-field'
import { VTextField } from 'vuetify/lib'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import VueAnalytics from 'vue-analytics';

// import VueGtag from "vue-gtag";

var VueCookie = require('vue-cookie');



require('dotenv').config();
Vue.use(VueAxios, axios, vuetify);
Vue.use(VueCookie);
Vue.use(VueLodash, { lodash: lodash });
Vue.component('v-text-field', VTextField);
// Vue.use(VueGtag, {
//   config: { id: "UA-213747468-2" }
// });
Vue.use(VueAnalytics, {
  id: 'UA-213747468-2',
  router
});
Vue.use(VCurrencyField, {

	locale: 'en-US',
	decimalLength: 2,
	autoDecimalMode: false,
	min: null,
	max: null,
	defaultValue: 0,
  valueAsInteger: false,
  allowNegative: true

});

// const {} = require('../../server/config/keys')

Vue.config.productionTip = false

// API URL
// if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'https://pigmentus.herokuapp.com'; // Production
// }else {
  // axios.defaults.baseURL = 'http://localhost:3000/'; // Local
// }




new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
