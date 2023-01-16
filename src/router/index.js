import { createRouter, createWebHashHistory } from 'vue-router'

import TableView from '../views/TableView.vue'
import ProjetosView from '../views/ProjetosView.vue'
import PerfilView from '../views/PerfilView.vue'
import CalendarioView from '../views/CalendarioView.vue'
import Addatividade from '../views/Addatividade.vue'
import PerfilEditar from '../views/PerfilEditar.vue'
import DashboardView from '@/views/DashboardView.vue'
import RelatorioView from '@/views/RelatorioView.vue'
import Login from '@/views/Login.vue'
import App from '@/App.vue';

const routes = [
  {
    path: '/table',
    name: 'table',
    component: TableView,
    
  },
  {
    path:'/projetos',
    name:'projetos',
    component:ProjetosView,
    
  },
  {
    path:'/perfil',
    name:'perfil',
    component:PerfilView,
   
  },
  {
    path:'/',
    name:'home',
    component:CalendarioView,
    beforeEnter(to, from, next) {
      const isAuthenticated = localStorage.getItem('isAuthenticated');

      if (isAuthenticated) {
        next();
      } else {
        next({ name: 'Login' });
      }
    },
    
  },
  {
    path:'/addatividade',
    name:'addatividade',
    component:Addatividade,
    
  },
  {
    path:'/perfileditar',
    name:'perfileditar',
    component:PerfilEditar,
    
  },
  {
    path:'/dashboard',
    name:'dashboard',
    component:DashboardView,
   
  },
  {
    path:'/relatorio',
    name:'relatorio',
    component:RelatorioView,
    
  },
  {
    path:'/login',
    name:'login',
    component:Login,
  },
  {
    path:'/app',
    name:'app',
    component:App
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

