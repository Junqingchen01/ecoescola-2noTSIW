import { createRouter, createWebHashHistory } from 'vue-router'

import TableView from '../views/TableView.vue'
import ProjetosView from '../views/ProjetosView.vue'
import PerfilView from '../views/PerfilView.vue'
import CalendarioView from '../views/CalendarioView.vue'
import Addatividade from '../views/Addatividade.vue'
import PerfilEditar from '../views/PerfilEditar.vue';


const routes = [
  {
    path: '/table',
    name: 'table',
    component: TableView
  },
  {
    path:'/projetos',
    name:'projetos',
    component:ProjetosView
  },
  {
    path:'/perfil',
    name:'perfil',
    component:PerfilView
  },
  {
    path:'/',
    name:'home',
    component:CalendarioView
  },
  {
    path:'/addatividade',
    name:'addatividade',
    component:Addatividade
  },
  {
    path:'/perfileditar',
    name:'perfileditar',
    component:PerfilEditar
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
