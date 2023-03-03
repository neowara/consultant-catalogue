<template>
  <div class="home-container">
    <p>Deez nuts</p>
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
@import "../assets/scss/base";
.home-container {
  .home-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }
}
@media only screen and (max-width: $tiny) {
  .home-container {
    .home-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }
}
@media only screen and (min-width: $mobile) {
  .home-container {
    .home-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }
}
@media only screen and (min-width: $large) {
  .home-container {
    padding: 50px 100px;
    .home-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    }
  }
}
</style>