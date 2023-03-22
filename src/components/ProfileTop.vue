<template>
  <div v-if="consultantDetails" class="profile-top-wrapper">
    <div class="title-wrapper">
      <h1>
        {{ consultantDetails.name }}
        <span>{{ consultantDetails.workTitleShortDesc }}</span>
      </h1>
    </div>
    <div class="image-wrapper">
       <img v-if="consultantDetails.consultantBio" class="profile-pic" :src="consultantDetails.consultantBio.profilePic" />
    </div>
  </div>
</template>

<script lang="ts">
import { Consultant } from './Table.vue';

export default {
  name: "ProfileTop",
  props: {
    consultantDetails: {
      type: Object,
      required: true,
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.profile-top-wrapper {
  display: grid;
  width: 100%;
  grid-template-columns: 3fr 2fr;
  gap: 3rem;
  position: relative;
  padding: 0;
  z-index: 3;
}

div.image-wrapper{
  display: block;
  width: 100%;
  padding-bottom: 133%;
  order: 2;
  position: relative;
  overflow: hidden;
}
img.profile-pic {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  order: 3;
  height: 100%;
  object-fit: cover;
}

div.image-wrapper::after{
  content: " ";
  display: block;
  position: absolute;
  height: 40%;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  background: linear-gradient(0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%);
}


div.title-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  order: 1;
  flex: 1;
  padding: 4rem 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    font-variation-settings: "slnt" -10;
    align-items: center;
    font-size: 6rem;
    margin: 0;
    max-width: 35rem;
    line-height: 5.5rem;

    span{
      display: block;
      margin: 0;
      flex: 1;
      width: 100%;
      font-weight: 300;
      color: var(--color-light-accent);
      font-size: 2rem;
      letter-spacing: normal;
      border: 0;
      margin-top: 1rem;
      line-height: 2.4rem;
    }
  }

}
</style>
