<template>
  <div id="app">
    <Header />
    <RouterView />
  </div>
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import { mapGetters } from "vuex";
import { defineComponent } from "vue";
import Header from "./components/Header.vue";

export default defineComponent({
  name: "App",
  components: {
    RouterView,
    Header
  },
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {
    ...mapGetters(["consultants"]),
    ...mapGetters(["filterBy"]),
    ...mapGetters(["keyword"]),
    ...mapGetters(["filterData"]),
  },
  mounted() {
    this.$store.dispatch("getConsultants");
  },
});
</script>

<style lang="scss">
@import './assets/scss/styles.scss';
</style>