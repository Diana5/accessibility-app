import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Notifications from 'vue-notification';
Vue.use(Notifications);

import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);


Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
