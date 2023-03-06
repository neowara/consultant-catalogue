<template>
  <header>
    <div class="inner">
      <a href="/">
        <img src="../assets/svg/logo.svg" alt="Nexer" />
      </a>
    </div>
  </header>
</template>

<script>

export default {
  name: "HeaderComponent",
  components: {
  },
  computed: {
    menuOpen() {
      return this.$store.getters.menuOpen;
    },
  },
  props: {
  },
  methods: {
    OpenMenu() {
      this.$store.dispatch("toggleMenu", true);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

@import '../assets/scss/base';
header {
  @include main-grid;
  padding: 1.5rem 0;
  position: relative;
  justify-content: space-between;
  border-bottom: 1px solid #222;
}

a {
  display: block;

  img {
    display: block;
    width: 10rem;
    height: auto;
  }
}
div.inner{
  grid-column: main;
}
</style>
