<template>
  <header>
    <a href="/">
      <img src="../assets/svg/annevo-logo.svg" alt="Annevo" />
    </a>
    <button class="menu" @click="OpenMenu">
      <span>MENU</span> <img src="../assets/svg/menu.svg" alt="menu" />
    </button>
    <FoldOutMenu :open="menuOpen" :persons="persons" />
  </header>
</template>

<script>
import FoldOutMenu from "./FoldOutMenu";

export default {
  name: "HeaderComponent",
  components: {
    FoldOutMenu,
  },
  computed: {
    menuOpen() {
      return this.$store.getters.menuOpen;
    },
  },
  props: {
    msg: {
      type: String,
      required: true,
    },
    persons: {
      type: Array,
      required: true,
    },
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
header {
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100% - 3rem);
  z-index: 10;
  display: flex;
  padding: 1.5rem;
  justify-content: space-between;
}

a {
  display: block;

  img {
    display: block;
    width: 5rem;
    height: auto;
  }
}

button.menu {
  background-color: transparent;
  border: 1px solid white;
  display: flex;
  color: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
  width: auto;
  align-items: center;
  cursor: pointer;

  img {
    display: block;
    width: 1rem;
    height: auto;
    margin-left: 0.5rem;
  }
}
</style>
