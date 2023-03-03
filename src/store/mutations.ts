import { MutationTree } from 'vuex';

import { state } from "./state"

const mutations: MutationTree<state> = {

  setActive(state: state, payload) {
    state.active = payload;
  },

  toggleMenu(state: state, payload) {
    state.menuOpen = payload;
  }
}

export default mutations;