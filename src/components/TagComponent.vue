<template>
  <div class="tag">
    <div v-if="icon" class="tag__icon">
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
      required: false,
      default: "",
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
  color: #ddd;
  background-color: #000;
  border: 1px solid #aaa;
  border-radius: 1.5rem;
  height: 3rem;
  padding: 0 1rem;
  margin-right: 0.5rem;
  max-width: fit-content;

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    
    svg{
      color: #ddd;
    }
  }

  &__text {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 500;
    color: #ddd;
    white-space: nowrap;

    p {
      font-size: 14px;
      font-weight: 600;
    }
  }
}
</style>