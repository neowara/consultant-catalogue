<template>
  <div class="gif-wrapper">
    <img :src="person.favoriteGif" alt="Favorite Gif" />
  </div>
</template>

<script>
export default {
  name: "FavoriteGif",
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
div.gif-wrapper {
  padding: 2rem;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
  }
}
</style>
