import { IConsultant, state, Filter } from "@/types/consultant";

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
  filters(state: state) {
    return state.filters;
  },
  filterBy(state: state): IConsultant[] {
    return state.consultants.filter((consultant) => {
      // Loop through each property in the consultantDetails object.
      for (const key in consultant.consultantDetails) {
        // Check if the property is not null or undefined.
        let index = 0;
        if (consultant.consultantDetails[key]) {
          // Check if the name or workingTitles property contains the keyword.
          if (state.keyword.length &&
            consultant.consultantDetails.name
              .toLowerCase()
              .includes(state.keyword[index].toLowerCase())
          ) {
            return true;
          } else if (state.keyword.length &&
            consultant.consultantDetails.workingTitles.filter((titles) =>
              titles.toLowerCase().includes(state.keyword[index].toLowerCase())
            ).length > 0
          ) {
            return true;
          } else if (
            consultant.consultantDetails.canTravel.toString() === state.keyword
          ) {
            return true;
          }
          index++;
        }
      }
      return false;
    });
  },
  filterData(state: state): Filter {
    return state.filters[0];
  }
};
