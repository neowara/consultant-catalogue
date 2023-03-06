<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script lang="ts">
import { RouterView } from "vue-router";
import { defineComponent } from "vue";

export default defineComponent ({
  name: "App",
  components: {
    RouterView
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
      this.availableConsultants = this.$store.state.consultants;
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
</style>