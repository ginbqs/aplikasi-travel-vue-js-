import Vue from 'vue'
import Vuex from 'vuex'
import bus from './bus.store'
import terminal from './terminal.store'
import rute from './rute.store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    bus,
    terminal,
    rute
  }
})
