import { createApp } from 'vue';
import App from './App.vue';

(async () => {
  await ymaps3.ready;
  createApp(App).mount('#app');
})();
