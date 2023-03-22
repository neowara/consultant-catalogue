import { MutationTree } from 'vuex';

import { state } from "./state"

const mutations: MutationTree<state> = {

  setActive(state: state, payload) {
    state.active = payload;
  },

  toggleMenu(state: state, payload) {
    state.menuOpen = payload;
  },

  setConsultants(state: state, data: Array<object>) {
    console.log("Setting consultants")
    localStorage.setItem("consultants", JSON.stringify(data));
    state.consultants = JSON.parse(localStorage.getItem("consultants") || "[]");
  }
}

export default mutations;