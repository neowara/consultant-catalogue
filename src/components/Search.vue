##Simple search component with a text input and a button. The component emits an event when the button is clicked. The event is handled in the parent component. The parent component then filters the list of consultants based on the search term.
<template>
  <div class="search-wrapper">
    <label for="Search"><img src="../assets/svg/search.svg" /></label>
    <input id="Search" v-model="keyword" type="text" placeholder="Search by Name or Work Title" @keyup="handleSearch()" />
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import { Consultant } from "./Table.vue";

export default defineComponent({
  name: "SearchComponent",
  data() {
    return {
      keyword: "",
    };
  },
  props: {
  },
  methods: {
    handleSearch() {
      this.$emit("search", this.filterByName);
    },
  },
  computed: {
    availableConsultants(): Array<Consultant> {
      return this.$store.state.consultants;
    },
    filterByName(): Array<Consultant> {
      return this.$store.state.consultants.filter(consultant => {
        // Loop through each property in the consultantDetails object.
        for (const key in consultant.consultantDetails) {
          // Check if the property is not null or undefined.
          if (consultant.consultantDetails[key]) {
            // Check if the name or workingTitles property contains the keyword.
            if (consultant.consultantDetails.name.toLowerCase().includes(this.keyword.toLowerCase())
              || consultant.consultantDetails.workingTitles.filter(titles => titles.toLowerCase().includes(this.keyword.toLowerCase())).length > 0) {
              return true;
            }
          }
        }
        return false;
      });
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

  &:focus-within {
    border-color: white;
  }

  img {
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

    &:focus {
      outline: none;
    }
  }
}
</style>