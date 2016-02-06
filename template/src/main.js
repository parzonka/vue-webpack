import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Hello from './components/Hello'
import Users from './components/Users'

// addons
Vue.use(VueRouter)

// routes
var router = new VueRouter({
  history: true
})

router.map({
  '/hello': {
    component: Hello
  },
  '/users': {
    component: Users
  }
})

// init
router.start(App, '#app')
