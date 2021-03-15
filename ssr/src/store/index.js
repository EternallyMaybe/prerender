import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore() {
  return new Vuex.Store({
    state: {
      items: {}
    },
    mutations: {
      setItem(state, { id, item }) {
        Vue.set(state.items, id, item)
      }
    },
    actions: {
    },
    modules: {
    }
  })
}
