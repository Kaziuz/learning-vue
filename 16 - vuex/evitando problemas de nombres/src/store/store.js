import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'

/* cuando importamos con un * lo que estamos haciendo
es diciendole a javscript que cree un objeto con todas las propiedades
exportadas, para luego acceder a ellas */
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

// le decimos a vue que use vuex
Vue.use(Vuex)


/*
export const store = new Vuex.Store({
  state: {
    counter: 0,
    value: 0 // este será un valor global
  },
  getters: {
    doubleCounter: state => {
      return state.counter * 2
    },
    stringCounter: state => {
      return state.counter + ' Clicks'
    },
    value: state => {
      return state.value
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload
    },
    decrement: (state, payload) => {
      state.counter -= payload
    },
    updateValue: (state, payload) => {
      // esta funcion lo que hace es para que funcione el v-model
      state.value = payload
    }
  },
  actions: {
    increment: ({ commit }, payload) => {
      commit('increment', payload)
    },
    decrement: ({ commit }, payload) => {
      commit('decrement', payload)
    },
    asyncIncrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('increment', payload.by)
      }, payload.duration)
    },
    asyncDecrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('decrement', payload.by)
      }, payload.duration)
    },
    updateValue({ commit }, payload) {
      commit('updateValue', payload)
    }
  }
})
*/

// AL FINAL SOLO TENEMOS UN STORE
/*
  entonces para fusionar nuestros "store temporales" almacenados
  en la carpeta modules, utilizamos la palabra modules en la instancia
  del store
*/
export const store = new Vuex.Store({
  state: {
    value: 0 // este será un valor global
  },
  getters,
  mutations,
  actions,
  modules: {
    counter
  }
})