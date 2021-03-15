import Vue from 'vue';
import App from './App.vue';


const a = () => {
  console.log(1);
}
a();

new Vue({
  render: h => h(App)
}).$mount('#app');