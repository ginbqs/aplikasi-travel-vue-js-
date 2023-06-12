import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BusIndex from '../views/bus/Bus.vue'
import BusAdd from '../views/bus/Add.vue'
import BusEdit from '../views/bus/Edit.vue'

import TerminalIndex from '../views/terminal/Terminal.vue'
import TerminalAdd from '../views/terminal/Add.vue'
import TerminalEdit from '../views/terminal/Edit.vue'

import RuteIndex from '../views/rute/Rute.vue'
import RuteAdd from '../views/rute/Add.vue'
import RuteEdit from '../views/rute/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bus',
    name: 'bus.index',
    component: BusIndex
  },
  {
    path: '/bus/add',
    name: 'bus.add',
    component: BusAdd
  },
  {
    path: '/bus/:id/edit',
    name: 'bus.edit',
    component: BusEdit
  },
  {
    path: '/terminal',
    name: 'terminal.index',
    component: TerminalIndex
  },
  {
    path: '/terminal/add',
    name: 'terminal.add',
    component: TerminalAdd
  },
  {
    path: '/terminal/:id/edit',
    name: 'terminal.edit',
    component: TerminalEdit
  },
  {
    path: '/rute',
    name: 'rute.index',
    component: RuteIndex
  },
  {
    path: '/rute/add',
    name: 'rute.add',
    component: RuteAdd
  },
  {
    path: '/rute/:id/edit',
    name: 'rute.edit',
    component: RuteEdit
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
