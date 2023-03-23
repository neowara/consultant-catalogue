import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-plugin-persistedstate";

import { state } from './state';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [createPersistedState()],
})