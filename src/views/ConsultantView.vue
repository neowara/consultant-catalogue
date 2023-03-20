# Vue view page that display the details of a consultant 

<template>
  <div class="consultant-details-wrapper">
      <ProfileTop :consultantDetails="getPerson(activeIndex)" />
      <h1><span>Profile</span></h1>
      <div class="tag-wrapper">
        <TagComponent icon="bars-progress" :text="getPerson(activeIndex).experienceInYears + ' years'" />
        <TagComponent icon="phone" :text="'042141234'" />
        <TagComponent icon="envelope" :text="'lorem@ipsum.com'" />
      </div>
      <FunFacts :person="getPerson(activeIndex)" />
      <Bio :person="getPerson(activeIndex)" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Bio from ".././components/Bio.vue";
import ProfileTop from ".././components/ProfileTop.vue";
import FunFacts from ".././components/FunFacts.vue";
import { Consultant } from ".././components/Table.vue";
import TagComponent from ".././components/TagComponent.vue";

export default defineComponent({
  name: 'ConsultantView',
  components: {
    Bio,
    ProfileTop,
    FunFacts,
    TagComponent
  },
  data() {
    return {
    }
  },
  computed: {
    activeIndex() {
      return this.$store.getters.active;
    },
    availableConsultants(): Array<Consultant> {
      return this.$store.state.consultants;
    },
  },
  methods: {
    setNewPerson(newPerson:  string | number) {
      this.$store.dispatch("setActive", newPerson);
    },
    getAllPerson() {
      return this.availableConsultants;
    },
    getPerson(newPerson: number) {
      return this.availableConsultants[newPerson].consultantDetails;
    },
    getNextPerson(index: string) {
      const len = this.availableConsultants.length;
      const newNumber = (parseInt(index) + (1 % len) + len) % len;
      return this.availableConsultants[newNumber];
    },
    getPrevPerson(index: string) {
      const len = this.availableConsultants.length;
      const newNumber = (parseInt(index) + (-1 % len) + len) % len;
      return this.availableConsultants[newNumber];
    },
    getPrevIndex(index: string) {
      const len = this.availableConsultants.length;
      const newNumber = (parseInt(index) + (-1 % len) + len) % len;
      return newNumber;
    },
    getNextIndex(index: string) {
      const len = this.availableConsultants.length;
      const newNumber = (parseInt(index) + (1 % len) + len) % len;
      return newNumber;
    },
  },
})
</script>

<style lang="scss">
.consultant-details-wrapper {
  @include main-grid;

  h1 {
    grid-column: main;
  }

  .tag-wrapper {
    grid-column: main;
    display: flex;
    align-items: center;
    height: fit-content;
    justify-content: flex-start;
  }
}
</style>