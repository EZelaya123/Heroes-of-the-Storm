import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: null, 
    showLoginForm: true, 
    selectedHero: null,
  },
  getters: {
    selectedHero(state) {
      return state.selectedHero;
    },
  },
  mutations: {
    setCurrentUser(state, user) {
      state.currentUser = user;
    },
    // setSelectedHero(state, { hero }) {      
    //   state.selectedHero = hero;
    // },
    setShowLoginForm(state, value) {
      // Cambia el valor solo si no hay un héroe seleccionado
      if (!state.selectedHero) {
        state.showLoginForm = value;
      }
    },
    setSelectedHero(state, hero) {
      state.selectedHero = hero;
    },
  },
  actions: {
    logoutAction({ commit }) {
      // Lógica para cerrar sesión
      commit('setCurrentUser', null); // Ajusta según sea necesario
      commit('setShowLoginForm', true);
    },
    selectHero({ commit }, hero) {
      commit('setSelectedHero', hero);
    },
  },
  modules: {
  }
})
