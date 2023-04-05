<template>
  <div v-if="name" class="profile-top-wrapper">
    <div class="title-wrapper">
      <h1>
        {{ name }}
        <span>{{ desc }}</span>
      </h1>
    </div>
    <div class="image-wrapper">
       <img v-if="picture" class="profile-pic" :src="picture" />
    </div>
  </div>
</template>

<script lang="ts">
import { IConsultantDetails } from '@/types/consultant';

export default {
  name: "ProfileTop",
  props: {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
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

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    min-height: 136vw;
  }

}

div.image-wrapper{
  display: block;
  width: 100%;
  padding-bottom: 133%;
  order: 2;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 500px) {
    position: absolute;
    left: -1rem;
    width: calc(100% + 2rem);
    top: 3.5rem;
    z-index: 0;
  }
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

  @media only screen and (max-width: 500px) {
    position: relative;
    z-index: 1;
    justify-content: flex-end;
    padding: 0 0 1.5rem;
  }

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

    @media only screen and (max-width: 500px) {
      font-size: 4rem;
      line-height: 3.5rem;
      text-shadow: 0 0.25rem 0.25rem rgba(0,0,0,0.5);
    }

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
      line-height: 2rem;

      @media only screen and (max-width: 500px) {
        font-size: 1.25rem;
        line-height: 1.5rem;
        text-shadow: 0 0.25rem 0.25rem rgba(0,0,0,0.5);
      }

    }
  }

}
</style>
