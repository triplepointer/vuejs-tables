import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bootstrapCss from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import popper from '@popperjs/core';
import bootstrapJs from '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import axios from 'axios';

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
