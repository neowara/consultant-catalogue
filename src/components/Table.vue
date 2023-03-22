# Vue table component with pagination, sorting and filtering. # This component
is used in the main page to display the list of users. # The table has 5
columns: Name, Work title, location, available from, and actions. # The table is
sortable by clicking on the column header.

<template>
  <div class="table-wrapper">
    <SearchComponent @search="search" />
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
      <tbody v-for="(data, i) of availableConsultants" :key="i">
        <tr @click="$emit('tableClick', i)">
          <td>
            {{ data.consultantDetails.name
            }}<span>{{ data.consultantDetails.businessArea }}</span>
          </td>
          <td>{{ data.consultantDetails.workingTitles.join(", ") }}<span>{{ data.consultantDetails.workTitleShortDesc }}</span></td>
          <td>{{ data.consultantDetails.location }}</td>
          <td>{{ data.consultantDetails.availableFrom.split(" ")[0] }}</td>
          <td class="info">
            <p class="experience">
              {{ data.consultantDetails.experienceInYears }}<span>Years</span>
            </p>
            <p class="availability">
              {{ parseFloat(data.consultantDetails.availableType) }}%
            </p>
            <img
              v-if="data.consultantDetails.canTravel"
              class="can-travel"
              src="../assets/svg/canTravel.svg"
              alt="Can Travel"
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

export interface Consultant {
  consultantDetails: {
    name: string;
    businessArea: string;
    workTitle: string;
    workDesc: string;
    location: string;
    availableFrom: string;
    availableTill: string;
    availableType: string;
    experienceInYears: number;
    availability: number;
    canTravel: boolean;
    canTravelComment: string;
    workingTitles: Array<string>;
    workTitleShortDesc: string;
    consultantBio: {
      cvLink: string;
      ingress: string;
      profilePic: string;
    };
  };
}

export default defineComponent({
  name: "TableComponent",
  components: {
    SearchComponent,
  },
  props: {
    filterKey: {
      type: String,
      default: "",
      required: false,
    },
  },
  data() {
    return {
      sortKey: 0,
      sortOrders: {},
      filteredData: [],
      expandNumber: 0,
    };
  },
  computed: {
    availableConsultants(): Array<Consultant> {
      if (localStorage.getItem("consultants")) {
        return JSON.parse(localStorage.getItem("consultants") || "");
      } else {
        return this.$store.state.consultants;
      }
    },
  },
  methods: {
  },
});
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

img.arrow{
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
