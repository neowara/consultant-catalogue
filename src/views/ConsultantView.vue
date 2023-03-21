# Vue view page that display the details of a consultant 

<template>
  <div class="consultant-details-wrapper">
    <ProfileSection :usePadding="false">
      <ProfileTop :consultantDetails="getPerson(activeIndex)" />
    </ProfileSection>
    <div class="sticky">
      <div>
      <ul class="anchor-links">
        <li><a href="#profile">Profile</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skillset">Skillset</a></li>
        <li v-if="getPerson(activeIndex).consultantBio.cvLink"><a href="#full-cv">Full CV</a></li>
        <!--<li><a href="#contact-info">Contact info</a></li>-->
      </ul>
      <!-- Will Be used later when design is more finished
      <ul class="info">
        <li><p class="experience">{{ getPerson(activeIndex).experienceInYears }}<span>Years</span></p></li>
        <li><p class="availability">{{ getPerson(activeIndex).availableType }}</p></li>
        <li v-if="getPerson(activeIndex).canTravel"><img
              class="can-travel"
              src="../assets/svg/canTravel.svg"
              alt="Can Travel"
            /></li>
      </ul>
      -->
    </div>
    </div>
    <ProfileSection bgTheme="bg1" anchor="profile" title="Profile">
      <div class="profile-wrapper">
        <table>
          <tr><th>Years of Experience:</th><td>{{ getPerson(activeIndex).experienceInYears }}</td></tr>
          <tr><th>Languages:</th><td>Swedish, English</td></tr>
          <tr><th>Location:</th><td>{{ getPerson(activeIndex).location }}</td></tr>
          <tr><th>Available from:</th><td>{{ new Date(getPerson(activeIndex).availableFrom).toLocaleDateString() }}</td></tr>
          <tr><th>Available till:</th><td>{{ new Date(getPerson(activeIndex).availableTill).toLocaleDateString() }}</td></tr>
          <tr><th>Availability:</th><td>{{ getPerson(activeIndex).availableType }}</td></tr>
          <tr><th>Can Travel:</th><td>{{ getPerson(activeIndex).canTravel }}</td></tr>
          <tr><th></th><td>{{ getPerson(activeIndex).canTravelComment }}</td></tr>
          <tr><th>Business Unit:</th><td>{{ getPerson(activeIndex).businessArea }}</td></tr>
        </table>
      </div>
    </ProfileSection>
    <ProfileSection anchor="about" title="About Me"><div class="about" v-html="fakeText"></div></ProfileSection>
    <ProfileSection bgTheme="bg2" anchor="skillset" title="Skillset">
      <div class="tag-wrapper" >
          <TagComponent v-for="(skill, index) in getPerson(activeIndex).workingTitles" :key="index" :text="skill"  />
      </div>
    </ProfileSection>
    <ProfileSection v-if="getPerson(activeIndex).consultantBio.cvLink" anchor="full-cv" title="Full CV">
      <div class="full-cv-wrapper">
        <a :href="getPerson(activeIndex).consultantBio.cvLink" target="_blank">Link to full CV</a>
      </div>
    </ProfileSection>
    <!--<ProfileSection bgTheme="bg1" anchor="contact-info" title="Contact information">
      <div class="tag-wrapper">
        <TagComponent icon="phone" :text="'042141234'" />
        <TagComponent icon="envelope" :text="'lorem@ipsum.com'" />
      </div>
    </ProfileSection>-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Bio from ".././components/Bio.vue";
import ProfileTop from ".././components/ProfileTop.vue";
import ProfileSection from ".././components/ProfileSection.vue";
import { Consultant } from ".././components/Table.vue";
import TagComponent from ".././components/TagComponent.vue";

export default defineComponent({
  name: 'ConsultantView',
  components: {
    ProfileTop,
    TagComponent,
    ProfileSection
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
      return this.availableConsultants[newPerson]?.consultantDetails ?? null;
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
    margin: 0rem 0 1rem;
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

  div.profile-wrapper{
    table{
      th{
        opacity: 0.6;
        text-align: left;
        font-weight: 300;
        padding: 0.25rem 0;
        padding-right: 1.5rem;
      }
      td{
        font-weight: 700;
      }

    }
  }
  div.full-cv-wrapper{
    a{
      color: white;
    }
  }

  div.sticky{
    grid-column: full;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 1rem;
    background-color: black;
    @include main-grid;

    div{
      grid-column: main;
      display: flex;
      justify-content: space-between;
    }
  }


  ul.anchor-links{
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1.5rem;

    a{
      color: #ccc;
      text-decoration: none;

      &:hover{
        color: #fff;
      }
    }
  }

  ul.info{
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      gap: 1.5rem;
      align-items: center;
  }


  p.availability {
    border: 1px solid #999;
    width: 3rem;
    height: 3rem;
    line-height: 1rem;
    font-weight: bold;
    margin: 0;
    font-size: var(--font-s);
    padding: 1rem 0.25rem;
    text-align: center;
    border-radius: 1.5rem;
  }

  p.experience {
    border: 1px solid #999;
    width: 3rem;
    height: 3rem;
    line-height: 1rem;
    font-weight: bold;
    margin: 0;
    font-size: var(--font-m);
    padding: 0.5rem 0.25rem;
    text-align: center;
    border-radius: 0.5rem;

    span {
      display: block;
      font-size: var(--font-s);
      opacity: 0.4;
    }
  }

  img.can-travel {
    width: 3rem;
    height: 3rem;
  }
}
</style>