<template>
  <div class="bottom-nav-wrapper">
    <button v-if="prev" class="prev" :title="prevIndex" @click="Prev(prevIndex)">
      <img src="../assets/svg/arrow-right.svg" />
      <span>{{ prev.name }} {{ prev.lastname }}</span>
    </button>
    <div class="seperator" />
    <button v-if="next" class="next" :title="nextIndex" @click="Next(nextIndex)">
      <span>{{ next.name }} {{ next.lastname }}</span>
      <img src="../assets/svg/arrow-right.svg" />
    </button>
  </div>
</template>

<script>
export default {
  name: "BottomNav",
  props: {
    next: {
      type: Object,
      required: true,
    },
    prev: {
      type: Object,
      required: true,
    },
    nextIndex: {
      type: Number,
      required: true,
    },
    prevIndex: {
      type: Number,
      required: true,
    },
  },
  methods: {
    Next(index) {
      this.$emit("next-person", index);
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 250);
    },
    Prev(index) {
      this.$emit("prev-person", index);
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 250);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.bottom-nav-wrapper {
  display: flex;
  justify-content: space-between;
  padding-bottom: 2rem;

  .seperator {
    width: 1px;
    background-color: #333;
    height: 4rem;
    margin: 2rem;
  }

  button {
    width: 50%;
    padding: 2rem;
    color: white;
    background-color: transparent;
    border: 0;
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
      width: 1rem;
      height: 1rem;
    }

    span {
      padding: 0.5rem;
      word-wrap: break-word;
      text-align: left;
    }

    &.prev img {
      transform: rotate(-180deg);
    }

    &.next {
      justify-content: flex-end;

      span {
        text-align: right;
      }
    }
  }
}
</style>
