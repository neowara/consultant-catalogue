<template>
  <div class="home-container">
    <div class="inner">
      <h1><span>Consultants</span></h1>
      <p class="count-indicator">Found in database: {{ availableConsultantsCount }}</p>
      <TableComponent @tableClick="$event => goToProfile($event)" />
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
    goToProfile(id: string) {
      this.$store.dispatch("setActive", id);
      this.$router.push({ name: 'ConsultantDetails', params: { id } });
    }
  },
  computed: {
    activeConsultant(): number {
      return this.$store.getters.active;
    },
    availableConsultantsCount(): Number {
      return this.$store.state.consultants.length;
    },
  },
})
</script>

<style lang="scss">

.home-container {
  @include main-grid;
  padding: 3rem 0;
}

div.inner{
  grid-column: main;
}

p.count-indicator{
  margin: 0;
  opacity: 0.33;
}
</style>