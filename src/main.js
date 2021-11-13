import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase';
import vuetify from './plugins/vuetify'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date.js'

Vue.config.productionTip = false
Vue.filter('date', DateFilter)

new Vue({
  vuetify,
  router,
  store,

  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyAYIVDqKjhq2cmZmgIjwvmTqj0f3OYmwlc",
      authDomain: "pets-meet-up-adoption.firebaseapp.com",
      databaseURL: "https://pets-meet-up-adoption-default-rtdb.asia-southeast1.firebasedatabase.app/",
      projectId: "pets-meet-up-adoption",
      storageBucket: "pets-meet-up-adoption.appspot.com",
      messagingSenderId: "197143090322",
      appId: "1:197143090322:web:ed2174f9ab689273a9024b"

    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })

    this.$store.dispatch('loadMeetups')

  }
}).$mount('#app')
