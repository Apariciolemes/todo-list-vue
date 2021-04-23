import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/plugins/index';
import '@/assets/layouts/layout.scss';
import '@/assets/icons/icons';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
