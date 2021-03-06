import Vue from 'vue'
import App from './App'
import router from './router/index'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  // render: h => h(App)
  render: function (h) {
    return h(App);
  },
  router
}).$mount("#app")
