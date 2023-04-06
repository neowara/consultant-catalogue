<template>
  <div class="filter-container">
    <div v-for="(filter, index) in filterTypes" :key="index" class="btn-wrapper">
      <button class="filter-button" @click="showModal = true">
        {{ filter }}
      </button>
    </div>
    <modal :title="modalTitle" :show="showModal" :fullscreen="true" @close="showModal = false">
      <div class="filter-modal-content">
        <h2>Select Filters</h2>
        <div class="filter-list">
          <div v-for="(filter, index) in filterTypes" :key="index">
            <input :id="'filter-' + index" v-model="selectedFilters" type="checkbox" :value="selectedFilters">
            <label :for="'filter-' + index">{{ filter }}</label>
          </div>
        </div>
        <div class="filter-actions">
          <button class="filter-button" @click="applyFilters">
            Apply Filters
          </button>
          <button class="filter-button" @click="resetFilters">
            Reset Filters
          </button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script lang="ts">
import Modal from '@/components/Modal.vue';
import { defineComponent } from "vue";

interface FilterOption {
  label: string;
  value: Option;
}

interface Option {
  location: string;
  bussinessArea: string;
  workingTitles: Array<string>;
  canTravel: boolean;
  availableType: string;
}

export default defineComponent({
  name: 'FilterComponent',
  components: {
    Modal,
  },
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    filters: {
      type: Array as () => Array<FilterOption>,
      required: true,
    },
    applyFilter: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      showModal: false,
      modalTitle: 'Filters',
      selectedFilters: [],
      filterTypes: {
        location: 'Location',
        bussinessArea: 'Bussiness Area',
        workingTitles: 'Working Titles',
        canTravel: 'Can Travel',
        availableType: 'Available Type',
      }
    };
  },
  methods: {
    applyFilters() {
    },
    resetFilters() {
    },
  },
});
</script>

<style lang="scss" scoped>
.filter-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  justify-content: flex-start;
  max-width: 1200px;

  .btn-wrapper {
    margin-right: 10px;

    .filter-button {
      background-color: #4CAF50;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .filter-modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 20px;

    .filter-list {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      input[type="checkbox"] {
        margin-right: 10px;
      }

      .filter-actions {
        display: flex;
        flex-direction: row;
      }
    }
  }
}
</style>
