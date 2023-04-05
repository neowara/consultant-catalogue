<template>
  <li class="responsive-table-row">
    <div class="name">
      Name
    </div>
    <div class="titles">
      Work title
    </div>
    <div class="city">
      Location
    </div>
    <div class="available">
      Available from
    </div>
    <div class="badges"></div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PropType } from "vue/types/umd";

export default defineComponent({
  name: "ResponsiveTitleRow",
  components: {},
  props: {
  },

  computed: {
    //...mapGetters(["filterByName"]),
  },
  methods: {
  },
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
li.responsive-table-row {
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1.5fr;
  gap: 1.5rem;
  padding: 1rem 0;
  border-bottom: 1px solid #222;
  color: white;
  align-content: center;
  align-items: center;
  position: relative;
  color: #FF875A;
  font-size: var(--font-s);
}
</style>
