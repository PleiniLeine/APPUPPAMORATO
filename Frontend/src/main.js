import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import vuetify from './plugins/vuetify'
import AddAnimal from './components/AddAnimal'

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
 {
    path: '/adote',
    name: 'Adote',
    component: () => import('./views/Adote.vue') 
  },

  {
    path: '/adicionar-animal',
    name: 'AddAnimal',
    component: AddAnimal
  },

  {
    path: '/contato',
    name: 'Contato',
    component: () => import('./views/Contato.vue')
  },

  {
    path: '/apoiar',
    name: 'Apoiar',
    component: () => import('./views/Apoiar.vue')
  },

  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import('./views/Sobre.vue')
  },

  {
    path: '/adotar-animail/',
    name: 'Adotar',
    component: () => import('./components/Adotar.vue')
  },
  
  {
    name: 'Home',
    path: '/',
    component: Home
  },

  {
    path: '/acessibilidade',
    name: 'Acessibilidade',
    component: () => import ('./views/Acessibilidade.vue')
  }
];

const router = new VueRouter({ mode: 'history', routes: routes })

new Vue({
  // init router
  router,

  vuetify,
  render: h => h(App)
}).$mount('#app')