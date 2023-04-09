<template>
  <li class="responsive-table-row">
    <div class="name">
      <router-link :to="`consultant/${id}`">{{ name }}
      <span>{{ businessArea }}</span></router-link>
    </div>
    <div class="titles" @click="goToConsultant">
      {{ workingTitles.join(", ") }} 
      <span>{{ workTitleShortDesc }}</span>
    </div>
    <div class="city" @click="goToConsultant">
      {{ city }} 
    </div>
    <div class="available" @click="goToConsultant">
      {{ new Date(availableFrom).toLocaleDateString() }} 
    </div>
    <div class="badges">
      <p 
      class="experience" :class="parseInt(experienceInYears) > 5 && 'gold'"
      title="Years of Experience"
      >
      {{ experienceInYears }}<span>Years</span>
      </p>
      <p class="availability" title="Availability">
        {{ parseFloat(availableType) }}%
      </p>
      <img 
        v-if="canTravel" class="can-travel" src="../assets/svg/canTravel.svg"
        title="Can Travel" alt="Can Travel" 
      />
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { PropType } from "vue/types/umd";

export default defineComponent({
  name: "ResponsiveTableRow",
  components: {},
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    businessArea: {
      type: String,
      required: true,
    },
    workingTitles: {
      type: Array as PropType<string[]>,
      required: true,
    },
    workTitleShortDesc: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    availableFrom: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: String,
      required: true,
    },
    availableType:{
      type: String,
      required: true,
    },
    canTravel:{
      type: Boolean,
      required: true,
    },
  },

  computed: {
    //...mapGetters(["filterByName"]),
  },
  methods: {
    goToConsultant() {
      this.$router.push({ path: `/consultant/${this.id}` })
    },
  },
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
li.responsive-table-row {
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1.5fr;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid #222;
  color: white;
  align-content: center;
  align-items: center;
  position: relative;

  &:hover{
    background-color: #111;
    cursor: pointer;
  }

  a{
    color: white;
    text-decoration: none;

    &:focus{
      outline: none;

    &::before {
      content: " ";
      position: absolute;
      left: -1.5rem;
      top: 0;
      width: calc(100% + 3rem);
      height: 100%;
      z-index: 0;
      box-shadow: inset 0px 0px 0px 3px white;
    }
  }
}

  div{
    span{
      display: block;
      font-size: var(--font-s);
      opacity: 0.4;
    }
  }
}

div.badges{
  display: flex;
  gap: 1.5rem;
  align-items: center;
}


p.availability {
  border: 1px solid #999;
  width: 3rem;
  height: 3rem;
  line-height: 0.9rem;
  font-weight: bold;
  margin: 0;
  font-size: var(--font-s);
  padding: 1rem 0.25rem;
  text-align: center;
  border-radius: 1.5rem;
}

p.experience {
  border: 1px solid #999;
  width: 3rem;
  height: 3rem;
  line-height: 1rem;
  font-weight: bold;
  margin: 0;
  font-size: 1.25rem;
  padding: 0.65rem 0.25rem;
  text-align: center;
  border-radius: 0.25rem;

  &.gold {
    color: #D8BE7E;
    border-color: #D8BE7E;
  }

  span {
    display: block;
    font-size: var(--font-xs);
    line-height: 0.8rem;
    opacity: 0.4;
  }
}

img.can-travel {
  width: 1.75rem;
  height: 1.75rem;
}
</style>
