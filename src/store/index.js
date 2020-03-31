import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const modulesA = {
  namespaced: true,
  state: {
    list: 1
  },
  mutations: {
    savelist () {
      console.log(222222222222222)
    },
    savelist123123 () {
      console.log(222222222222222)
    },
    dsfsd123 () {
      console.log(222222222222222)
    }
  },
  actions: {
    saveSessionId ({ commit }, payload) {
      commit('savelist')
      console.log({ commit }, payload)
    }
  }
}

export default new Vuex.Store({
  namespaced: true,
  state: {
    token: false,
    test: 2222
  },
  mutations: {
    tokenBooleanFalse () {
      console.log(11111111111)
      this.state.token = false
    },
    tokenBooleanTrue () {
      this.state.token = true
    }
  },
  actions: {
    add: async ({ commit }) => {
      commit('tokenBooleanFalse')
    }
  },
  modules: {
    modulesA
  }
})
