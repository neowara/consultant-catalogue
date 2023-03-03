<template>
<div v-if="person.links.length > 0">
    <h2><span>Design Link Tips</span></h2>
    <ul class="links-wrapper">
      <li v-for="(link, i) of person.links" :key="i">
        <a class="link" :href="link.url"><span>{{ link.title }}</span>
          <img src="../assets/svg/arrow-right.svg" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LinksComponent",
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
ul.links-wrapper {
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  padding: 0;
  border: 1px solid #333;
  border-radius: 0.25rem;
}

a.link {
  display: flex;
  padding: 1rem 1rem;
  background-color: #161616;
  border-bottom: 1px solid #333;
  color: white;
  font-weight: bold;
  text-decoration: none;
  justify-content: space-between;
  align-items: center;

  img {
    width: 0.75rem;
    height: 0.75rem;
  }
}
</style>
