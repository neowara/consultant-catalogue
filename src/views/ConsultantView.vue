# Vue view page that display the details of a consultant 

<template>
  <div>
    <div>
      <Header :msg="'Hello'" :persons="getAllPerson()" @selected-person="setNewPerson" />
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
    </div>
  </div>
</template>

<script lang="ts">
import persons from ".././data/data.json";

import { defineComponent } from 'vue';
import Bio from ".././components/Bio.vue";
import Header from ".././components/Header.vue";
import ProfileTop from ".././components/ProfileTop.vue";
import FunFacts from ".././components/FunFacts.vue";
import Links from ".././components/Links.vue";
import FavoriteGif from ".././components/FavoriteGif.vue";
import BottomNav from ".././components/BottomNav.vue";

export default defineComponent({
  name: 'ConsultantView',
  components: {
    Bio,
    Header,
    ProfileTop,
    FunFacts,
    Links,
    FavoriteGif,
    BottomNav,
  },
  data() {
    return {
    }
  },
  computed: {
    activeIndex() {
      return this.$store.getters.active;
    },
  },
  methods: {
    setNewPerson(newPerson:  string | number) {
      this.$store.dispatch("setActive", newPerson);
    },
    getAllPerson() {
      return persons;
    },
    getPerson(newPerson: number) {
      return persons[newPerson];
    },
    getNextPerson(index: string) {
      const len = persons.length;
      const newNumber = (parseInt(index) + (1 % len) + len) % len;
      return persons[newNumber];
    },
    getPrevPerson(index: string) {
      const len = persons.length;
      const newNumber = (parseInt(index) + (-1 % len) + len) % len;
      return persons[newNumber];
    },
    getPrevIndex(index: string) {
      const len = persons.length;
      const newNumber = (parseInt(index) + (-1 % len) + len) % len;
      return newNumber;
    },
    getNextIndex(index: string) {
      const len = persons.length;
      const newNumber = (parseInt(index) + (1 % len) + len) % len;
      return newNumber;
    },
  },
})
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
</style>