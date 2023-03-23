import { state } from "./state";

export default {
  active(state: state) {
    return state.active;
  },
  menuOpen(state: state) {
    return state.menuOpen;
  },
  consultants(state: state) {
    return state.consultants;
  },
  keyword(state: state) {
    return state.keyword;
  },
  filterByName(state: state) {
    return state.consultants.filter(consultant => {
      // Loop through each property in the consultantDetails object.
      for (const key in consultant.consultantDetails) {
        // Check if the property is not null or undefined.
        if (consultant.consultantDetails[key]) {
          // Check if the name or workingTitles property contains the keyword.
          if (consultant.consultantDetails.name.toLowerCase().includes(state.keyword.toLowerCase())
            || consultant.consultantDetails.workingTitles.filter(titles => titles.toLowerCase().includes(state.keyword.toLowerCase())).length > 0) {
            return true;
          }
        }
      }
      return false;
    });
  },
}

