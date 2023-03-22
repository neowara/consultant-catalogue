<template>
  <section class="full-width" :class="[bgTheme, usePadding && 'padding']">
    <div class="inner">
      <a v-if="anchor" :id="anchor" />
      <h2 v-if="title" v-html="title" />
      <slot />
    </div>
  </section>
</template>

<script lang="ts">

export default {
  name: "ProfileSection",
  props: {
    bgTheme: {
      type: String,
      required: false,
      default: ""
    },
    anchor: {
      type: String,
      required: false,
      default: undefined
    },
    title: {
      type: String,
      required: false,
      default: undefined
    },
    usePadding: {
      type: Boolean,
      required: false,
      default: true,
    }
  }
};
</script>

<style scoped lang="scss">
section.full-width {
  grid-column: full;
  @include main-grid;

  h2{
    padding-top: 4rem;
    font-size: var(--font-xl);
  }

  &.padding{
    padding: 0rem 0 4rem 0;
  }

  .inner{
    grid-column: main;
    position: relative;
  }

  &.bg1{
    background-color: rgba(var(--color-dark-accent-raw), 0.15);
  }
  &.bg2{
    background-color: #111;
  }
}
</style>
