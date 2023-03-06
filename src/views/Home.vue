<template>
  <div class="home-container">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
    goToShowDetails(id: string) {
      this.$router.push({ name: 'ShowDetails', params: { showId: id } });
    }
  },
  computed: {
    showsData() {
      return this.$store.getters.getShows;
    },
  },
})
</script>

<style lang="scss">
</style>