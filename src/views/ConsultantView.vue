# Vue view page that display the details of a consultant 

<template>
  <div class="consultant-details-wrapper">
    <ProfileSection :usePadding="false">
      <div class="breadcrumb">
        <ul>
          <li>
<router-link to="/">
Consultant list
</router-link>
</li>
          <li><p>{{ getPerson(activeIndex).name ?? "" }}</p></li>
        </ul>
      </div>
      <ProfileTop :consultantDetails="getPerson(activeIndex)" />
    </ProfileSection>
    <div class="sticky">
      <div>
      <ul class="anchor-links">
        <li><a href="#profile">Profile</a></li>
        <li><a href="#skillset">Skillset</a></li>
        <li><a href="#about">About</a></li>
        <li v-if="getPerson(activeIndex).consultantBio?.cvLink">
<a href="#full-cv">Full CV</a>
</li>
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
    <ProfileSplitSection bgTheme="bg1" anchor="profile" anchor2="skillset" title="Profile" title2="Skillset">
      <template #left>
        <div class="profile-wrapper">
          <table>
            <tr><th>Years of Experience:</th><td>{{ getPerson(activeIndex).experienceInYears }}</td></tr>
            <tr><th>Languages:</th><td>Swedish, English</td></tr>
            <tr><th>Location:</th><td>{{ getPerson(activeIndex).location }}</td></tr>
            <tr><th>Available from:</th><td>{{ new Date(getPerson(activeIndex).availableFrom).toLocaleDateString() }}</td></tr>
            <tr><th>Available till:</th><td>{{ new Date(getPerson(activeIndex).availableTill).toLocaleDateString() }}</td></tr>
            <tr><th>Availability:</th><td>{{ getPerson(activeIndex).availableType }}</td></tr>
            <tr><th>Can Travel:</th><td>{{ getPerson(activeIndex).canTravel ? "Yes" : "No" }}</td></tr>
            <tr v-if="getPerson(activeIndex).canTravelComment">
<th></th><td>{{ getPerson(activeIndex).canTravelComment }}</td>
</tr>
            <tr><th>Business Unit:</th><td>{{ getPerson(activeIndex).businessArea }}</td></tr>
          </table>
        </div>
      </template>
      <template #right>
        <div class="tag-wrapper">
          <TagComponent v-for="(skill, index) in getPerson(activeIndex).workingTitles" :key="index" :text="skill" />
        </div>
      </template>
    </ProfileSplitSection>
    <ProfileSplitSection anchor="about" anchor2="full-cv" title="About Me" title2="Full CV">
      <template #left>
<div class="about" v-html="getPerson(activeIndex).consultantBio?.ingress"></div>
</template>
      <template #right>
        <div v-if="getPerson(activeIndex).consultantBio" class="full-cv-wrapper">
          <a :href="getPerson(activeIndex).consultantBio.cvLink" target="_blank" class="full-cv-link"><span>Link to full CV</span></a>
        </div>
      </template>
    </ProfileSplitSection>
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
import ProfileSplitSection from ".././components/ProfileSplitSection.vue";
import { Consultant } from ".././components/Table.vue";
import TagComponent from ".././components/TagComponent.vue";

export default defineComponent({
  name: 'ConsultantView',
  components: {
    ProfileTop,
    TagComponent,
    ProfileSection,
    ProfileSplitSection
  },
  computed: {
    activeIndex() {
      return this.$store.getters.active;
    },
    availableConsultants(): Array<Consultant> {
      return this.$store.state.consultants;
    },
  },
  mounted(){
    window.scrollTo(0,0);
  },
  methods: {
    setNewPerson(newPerson: string | number) {
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

    a {
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

  div.profile-wrapper {
    table {
      th {
        opacity: 0.6;
        text-align: left;
        font-weight: 300;
        padding: 0.25rem 0;
        padding-right: 1.5rem;
      }

      td {
        font-weight: 700;
      }

    }
  }

  div.full-cv-wrapper {
    a {
      color: white;
    }
  }

  div.sticky {
    grid-column: full;
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 1rem;
    background-color: black;
    @include main-grid;

    div {
      grid-column: main;
      display: flex;
      justify-content: space-between;
    }
  }


  ul.anchor-links {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 2rem;

    a {
      color: #ccc;
      text-decoration: none;

      &:hover {
        color: #fff;
      }
    }
  }

  ul.info {
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

div.breadcrumb{
  padding: 1rem 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  ul{
    list-style: none;
    display: flex;
    gap: 1rem;
    padding: 0;
    margin: 0;

    li{
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    li::after{
      display: flex;
      content: " ";
      border: solid white;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 2px;
      margin: 0;
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }

    li:last-child::after{
      display: none;
    }

    p{
      margin: 0;
      opacity: 0.5;
    }


    a, a:visited {
      color: white;
      font-weight: bold;
      text-decoration: none;
    }
  }
}

a.full-cv-link{
  display: inline-flex;
  align-items: center;
  width: auto;
  flex: auto;
  background-color: var(--color-dark-accent);
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  cursor: pointer;

  &:hover{
    background-color: var(--color-light-accent);
  }

  &::after{
    display: flex;
    content: " ";
    border: solid white;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 2px;
    margin-left: 0.5rem;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }
}
</style>
