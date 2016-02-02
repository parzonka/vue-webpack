import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'

// addons
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
