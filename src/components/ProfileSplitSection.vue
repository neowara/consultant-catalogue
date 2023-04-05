<template>
  <section class="full-width" :class="[bgTheme, usePadding && 'padding']">
    <div class="inner">
      <div class="left">
        <a v-if="anchor" :id="anchor" />
        <h2 v-if="title" v-html="title" />
        <slot name="left"></slot>
      </div>
      <div class="right">
        <a v-if="anchor2" :id="anchor2" />
        <h2 v-if="title2" v-html="title2" />
        <slot name="right"></slot>
      </div>
    </div>
  </section>
</template>

<script lang="ts">

export default {
  name: "ProfileSplitSection",
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
    anchor2: {
      type: String,
      required: false,
      default: undefined
    },
    title: {
      type: String,
      required: false,
      default: undefined
    },
    title2: {
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
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 3rem;

    @media only screen and (max-width: 500px) {
        grid-template-columns: 1fr;
      }
  }

  &.bg1{
    background-color: rgba(var(--color-dark-accent-raw), 0.15);
  }
  &.bg2{
    background-color: #111;
  }
}
</style>
