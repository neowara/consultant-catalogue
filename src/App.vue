<template>
  <div id="app">
    <Header />
    <RouterView />
  </div>
</template>

<script lang="ts">
import { RouterView } from "vue-router";

import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import { state } from "./store/state";

export default defineComponent ({
  name: "App",
  components: {
    RouterView,
    Header
  },
  data() {
    return {
      availableConsultants: JSON.parse(localStorage.getItem("consultants") || "") || state.consultants,
      selectedConsultant: Number,
    };
  },
  methods: {
    async getConsultants(): Promise<void> {
      await this.$store.dispatch("getConsultants");
    },
  },
  computed: {
    consultantData(): object {
      return this.$store.getters.consultants;
    }
  },
  mounted() {
    this.getConsultants();
  },
});
</script>

<style lang="scss">
@import './assets/scss/styles.scss';
</style>