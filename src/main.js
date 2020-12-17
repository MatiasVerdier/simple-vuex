import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { createStore } from './store';

const app = createApp(App);

app.config.globalProperties.$store = createStore();

app.mount('#app');
