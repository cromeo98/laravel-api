require('./bootstrao');

window.Vue = require('vue');

import Vue from 'vue';
import App from './views/app';

const app = new Vue({
    el: 'root',
    render: h => h(App)
});