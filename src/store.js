import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
       topBar:[]
  },
  mutations: {
       renderTopBar(state,payload){
          state.topBar = payload;
       }
  },
  actions: {
    renderTopBar({commit},payload){
      commit('renderTopBar',payload);
    }
  }
})
