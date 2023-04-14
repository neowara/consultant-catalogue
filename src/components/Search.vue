//Simple search component with a text input and a button. The component emits an
event when the button is clicked. The event is handled in the parent component.
The parent component then filters the list of consultants based on the search
term.
<template>
  <div class="search-container">
    <div>
      <FilterComponent
        :buttonText="'Filter Consultants'"
      ></FilterComponent>
    </div>

    <div class="search-wrapper">
      <label for="Search"><img src="../assets/svg/search.svg" /></label>
      <input
        id="Search"
        v-model="searchTerm"
        type="text"
        placeholder="Search by Name or Work Title"
        @keydown="search"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FilterComponent from "./Filter.vue";

export default defineComponent({
  name: "SearchComponent",
  components: {
    FilterComponent,
  },
  data() {
    return {
      searchTerm: "",
    };
  },
  props: {},
  methods: {
    search() {
      this.$store.commit("setKeyword", this.searchTerm);
    },
  },
  computed: {},
  created() {
    this.$store.commit("setKeyword", this.searchTerm);
  },
});
</script>

<style lang="scss">
.search-container {
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
      margin-top: 0.125rem;
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
}
</style>
