##Simple search component with a text input and a button. The component emits an event when the button is clicked. The event is handled in the parent component. The parent component then filters the list of consultants based on the search term.
<template>
  <div class="search-wrapper">
    <label for="Search"><img src="../assets/svg/search.svg" /></label>
    <input
      id="Search"
      v-model="searchTerm"
      type="text"
      placeholder="Search by Name or Work Title"
      @keyup="search"
    />
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import { Consultant } from "./Table.vue";

export default defineComponent({
  name: "SearchComponent",
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    search(payload: KeyboardEvent) {
      this.$emit("search", this.searchTerm);
    },
    },
    computed: {
    availableConsultants(): Array<Consultant> {
      if (localStorage.getItem("consultants")) {
        return JSON.parse(localStorage.getItem("consultants") || "");
      } else {
        return this.$store.state.consultants;
      }
    },
  },
});
</script>

<style lang="scss">

.search-wrapper {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 2rem 0;
  height: 3rem;
  border: 1px solid #666;
  border-radius: 0.125rem;
  overflow: hidden;

  &:focus-within{
    border-color: white;
  }

  img{
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.5rem;
  }

  input {
    padding: 0.5rem 1rem;
    height: 2.6rem;
    background-color: black;
    color: white;
    font-size: var(--font-n);
    font-family: var(--font-family);
    border: 0;
    flex: 1;

    &:focus{
      outline: none;
    }
  }
}

</style>