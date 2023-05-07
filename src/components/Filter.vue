<template>
  <div class="filter-container">
    <ul class="filter-list">
      <li v-for="(filter, index) in filters" :key="index" class="btn-wrapper">
        <FilterButton
          :checked="getObjectByKey(filter.key)"
          :value="getObjectByKey(filter.key)"
          :buttonText="filter.name"
          :buttonType="filter.btnType"
          @change="selectedFilters = [$event]"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import FilterButton from "@/components/FilterButton.vue";
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "FilterComponent",
  components: {
    FilterButton,
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
      selectedFilters: [],
    };
  },
  methods: {},
  computed: {
    ...mapGetters(["filters"]),
    getObjectByKey() {
      return function (key) {
        const obj = {
          location: [
            { value: "göteborg", label: "Göteborg" },
            { value: "stockholm", label: "Stockholm" },
            { value: "malmö", label: "Malmö" },
          ],
          businessArea: [
            { value: "technology", label: "Technology" },
            { value: "finance", label: "Finance" },
            { value: "marketing", label: "Marketing" },
            { value: "sales", label: "Sales" },
          ],
          workingTitles: [
            { value: "frontend", label: "Frontend" },
            { value: "backend", label: "Backend" },
            { value: "fullstack", label: "Fullstack" },
            { value: "ux", label: "UX" },
            { value: "ui", label: "UI" },
            { value: "qa", label: "QA" },
            { value: "devops", label: "DevOps" },
            { value: "data", label: "Data" },
            { value: "product", label: "Product" },
            { value: "project", label: "Project" },
            { value: "scrum", label: "Scrum" },
            { value: "agile", label: "Agile" },
            { value: "growth", label: "Growth" },
            { value: "sales", label: "Sales" },
            { value: "marketing", label: "Marketing" },
            { value: "finance", label: "Finance" },
            { value: "hr", label: "HR" },
            { value: "legal", label: "Legal" },
            { value: "support", label: "Support" },
            { value: "other", label: "Other" },
          ],
          canTravel: false,
          availableType: [
            { value: "fulltime", label: "Fulltime" },
            { value: "parttime", label: "Parttime" },
            { value: "internship", label: "Internship" },
            { value: "contract", label: "Contract" },
            { value: "project", label: "Project" },
            { value: "freelance", label: "Freelance" },
          ],
        };
        return obj[key];
      };
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
