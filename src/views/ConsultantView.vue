# Vue view page that display the details of a consultant 

<template>
  <div class="consultant-details-wrapper">
      <ProfileTop :consultantDetails="getPerson(activeIndex)" />
      <h2><a id="profile"><span>Profile</span></a></h2>
      <div class="profile-wrapper">
        <table>
          <tr><th>Years of Experience:</th><td>{{ getPerson(activeIndex).experienceInYears }}</td></tr>
          <tr><th>Languages:</th><td>Swedish, English</td></tr>
          <tr><th>Location:</th><td>{{ getPerson(activeIndex).location }}</td></tr>
          <tr><th>Available from:</th><td>{{ getPerson(activeIndex).availableFrom }}</td></tr>
          <tr><th>Available till:</th><td>{{ getPerson(activeIndex).availableTill }}</td></tr>
          <tr><th>Availability:</th><td>{{ getPerson(activeIndex).availableType }}</td></tr>
          <tr><th>Can Travel:</th><td>{{ getPerson(activeIndex).canTravel }}</td></tr>
          <tr><th></th><td>{{ getPerson(activeIndex).canTravelComment }}</td></tr>
          <tr><th>Business Unit:</th><td>{{ getPerson(activeIndex).businessArea }}</td></tr>
        </table>
      </div>
      <h2><a id="about"><span>About me</span></a></h2>
      <div class="about" v-html="fakeText"></div>
      <h2><a id="skillset"><span>Skillset</span></a></h2>
      <div class="tag-wrapper" >
          <TagComponent v-for="(skill, index) in getPerson(activeIndex).workingTitles" :key="index" :text="skill"  />
      </div>
      <h2><a id="full-cv"><span>Full CV</span></a></h2>
      <div class="full-cv-wrapper">
        <a :href="getPerson(activeIndex).consultantBio.cvLink" target="_blank">Link to full CV</a>
      </div>
      <h2><a id="contact-info"><span>Contact information</span></a></h2>
      <div class="tag-wrapper">
        <TagComponent icon="phone" :text="'042141234'" />
        <TagComponent icon="envelope" :text="'lorem@ipsum.com'" />
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
  padding-bottom: 3rem;

  h2 {
    grid-column: main;
    margin: 5rem 0 1rem;
    color: white;

    a{
      color: white;
    }
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

  div.about, div.profile-wrapper, div.full-cv-wrapper{
    grid-column: main;
  }

  div.profile-wrapper{
    table{
      th{
        opacity: 0.6;
        padding-right: 1rem;
        text-align: left;
        font-weight: 300;
      }
      td{
        font-weight: 500;
      }

    }
  }
  div.full-cv-wrapper{
    a{
      color: white;
    }
  }
}
</style>