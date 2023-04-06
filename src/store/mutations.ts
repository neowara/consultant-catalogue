import { IConsultant } from "@/types/consultant";
import { MutationTree } from "vuex";

import { Consultant, state } from "./state";

const mutations: MutationTree<state> = {
  setActive(state: state, payload) {
    state.active = payload;
  },

  setActiveId(state: state, id: string) {
    if (id !== "") {
      const consultant = state.consultants?.find((obj) => {
        return (obj as IConsultant).consultantDetails.id === id;
      });

      if (consultant) {
        state.active = consultant;
      }
    }
  },

  toggleMenu(state: state, payload) {
    state.menuOpen = payload;
  },
  
// This code checks if there is a consultant in local storage. 
// If there is, then the state will be set to the data that is in local storage. 
// If there is no consultant in local storage, then the state will be set to the data that is passed into the function.
// then the data is set to local storage as well.
  setConsultants(state: state, data: Array<Consultant>) {
    if (localStorage.getItem("consultants")) {
      state.consultants = JSON.parse(
        localStorage.getItem("consultants") as string
      );
    } else {
      state.consultants = data;
      localStorage.setItem("consultants", JSON.stringify(data));
    }
  },

  setKeyword(state: state, payload) {
    state.keyword = payload;
  },
};

export default mutations;
