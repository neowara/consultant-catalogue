<template>
  <div class="home-container">
    <TableComponent />
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
  },
  computed: {
    activeConsultant(): number {
      return this.$store.getters.active;
    },
  },
})
</script>

<style lang="scss">
</style>