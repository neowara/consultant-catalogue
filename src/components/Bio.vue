<template>
  <div class="bio-wrapper" v-html="person.shortBio"></div>
</template>

<script>
export default {
  name: "Bio",
  props: {
    person: Object,
  },
};
</script>

<style scoped lang="scss">
div.bio-wrapper {
  padding: 2rem 2rem 0;
}
</style>
