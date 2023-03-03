import { ActionTree } from "vuex";
import axios, { } from 'axios';

import { state } from "./state"

const actions: ActionTree<state, state> = {
    setActive(context, payload) {
        context.commit("setActive", payload);
      },
      
      toggleMenu(context, payload) {
        context.commit("toggleMenu", payload);
      }
}

export default actions;