import Vue from 'vue'
import Vuex from 'vuex'

// le decimos a vue que use vuex
Vue.use(Vuex)

// state
// Creamos un nuevo store declarando la palabra state
// y exportando este archivo para usarlo globalmente
// lñuego pasamos a registrarlo en la instancia pricinpal, posea en el main.js

// getters
// los getters son una funcionalidad que nos permite
// insertar codigo que luego se ejcutara en diferentes componentes
// principalmente sirve para no duplicar codigo

// mutations (serian como los setters)
// laqs mutations son lad que cambian el store
// siempre se ejecutan de forma sincronica
// es aqui donde se muta (cambia) el store
// normalmente esto se suele hacer en los componenetes
// pero es mejor hacerlo en una mutacion para invocar el cambio
// en el componente donde se use

// actions
// nos permiten ejecutar tareas asincronzas en el store
// de modo que solo cuando cambian modifican en el store
// no toman en state sino que toman un context, ese context es
// otro metodo que nos da acceso al commit para poder hacer los 
// cambios respectivos en el store
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