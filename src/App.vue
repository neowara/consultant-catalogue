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

export default defineComponent ({
  name: "App",
  components: {
    RouterView,
    Header
  },
  data() {
    return {
      availableConsultants: [] as Array<object>,
      selectedConsultant: Number,
    };
  },
  methods: {
    async getConsultants(): Promise<void> {
      await this.$store.dispatch("getConsultants", this.selectedConsultant);
      localStorage.setItem("consultants", JSON.stringify(this.$store.state.consultants));
      this.availableConsultants = localStorage.getItem("consultants") ? JSON.parse(localStorage.getItem("consultants") || "") : [];
    },
  },
  computed: {
    consultantData(): object {
      return this.$store.getters.consultantData;
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