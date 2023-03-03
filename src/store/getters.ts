import { state } from "./state";

export default {
active(state: state) {
  return state.active;
},
menuOpen(state: state) {
  return state.menuOpen;
}
}

