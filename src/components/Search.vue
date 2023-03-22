##Simple search component with a text input and a button. The component emits an event when the button is clicked. The event is handled in the parent component. The parent component then filters the list of consultants based on the search term.
<template>
  <div class="search-wrapper">
    <input
      v-model="searchTerm"
      type="text"
      placeholder="Search"
      @keyup.enter="search"
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
    search(nameKey: string, myArray: Array<Consultant>) {
      for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].consultantDetails.name === nameKey) {
          console.log(myArray[i]);
          return myArray[i];
        }
      }
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
  justify-content: flex-end;
  align-items: center;
  margin: 2rem 0;
  input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 1rem;
  }
  button {
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    cursor: pointer;
    &:hover {
      background-color: #ccc;
    }
  }
}

</style>