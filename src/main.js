import Vue from 'vue'
import App from './App.vue'
import Design from '@lg-xin/cat-design'
import './assets/css/index.styl';

Vue.config.productionTip = false

Vue.use(Design);

new Vue({
  render: h => h(App),
}).$mount('#app')
