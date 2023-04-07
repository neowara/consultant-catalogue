<template>
  <button class="filter-btn" @click="clickAction(filter)">
        <span>{{ filter }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" view-box="0 0 24 24"><path fill="#fff" fill-rule="evenodd" d="M13 4.5a.5.5 0 0 1 .5.5v5.5H19a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-5.5V19a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5.5H5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h5.5V5a.5.5 0 0 1 .5-.5h2Z"/></svg>
      </button>
</template>

<script>
export default {
  name: "FilterButton",
  props: {
    filter: {
      type: String,
      required: true,
    },
  },
  methods: {
    clickAction(name) {
      this.$emit("click", name);
    },
  },
};
</script>

<style scoped lang="scss">
 .filter-btn {
      background-color: #000;
      border: 1px solid #666;
      color: #ccc;
      display: flex;
      align-items: center;
      align-content: center;
      padding: 0.5rem 1rem;
      padding-right: 0.75rem;
      height: 3rem;
      min-height: 3rem;
      border-radius: 0.25rem;
      cursor: pointer;
      overflow: visible;

      &:hover{
        border-color: #ddd;
        color: white;

        svg path{
          fill: white;
        }
      }

    svg{
      display: inline-flex;
      width: 1.5rem;
      height: 1.5rem;
      min-width: 1.5rem;
      margin-left: 0.5rem;
      overflow: visible;

      path{
        fill: #aaa;
      }
    }
  }
</style>
