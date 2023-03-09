<template>
  <div class="home-container">
    <div class="inner">
      <h1><span>Consultants</span></h1>
      <TableComponent @tableClick="goToProfile(activeConsultant)" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TableComponent from '../components/Table.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    TableComponent,
  },
  data() {
    return {
    }
  },
  methods: {
    goToProfile(id: number) {
      this.$router.push({ name: 'ConsultantDetails'});
    }
  },
  computed: {
    activeConsultant(): number {
      return this.$store.getters.active;
    },
  },
})
</script>

<style lang="scss">

@import '../assets/scss/base';
.home-container {
  @include main-grid;
  padding: 3rem 0;
}

div.inner{
  grid-column: main;
}
</style>