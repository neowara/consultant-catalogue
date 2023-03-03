<template>
  <div v-if="person" class="profile-top-wrapper">
    <div class="title-wrapper">
      <h1>
        <span>{{ person.name }}</span> <span>{{ person.lastname }}</span>
      </h1>
      <h3>{{ person.workTitle }}</h3>
    </div>
    <div class="overlay" />
    <img class="profile-pic" :src="person.picture" />
  </div>
</template>

<script>
export default {
  name: "ProfileTop",
  props: {
    person: {
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
}

div.overlay {
  display: block;
  position: absolute;
  height: 40%;
  left: 0;
  bottom: 5rem;
  right: 0;
  z-index: 1;
  background: linear-gradient(
    0deg,
    rgba(18, 18, 18, 1) 0%,
    rgba(18, 18, 18, 0) 100%
  );
}

div.title-wrapper {
  position: absolute;
  z-index: 2;
  bottom: 0;
  width: 90%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  }
}
</style>
