import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  active: 10
};

export default new Vuex.Store({
  state,
  mutations: {
    setActive(state, payload) {
      state.active = payload;
      console.log("setting:", payload);
    }
  },
  actions: {
    setActive(context, payload) {
      context.commit("setActive", payload);
    }
  },
  getters: {
    active(state) {
      return state.active;
    }
  }
});
