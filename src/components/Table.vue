# Vue table component with pagination, sorting and filtering. 
# This component is used in the main page to display the list of users.
# The table has 5 columns: Name, Work title, location, available from, and actions.
# The table is sortable by clicking on the column header.

<template>
  <div class="table-wrapper">
    <table class="table">
      <thead>
        <tr>
         <th>Name</th>
         <th>Work title</th>
         <th>Location</th>
         <th>Available</th>
         <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, i) of filteredData" :key="i">
          <td>{{ entry.name }}<span>{{ entry.bu }}</span></td>
          <td>{{ entry.workTitle }}<span>{{ entry.workDesc }}</span></td>
          <td>{{ entry.location }}</td>
          <td>{{ entry.availableFrom }}</td>
          <td class="info">
            <p class="experience">{{entry.experienceYears}}<span>Years</span></p>
            <p class="availability">{{entry.availability*100}}%</p>
           <img v-if="entry.canTravel" class="can-travel" src="../assets/svg/canTravel.svg" alt="Can Travel" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">

export default {
  name: "TableComponent",
  props: {
    data: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
    filterKey: {
      type: String,
      default: "",
      required: false,
    }
  },
  data() {
    return {
      sortKey: 0,
      sortOrders: {},
      filteredData: [
        {
          name: "John Doe",
          bu: "West Tech",
          workTitle: "Software Engineer",
          workDesc: "Super Senior",
          location: "Göteborg",
          availableFrom: "2020-01-01",
          experienceYears: 15,
          availability: 1,
          canTravel: true,
        },
        {
          name: "John Doe",
          bu: "West Tech",
          workTitle: "Software Engineer",
          workDesc: "Super Senior",
          location: "Göteborg",
          availableFrom: "2020-01-01",
          experienceYears: 5,
          availability: 1,
          canTravel: true,
        },
        {
          name: "John Doe",
          bu: "West Tech",
          workTitle: "Software Engineer",
          workDesc: "Super Senior",
          location: "Göteborg",
          availableFrom: "2020-01-01",
          experienceYears: 2,
          availability: 0.5,
          canTravel: false,
        },
        {
          name: "John Doe",
          bu: "West Tech",
          workTitle: "Software Engineer",
          workDesc: "Super Senior",
          location: "Göteborg",
          availableFrom: "2020-01-01",
          experienceYears: 15,
          availability: 0.75,
          canTravel: false,
        },{
          name: "John Doe",
          bu: "West Tech",
          workTitle: "Software Engineer",
          workDesc: "Super Senior",
          location: "Göteborg",
          availableFrom: "2020-01-01",
          experienceYears: 3,
          availability: 1,
          canTravel: true,
        }
      ],
    };
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
.table-wrapper {
  width: 100%;
  overflow-x: auto;
}

.table {
  border-collapse: collapse;
  width: 100%;
}

.table td,
.table th {
  border-bottom: 1px solid #222;
  padding: 1rem 0;
}

.table tr:hover td {
  background-color: #111;
}

.table th {
  text-align: left;
  background-color: transparent;
  color: #FF875A;
  font-size: var(--font-s);
  font-weight: normal;

  &:hover{
    background-color: transparent;
  }
}

table td span{
  display: block;
  font-size: var(--font-s);
  opacity: 0.4;
}

table td.info{
  display: flex;
  align-items: center;

  gap: 1rem;
}

.arrow {
  margin-left: 5px;
}

p.availability{
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


p.experience{
  border: 1px solid #999;
  width: 3rem;
  height: 3rem;
  line-height: 1rem;
  font-weight: bold;
  margin: 0;
  font-size: var(--font-n);
  padding: 0.5rem 0.25rem;
  text-align: center;
  border-radius: 0.5rem;
}

img.can-travel{
  width: 2rem;
  height: 2rem;
}
</style>