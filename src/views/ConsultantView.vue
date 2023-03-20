# Vue view page that display the details of a consultant 

<template>
  <div class="consultant-details-wrapper">
      <ProfileTop :consultantDetails="getPerson(activeIndex)" />
      <h1><span>Profile</span></h1>
      <div class="tag-wrapper">
        <TagComponent icon="bars-progress" :text="getPerson(activeIndex).experienceInYears + ' years'" />
        <TagComponent icon="phone" :text="'042141234'" />
        <TagComponent icon="envelope" :text="'lorem@ipsum.com'" />
        <TagComponent icon="car" text="Can drive" />
        <TagComponent icon="gauge" text="100%" />
      </div>
      <div class="bio-wrapper">
        <Bio :content="fakeText" backgroundColor="white" />
        <Bio :content="fakeText" backgroundColor="#d8e6f0" />
        <Bio :content="fakeText" backgroundColor="#ff875a" />
        <Bio :content="fakeText" backgroundColor="#eeedef" />
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Bio from ".././components/Bio.vue";
import ProfileTop from ".././components/ProfileTop.vue";
import { Consultant } from ".././components/Table.vue";
import TagComponent from ".././components/TagComponent.vue";

export default defineComponent({
  name: 'ConsultantView',
  components: {
    Bio,
    ProfileTop,
    TagComponent
  },
  data() {
    return {
      fakeText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae lacinia felis. Mauris sagittis quam non lacinia blandit. Suspendisse eget risus ac eros condimentum porta a quis eros. Nullam in tristique augue. Aliquam erat volutpat. Curabitur vitae quam ut risus sagittis feugiat. Integer id magna nec mauris facilisis facilisis eget ac tortor. Mauris vulputate scelerisque velit, eu luctus sem luctus in. Sed urna massa, posuere eu hendrerit vitae, pretium a risus. Integer nec dolor in lacus fermentum molestie. Quisque in purus eget felis vehicula iaculis id eget orci."
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

  .bio-wrapper {
    grid-column: main;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
</style>