import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import FirebaseConfig from '../config/Firebase';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

const firebaseApp = initializeApp(FirebaseConfig);
const auth = getAuth(firebaseApp);

let app;

onAuthStateChanged(auth, () => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
