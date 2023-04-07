<template>
  <div class="filter-container">
    <ul class="filter-list">
    <li v-for="(filter, index) in filterTypes" :key="index" class="btn-wrapper">
      <FilterButton :filter="filter" @click="(name) => openModal(name)" />
      <!--<button class="filter-button" @click="showModal = true">
        {{ filter }}

        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path fill="#000" fill-rule="evenodd" d="M13 4.5a.5.5 0 0 1 .5.5v5.5H19a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-5.5V19a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5.5H5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h5.5V5a.5.5 0 0 1 .5-.5h2Z"/></svg>
      </button>-->
    </li>
  </ul>
    <modal :title="modalTitle" :show="showModal" :fullscreen="true" @close="showModal = false">
      <div class="filter-modal-content">
        <ul class="filter-list">
          <li v-for="(filter, index) in filterTypes" :key="index">
            <input :id="'filter-' + index" v-model="selectedFilters" type="checkbox" :value="selectedFilters">
            <label :for="'filter-' + index">{{ filter }}</label>
          </li>
          <!--- Double up for now to make more options to make modal scrollable -->
          <li v-for="(filter, index) in filterTypes" :key="index+5">
            <input :id="'filter-' + index+5" v-model="selectedFilters" type="checkbox" :value="selectedFilters">
            <label :for="'filter-' + index+5">{{ filter }}</label>
          </li>
        </ul>
      </div>
      <div class="filter-actions">
          <button class="filter-button primary" @click="applyFilters">
            Apply Filters
          </button>
          <button class="filter-button" @click="resetFilters">
            Reset Filters
          </button>
        </div>
    </modal>
  </div>
</template>

<script lang="ts">
import Modal from '@/components/Modal.vue';
import FilterButton from '@/components/FilterButton.vue';
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
    FilterButton,
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
    openModal(name){
      console.log(name);
      this.showModal = true;
      this.modalTitle = name;
    },
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
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
  justify-content: flex-start;
  max-width: 1200px;

  ul.filter-list{
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1rem;
  }

  .filter-modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1.5rem;
    overflow-y: scroll;
    max-height: 20rem;

    h3{
      margin: 0;
      font-size: var(--font-m);
    }

    .filter-list {
      margin: 0;
      padding: 0;
      list-style: none;
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.125rem;

      li{
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }

      input[type="checkbox"] {
        width: 0;
        height: 0;
        margin: 0;
        overflow: hidden;
        cursor: pointer;

        &:hover{
          border-color: white;
        }

        &:checked{
          background-color: var(--color-dark-accent);
          border-color: white;
        }
      }

      input + label::before {
        transition: 0.3s;
        content: "";
        display: inline-block;
        width: 1.25rem;
        height: 1.25rem;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #cccccc;
        border-radius: 0.125rem;
        margin-right: 0.75rem;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
      }
      input:checked + label::before {
        border-color: var(--color-light-accent);
        background-color: var(--color-dark-accent);
        background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2210%22%20viewBox%3D%220%200%2012%2010%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M10%202L4.5%208L2%205.27273%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22square%22%2F%3E%0A%3C%2Fsvg%3E%0A");
      }
      input:checked + label {
        color: white;
      }
      label{
        cursor: pointer;
        font-weight: 500;
        padding: 0.5rem 0;
        display: flex;
        flex: 1;
        color: #bbb;
      }

    }
  }
  .filter-actions {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
        width: calc(100% - 3rem);
        margin: 1.5rem;

        button.filter-button{
          background-color: #000;
          border: 1px solid #666;
          color: #ccc;
          display: block;
          font-weight: 600;
          align-items: center;
          align-content: center;
          padding: 0.5rem 1rem;
          padding-right: 0.75rem;
          height: 3rem;
          min-height: 3rem;
          width: 100%;
          border-radius: 0.25rem;
          cursor: pointer;
          overflow: visible;

          &:hover{
            border-color: #ddd;
            color: white;

            svg path{
              fill: white;
            }
          }

          &.primary{
            background-color: var(--color-dark-accent);
            color: white;
            border: 1px solid var(--color-dark-accent);

            &:hover{
              background-color: var(--color-light-accent);
            }
          }
        }
      }
}
</style>
