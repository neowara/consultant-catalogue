import { ActionTree } from "vuex";
import axios from "axios";

import { state } from "./state";

const actions: ActionTree<state, state> = {
  setActive(context, payload) {
    context.commit("setActive", payload);
  },

  toggleMenu(context, payload) {
    context.commit("toggleMenu", payload);
  },

  async getConsultants(context, param: number) {
    console.log("Getting API");
    try {
      console.log("Getting API 1A");
      const result = await axios({
        method: "get",
        url: context.state.APIAdress,
      });
      console.log(result);
      if (!localStorage.getItem("consultants") || JSON.stringify(result.data) !== localStorage.getItem("consultants") ){
        localStorage.setItem("consultants", JSON.stringify(result.data));
        context.commit("setConsultants", result.data);
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default actions;
axios;
