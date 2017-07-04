// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import Vuefire from 'vuefire'
import firebase from './service/firebase'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(Vuefire)
Vue.use(Buefy)
Vue.use(VueLazyload)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  firebase: {
    cat: firebase.database.ref('cat')
  },
  template: '<App/>',
  components: { App }
})
