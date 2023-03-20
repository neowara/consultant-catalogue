<template>
  <div v-if="consultantDetails" class="profile-top-wrapper">
    <div class="title-wrapper">
      <h1>
        {{ consultantDetails.name }}
      </h1>
      <h3>{{ consultantDetails.workTitleShortDesc }}</h3>
      <ul class="anchor-links">
        <li><a href="#profile">Profile</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skillset">Skillset</a></li>
        <li><a href="#full-cv">Full CV</a></li>
        <li><a href="#contact-info">Contact info</a></li>
      </ul>
    </div>
    <!--<img v-if="consultantDetails.consultantBio" class="profile-pic" :src="consultantDetails.consultantBio.profilePic" />-->
    <div class="image-wrapper">
      <img v-if="consultantDetails.consultantBio" class="profile-pic" src="https://previews.dropbox.com/p/thumb/AB3kX4pDvTLfM6fzEXwyS8zHUJd1Piy2dK7BmCt0m-lqs3DSnqCA8kCdVOzYUFmjXl-T5FRWJYAbCvPw-vxztBGPy3nl3Obq7jT8TyuHevgwaIvy_hc_tbzcX91-FA9WLGfqG4f3R-ar8FY8ArwwvypY7chqZfyIDLnuPHwsv2yQGAAn8RWBv1zKAxWlNmgkwjbll9BdLekoFMHfwgh-Ud-LiXs1b1hHNznBHvWVypiSqymix1uFOVvxToKnUW-9qgWewKkDwYj6qipZfNToaBsjn4p6uH1uShNwVIaqEiKq5j4DIwQcL9Isg-wn7XycyQ4_RB4tK1SlCrmt-_2N4hlcnoJwZrmdDOQXbQrOtVH_LLH1cY29OZIPcPTXDSIsvyA/p.jpeg" />
    </div>
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
  grid-column: main;
  padding: 0rem 0 2rem;
}

div.image-wrapper{
  max-width: 35rem;
  max-height: 60rem;
  display: block;
  width: 100%;
  order: 2;
  position: relative;
}
img.profile-pic {
  display: block;
  width: 100%;
  order: 2;
  height: auto;
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
    max-width: 25rem;
    line-height: 85px;

    span {
      display: inline-flex;
      padding: 0rem 0.5rem;
      background-color: var(--color-annevo-orange);
      margin: 0.25rem;
    }
  }

  h3 {
    font-weight: 300;
    color: #9747FF;
    font-size: 30px;
  }

  ul.anchor-links{
    list-style: none;
    padding: 3rem 0 0;
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
}
</style>
