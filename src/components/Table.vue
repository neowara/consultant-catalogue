<!-- # Vue table component with pagination, sorting and filtering. 
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
          <th v-for="(column, i) of columns" :key="i" @click="sortBy(column)">
            {{ column }}
            <span v-if="sortKey == column" class="arrow">
              <font-awesome-icon :icon="sortOrders[column] > 0 ? 'sort-up' : 'sort-down'" />
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(entry, i) of filteredData" :key="i">
          <td>{{ entry.name }}</td>
          <td>{{ entry.workTitle }}</td>
          <td>{{ entry.location }}</td>
          <td>{{ entry.availableFrom }}</td>
          <td>
            <button class="btn btn-primary" @click="viewProfile(entry.id)">View profile</button>
          </td>
        </tr>
      </tbody>
      </table>
  </div>
</template>
<script lang="ts">

export default  {
  name: "Table",
  props: {
    data: Array,
    columns: Array,
    filterKey: String,
  },
  data() {
    return {
      sortKey: "",
      sortOrders: {},
    };
  },
  computed: {
    filteredData() {
      const sortKey = this.sortKey;
      const filterKey = this.filterKey && this.filterKey.toLowerCase();
      const order = this.sortOrders[sortKey] || 1;
      let data = this.data;
      if (filterKey) {
        data = data.filter((row) => {
          return Object.keys(row).some((key) => {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
          });
        });
      }
      if (sortKey) {
        data = data.slice().sort((a, b) => {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return data;
    },
  },
  methods: {
    sortBy(key: string) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1 || 1;
    },
    viewProfile(id: string) {
      this.$router.push(`/profile/${id}`);
    },
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


 -->