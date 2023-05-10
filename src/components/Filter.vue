<template>
  <div class="filter-container">
    <ul class="filter-list">
      <li v-for="(filter, i) in filterData" :key="i" class="btn-wrapper">
        <FilterButton
          :value="filter.values"
          :label="filter.labels[i] || filter.labels[0]"
          :buttonText="filter.name"
          :buttonType="filter.btnType"
          @inputClick="applyFilters($event)"
        />
      </li>
    </ul>

    <modal
      v-if="showModal"
      :title="buttonText"
      :fullscreen="true"
      @close="showModal = false"
    >
      <div class="filter-modal-content">
        <ul>
          <li
            v-for="(data, index) in filterData[selectedFilters].values"
            :key="index"
          >
            <FilterButton
              :value="data"
              :label="filterData[selectedFilters].labels[index]"
              :buttonText="filterData[selectedFilters].name"
              buttonType="checkbox"
              @inputClick="applyFilters($event)"
            />
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
import FilterButton from "@/components/FilterButton.vue";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import Modal from "@/components/Modal.vue";

export interface selectedFilters {
  location: string[];
  businessArea: string[];
  workingTitles: string[];
  canTravel: boolean;
  availableType: string[];
}

export default defineComponent({
  name: "FilterComponent",
  components: {
    FilterButton,
    Modal,
  },
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    applyFilter: {
      type: Function,
      required: false,
      default: () => {},
    },
  },
  data() {
    return {
      showModal: false,
      selectedFilters: null,
      filterData: [
        {
          name: "Location",
          btnType: "clickable",
          labels: ["Stockholm", "Göteborg", "Malmö"],
          values: ["Stockholm", "Göteborg", "Malmö"],
          selectedValues: [],
        },
        {
          name: "Bussiness Area",
          btnType: "clickable",
          labels: ["Technology", "Finance", "Marketing", "Sales"],
          values: ["Technology", "Finance", "Marketing", "Sales"],
          selectedValues: [],
        },
        {
          name: "Working Titles",
          btnType: "clickable",
          labels: [
            "Frontend",
            "Backend",
            "Fullstack",
            "UX",
            "UI",
            "QA",
            "DevOps",
            "Data",
            "Product",
            "Project",
            "Scrum",
            "Agile",
            "Growth",
            "Sales",
            "Marketing",
            "Finance",
            "HR",
            "Legal",
            "Support",
            "Other",
          ],
          values: [
            "Frontend",
            "Backend",
            "Fullstack",
            "UX",
            "UI",
            "QA",
            "DevOps",
            "Data",
            "Product",
            "Project",
            "Scrum",
            "Agile",
            "Growth",
            "Sales",
            "Marketing",
            "Finance",
            "HR",
            "Legal",
            "Support",
            "Other",
          ],
          selectedValues: [],
        },
        {
          name: "Can Travel",
          btnType: "checkbox",
          labels: ["Can Travel"],
          values: false,
          selectedValues: [],
        },
        {
          name: "Available Type",
          btnType: "clickable",
          labels: ["Fulltime", "Parttime", "Internship", "Contract"],
          values: ["Fulltime", "Parttime", "Internship", "Contract"],
          selectedValues: [],
        },
      ],
    };
  },
  methods: {
    applyFilters(e) {
      if (e.btnType === "clickable") {
        this.selectedFilters = this.filterData.indexOf(e);
        this.showModal = true;
        console.log(e);
      } 
      console.log(e);
    },
    resetFilters() {
      this.selectedFilters = [];
      this.$store.commit("setKeyword", []);
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

  ul.filter-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1rem;
  }

  ::v-deep .filter-modal-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1.5rem;
    overflow-y: scroll;
    max-height: 20rem;

    h3 {
      margin: 0;
      font-size: var(--font-m);
    }

    ul.filter-list {
      margin: 0;
      padding: 0;
      list-style: none;
      display: grid;
      grid-template-columns: 1fr;
      gap: 0.125rem;

      li {
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

        &:hover {
          border-color: white;
        }

        &:checked {
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

      label {
        cursor: pointer;
        font-weight: 500;
        padding: 0.5rem 0;
        display: flex;
        flex: 1;
        color: #bbb;
      }
    }
  }

  ::v-deep .filter-actions {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    width: calc(100% - 3rem);
    margin: 1.5rem;

    button.filter-button {
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

      &:hover {
        border-color: #ddd;
        color: white;

        svg path {
          fill: white;
        }
      }

      &.primary {
        background-color: var(--color-dark-accent);
        color: white;
        border: 1px solid var(--color-dark-accent);

        &:hover {
          background-color: var(--color-light-accent);
        }
      }
    }
  }
}
</style>
