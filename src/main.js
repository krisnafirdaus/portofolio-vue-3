import { createApp } from 'vue'
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import './assets/main.css';
import App from './App.vue'
import Router from './router';

const app = createApp(App);

app.use(Toast);
app.use(Router);
app.mount('#app');
