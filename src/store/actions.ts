import { ActionTree } from "vuex";
import axios, { } from 'axios';

import { state } from "./state"

const actions: ActionTree<state, state> = {
  setActive(context, payload) {
    context.commit("setActive", payload);
  },

  toggleMenu(context, payload) {
    context.commit("toggleMenu", payload);
  },

  async getConsultants(context, param: number) {
    try {
      const result = await axios({
        method: 'get',
        url: context.state.APIAdress,
      });
      context.commit("setConsultants", result.data);
    } catch (error) {
      console.log(error);
    }
  }


}

export default actions;