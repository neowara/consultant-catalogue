<template>
  <div class="bio-container" :style="{'--bg-color': backgroundColor }" v-html="content"></div>
</template>

<script>
export default {
  name: "BioComponent",
  props: {
    content: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.bio-container {
  font-size: 18px;
  line-height: 1.5;
  border-radius: 10px;
  font-weight: 500;
  max-width: 49.5%;
  padding: 20px;
  margin: 10px 0 0 0;
  background-color: var(--bg-color);
  color: black;
}
</style>
