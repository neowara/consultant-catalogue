# Vue table component with pagination, sorting and filtering. 
# This component is used in the main page to display the list of users.
# The table has 5 columns: Name, Work title, location, available from, and actions.
# The table is sortable by clicking on the column header.

<template>
  <div class="table-wrapper">
    <table class="table">
      <thead>
        <tr>
          # column is a string, i is the index of the column
          # write in typescript, so we need to specify the type of the variable
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, i) of filteredData" :key="i">
          <td>{{ entry.name }}</td>
          <td>{{ entry.workTitle }}</td>
          <td>{{ entry.location }}</td>
          <td>{{ entry.availableFrom }}</td>
          <td>
            <button class="btn btn-primary">
              View profile
            </button>
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
          workTitle: "Software Engineer",
          location: "London",
          availableFrom: "2020-01-01",
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
  border: 1px solid #ddd;
  padding: 8px;
}

.table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.table tr:hover {
  background-color: #ddd;
}

.table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}

.arrow {
  margin-left: 5px;
}
</style>