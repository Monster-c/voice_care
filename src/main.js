import Vue from 'vue'
import './cube-ui'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import ElementUI from 'element-ui'
import audio from 'vue-mobile-audio'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(audio);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')