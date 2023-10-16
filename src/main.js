import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueTilt from 'vue-tilt.js';

import App from './App.vue';
import router from './router';
import 'aos/dist/aos.css';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
const app = createApp(App);
import cursorIx from './directive/cursor';

app.use(createPinia());
app.use(router);

app.use(VueTilt);
app.directive('cursor-ix', cursorIx);

app.mount('#app');
