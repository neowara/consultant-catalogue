# Vue table component with pagination, sorting and filtering. # This component
is used in the main page to display the list of users. # The table has 5
columns: Name, Work title, location, available from, and actions. # The table is
sortable by clicking on the column header.

<template>
  <div class="table-wrapper">
    <SearchComponent />
    <ul class="responsive-table-wrapper">
      <ResponsiveTableRow v-for="(data, index) of filterByName" 
      :key="index"
      :name="data.consultantDetails.name"
      :businessArea="data.consultantDetails.businessArea"
      :workingTitles="data.consultantDetails.workingTitles"
      :workTitleShortDesc="data.consultantDetails.workTitleShortDesc"
      :city="data.consultantDetails.location"
      :availableFrom="data.consultantDetails.availableFrom"
      :experienceInYears="data.consultantDetails.experienceInYears"
      :canTravel="data.consultantDetails.canTravel"
      :availableType="data.consultantDetails.availableType"
      :id="data.consultantDetails.id"
      />
    </ul>

    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Work title</th>
          <th>Location</th>
          <th>Available from</th>
          <th width="160"></th>
        </tr>
      </thead>
      <tbody v-for="(data, index) of filterByName" :key="index" :class="index">
        <tr @click="$emit('tableClick', data)">
          <td>
            {{ data.consultantDetails.name
            }}<span>{{ data.consultantDetails.businessArea }}</span>
          </td>
          <td>
            {{ data.consultantDetails.workingTitles.join(", ") }}<span>{{ data.consultantDetails.workTitleShortDesc
            }}</span>
          </td>
          <td>{{ data.consultantDetails.location }}</td>
          <td>{{ data.consultantDetails.availableFrom.split(" ")[0] }}</td>
          <td class="info">
            <p 
              class="experience" :class="data.consultantDetails.experienceInYears > 5 && 'gold'"
              title="Years of Experience"
              >
              {{ data.consultantDetails.experienceInYears }}<span>Years</span>
            </p>
            <p class="availability" title="Availability">
              {{ parseFloat(data.consultantDetails.availableType) }}%
            </p>
            <img 
                v-if="data.consultantDetails.canTravel" class="can-travel" src="../assets/svg/canTravel.svg"
                title="Can Travel" alt="Can Travel" 
              />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import SearchComponent from "./Search.vue";
import { mapGetters } from "vuex";
import ResponsiveTableRow from "./ResponsiveTableRow.vue";


export default defineComponent({
  name: "TableComponent",
  components: {
    SearchComponent,
    ResponsiveTableRow
},
  props: {
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(["filterByName"]),
  },
  methods: {
  },
});
</script>

<style scoped lang="scss">

.responsive-table-wrapper{
  list-style: none;
  padding: 0;
  margin: 0;
}
.table-wrapper {
  width: 100%;
  overflow: visible;
}

.table {
  border-collapse: collapse;
  width: 100%;
}

.table td,
.table th {
  border-bottom: 1px solid #222;
  padding: 1.5rem 0;
}

.table th {
  padding: 0.75rem 0;
}

.table tr:hover td {
  background-color: #111;
  cursor: pointer;
}

.table th {
  text-align: left;
  background-color: transparent;
  color: #ff875a;
  font-size: var(--font-s);
  font-weight: normal;

  &:hover {
    background-color: transparent;
  }
}

table td span {
  display: block;
  font-size: var(--font-s);
  opacity: 0.4;
}

table td.info {
  display: flex;
  align-items: center;

  gap: 1rem;
}

.arrow {
  margin-left: 5px;
}

img.arrow {
  width: 1.25rem;
  height: 1.25rem;
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
