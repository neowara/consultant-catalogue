<template>
  <div class="home-container">
    <div class="inner">
      <h1><span>Consultants</span></h1>
      <TableComponent @tableClick="$event => goToProfile($event)" />
    </div>
  </div>
</template>

<script lang="ts">
import { IConsultant } from '@/types/consultant';
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
    goToProfile(user: IConsultant) {
      this.$store.dispatch("setActive", user);
      this.$router.push({ name: 'ConsultantDetails', params: { id: user.consultantDetails.id } });
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
.home-container {
  @include main-grid;
  padding: 3rem 0;
}

div.inner {
  grid-column: main;
}
</style>