<template>
  <ul class="fun-facts-wrapper">
    <li v-for="(fact, i) of person.funFacts" :key="i">
      <font-awesome-icon :icon="fact.icon" />
      <p>{{ fact.description }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FunFacts",
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
ul.fun-facts-wrapper {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 2rem;

  li {
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    p {
      font-size: 0.85rem;
      margin: 0.5rem 0;
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>
