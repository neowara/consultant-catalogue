<template>
  <div v-if="consultantDetails" class="profile-top-wrapper">
    <div class="title-wrapper">
      <h1>
        {{ consultantDetails.name }}
      </h1>
      <h3>{{ consultantDetails.workTitleShortDesc }}</h3>
    </div>
    <img v-if="consultantDetails.consultantBio" class="profile-pic" :src="consultantDetails.consultantBio.profilePic" />
  </div>
</template>

<script>
export default {
  name: "ProfileTop",
  props: {
    consultantDetails: {
      type: Object,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.profile-top-wrapper {
  display: flex;
  width: 100%;
  position: relative;
  padding-bottom: 5rem;
}

img.profile-pic {
  display: block;
  width: 100%;
  height: auto;
  max-width: 500px;
  max-height: 400px;
  padding: 50px 70px;
}

div.overlay {
  display: block;
  position: absolute;
  height: 40%;
  left: 0;
  bottom: 5rem;
  right: 0;
  z-index: 1;
  background: linear-gradient(0deg,
      rgba(18, 18, 18, 1) 0%,
      rgba(18, 18, 18, 0) 100%);
}

div.title-wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  order: 2;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: flex-start;
  justify-content: center;

  h1 {
    display: flex;
    flex-direction: column;
    font-family: Inter;
    font-weight: 800;
    font-variation-settings: "slnt" -10;
    text-transform: uppercase;
    align-items: center;
    font-size: 3rem;
    margin: 0;

    span {
      display: inline-flex;
      padding: 0rem 0.5rem;
      background-color: var(--color-annevo-orange);
      margin: 0.25rem;
    }
  }

  h3 {
    font-weight: 400;
    color: #9747FF;
  }
}
</style>
