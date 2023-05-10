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
      if (state.keyword !== null && typeof state.keyword === "string" ) {
        for (const key in consultant.consultantDetails) {
          // Check if the property is not null or undefined.
          let index = 0;
          if (consultant.consultantDetails[key]) {
            if (state.keyword === "" || state.keyword.length === 0) {
              return true;
            } 
            // Check if the name or workingTitles property contains the keyword.
            if (state.keyword.length &&
              consultant.consultantDetails.name
                .toLowerCase()
                .includes(state.keyword[index].toLowerCase())
            ) {
              return true;
            }
            index++;
          }
        }
        return false;
      } else if (state.keyword !== null && typeof state.keyword === "object") {
        for (const key in consultant.consultantDetails) {
          // Check if the property is not null or undefined.
          let index = 0;
          if (consultant.consultantDetails[key]) {
            if (state.keyword.length &&
              consultant.consultantDetails.workingTitles.filter((titles) =>
                titles.toLowerCase().includes(state.keyword[index].toLowerCase())
              ).length > 0
            ) {
              return true;
            } else if (
              consultant.consultantDetails.canTravel.toString() === state.keyword[index]
            ) {
              return true;
            }
            index++;
          }
        }
        return false;
      } else if (typeof state.keyword === "boolean") {
        for (const key in consultant.consultantDetails) {
          // Check if the property is not null or undefined.
          if (consultant.consultantDetails[key]) {
            if (
              consultant.consultantDetails.canTravel === state.keyword
            ) {
              return true;
            }
          }
        }
        return false;
      }
    });
  },
  filterData(state: state): Filter {
    return state.filters[0];
  }
};
