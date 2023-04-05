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
          <li>
            <p>{{ activeIndex.consultantDetails.name ?? "" }}</p>
          </li>
        </ul>
      </div>
      <ProfileTop :desc="activeIndex.consultantDetails.workTitleShortDesc" :picture="activeIndex.consultantDetails.consultantBio.profilePic" :name="activeIndex.consultantDetails.name" />
    </ProfileSection>
    <div class="sticky">
      <div>
        <ul class="anchor-links">
          <li><a href="#profile">Profile</a></li>
          <li><a href="#skillset">Skillset</a></li>
          <li><a href="#about">About</a></li>
          <li v-if="activeIndex.consultantDetails.consultantBio?.cvLink">
            <a href="#full-cv">CV</a>
          </li>
        </ul>
      </div>
    </div>
    <ProfileSplitSection bgTheme="bg1" anchor="profile" anchor2="skillset" title="Profile" title2="Skillset">
      <template #left>
        <div class="profile-wrapper">
          <table>
            <tr>
              <th>Years of Experience:</th>
              <td>{{ activeIndex.consultantDetails.experienceInYears }}</td>
            </tr>
            <tr>
              <th>Languages:</th>
              <td>Swedish, English</td>
            </tr>
            <tr>
              <th>Location:</th>
              <td>{{ activeIndex.consultantDetails.location }}</td>
            </tr>
            <tr>
              <th>Available from:</th>
              <td>{{ new Date(activeIndex.consultantDetails.availableFrom).toLocaleDateString() }}</td>
            </tr>
            <tr>
              <th>Available till:</th>
              <td>{{ new Date(activeIndex.consultantDetails.availableTill).toLocaleDateString() }}</td>
            </tr>
            <tr>
              <th>Availability:</th>
              <td>{{ activeIndex.consultantDetails.availableType }}</td>
            </tr>
            <tr>
              <th>Can Travel:</th>
              <td>{{ activeIndex.consultantDetails.canTravel ? "Yes" : "No" }}</td>
            </tr>
            <tr v-if="activeIndex.consultantDetails.canTravelComment">
              <th></th>
              <td>{{ activeIndex.consultantDetails.canTravelComment }}</td>
            </tr>
            <tr>
              <th>Business Unit:</th>
              <td>{{ activeIndex.consultantDetails.businessArea }}</td>
            </tr>
          </table>
        </div>
      </template>
      <template #right>
        <div class="tag-wrapper">
          <TagComponent
v-for="(skill, index) in activeIndex.consultantDetails.workingTitles" :key="index"
            :text="skill"
/>
        </div>
      </template>
    </ProfileSplitSection>
    <ProfileSplitSection anchor="about" anchor2="full-cv" title="About Me" title2="CV">
      <template #left>
        <div class="about" v-html="activeIndex.consultantDetails.consultantBio?.ingress"></div>
      </template>
      <template #right>
        <div v-if="activeIndex.consultantDetails.consultantBio" class="full-cv-wrapper">
          <a :href="activeIndex.consultantDetails.consultantBio.cvLink" target="_blank" class="full-cv-link"><span>Link to
              full CV</span></a>
        </div>
      </template>
  </ProfileSplitSection>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Bio from ".././components/Bio.vue";
import ProfileTop from ".././components/ProfileTop.vue";
import ProfileSection from ".././components/ProfileSection.vue";
import ProfileSplitSection from ".././components/ProfileSplitSection.vue";
import TagComponent from ".././components/TagComponent.vue";
import { IConsultant } from '@/types/consultant';

export default defineComponent({
  name: 'ConsultantView',
  components: {
    ProfileTop,
    TagComponent,
    ProfileSection,
    ProfileSplitSection
  },
  computed: {
    activeIndex():IConsultant {
      const id = this.$route.params.id;
      if(id){
        const consultant = this.$store.state.consultants?.find((obj) => {
          return (obj as IConsultant).consultantDetails.id === id;
        });
        return consultant;
      }
      else{
        return this.$store.getters.active;
      }
    },
    availableConsultants(): Array<IConsultant> {
      return this.$store.state.consultants;
    },
  },
  mounted() {
    window.scrollTo(0, 0);
    this.$store.dispatch("setActiveId", this.$route.params.id);
  },
  methods: {
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
    padding: 1rem 0;
    background-color: black;
    @include main-grid;

    div {
      grid-column: main;
      display: flex;
      justify-content: space-between;
    }

    @media only screen and (max-width: 500px) {
        padding: 0.25rem 0;
        margin-bottom: 1rem;
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
      font-size: var(--font-m);

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

div.breadcrumb {
  padding: 1rem 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  ul {
    list-style: none;
    display: flex;
    gap: 1rem;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    li::after {
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

    li:last-child::after {
      display: none;
    }

    p {
      margin: 0;
      opacity: 0.5;
    }


    a,
    a:visited {
      color: white;
      font-weight: bold;
      text-decoration: none;
    }
  }
}

a.full-cv-link {
  display: inline-flex;
  align-items: center;
  width: auto;
  flex: auto;
  background-color: var(--color-dark-accent);
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: var(--color-light-accent);
  }

  &::after {
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