<template>
  <div class="tag">
    <div class="tag__icon">
      <font-awesome-icon :icon="icon" color="black" />
    </div>
    <div class="tag__text">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TagComponent",
  props: {
    icon: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.tag {
  display: flex;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 0.5rem;
  padding: 0 10px;
  margin-right: 10px;
  max-width: fit-content;

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
  }

  &__text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 500;
    color: #222;
    white-space: nowrap;

    p {
      font-size: 14px;
      font-weight: 600;
    }
  }
}
</style>