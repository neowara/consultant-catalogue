<template>
  <div id="app">
    <template>
      <Header @selected-person="setNewPerson" :persons="getAllPerson()" />
      <ProfileTop :person="getPerson(activeIndex)" />
      <FunFacts :person="getPerson(activeIndex)" />
      <Bio :person="getPerson(activeIndex)" />
      <Links :person="getPerson(activeIndex)" />
      <h2><span>My Favorite Gif</span></h2>
      <FavoriteGif :person="getPerson(activeIndex)" />
      <h2><span>More Designers</span></h2>
      <BottomNav
        :next="getNextPerson(activeIndex)"
        :prev="getPrevPerson(activeIndex)"
        :next-index="getNextIndex(activeIndex)"
        :prev-index="getPrevIndex(activeIndex)"
        @prev-person="setNewPerson"
        @next-person="setNewPerson"
      />
    </template>
  </div>
</template>

<script>
import Bio from "./components/Bio";
import Header from "./components/Header";
import ProfileTop from "./components/ProfileTop";
import FunFacts from "./components/FunFacts";
import Links from "./components/Links";
import FavoriteGif from "./components/FavoriteGif";
import BottomNav from "./components/BottomNav";

import persons from "./data/data.json";

export default {
  name: "App",
  components: {
    Bio,
    Header,
    ProfileTop,
    FunFacts,
    Links,
    FavoriteGif,
    BottomNav,
  },
  computed: {
    activeIndex() {
      return this.$store.getters.active;
    },
  },
  methods: {
    setNewPerson(newPerson) {
      this.$store.dispatch("setActive", newPerson);
    },
    getAllPerson() {
      return persons;
    },
    getPerson(newPerson) {
      return persons[newPerson];
    },
    getNextPerson(index) {
      const len = persons.length;
      const newNumber = (parseInt(index) + (1 % len) + len) % len;
      return persons[newNumber];
    },
    getPrevPerson(index) {
      const len = persons.length;
      const newNumber = (parseInt(index) + (-1 % len) + len) % len;
      return persons[newNumber];
    },
    getPrevIndex(index) {
      const len = persons.length;
      const newNumber = (parseInt(index) + (-1 % len) + len) % len;
      return newNumber;
    },
    getNextIndex(index) {
      const len = persons.length;
      const newNumber = (parseInt(index) + (1 % len) + len) % len;
      return newNumber;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:slnt,wght@-10,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");

:root {
  --background-color: #121212;
  --text-color: #fff;
  --text-size: 16px;
  --color-annevo-orange: #D95C00;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  font-size: var(--text-size);
  padding: 0;
  margin: 0;
  font-family: "Open Sans", Helvetica, Arial, sans-serif;
  position: relative;
}

h2 {
  display: block;
  font-style: italic;
  align-self: center;
  text-align: center;
  margin: 6rem 0 1rem;

  span {
    padding: 0.5rem;
    border-bottom: 5px solid var(--color-annevo-orange);
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>