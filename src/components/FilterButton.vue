<template>
  <div class="btn-wrapper">
    <div v-if="buttonType === 'clickable'" class="btn-with-plus">
      <button
        class="filter-btn"
        @click="showModal = true"
        @change="onChange($event)"
      >
        <span>{{ buttonText }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          view-box="0 0 24 24"
        >
          <path
            fill="#fff"
            fill-rule="evenodd"
            d="M13 4.5a.5.5 0 0 1 .5.5v5.5H19a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-5.5V19a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5.5H5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h5.5V5a.5.5 0 0 1 .5-.5h2Z"
          />
        </svg>
      </button>

      <modal
        v-if="showModal"
        :title="buttonText"
        :fullscreen="true"
        @close="showModal = false"
      >
        <div class="filter-modal-content">
          <ul class="filter-list">
            <li v-for="(option, index) in value" :key="index">
              <input
                :id="'filter-' + index.toString()"
                v-model="selectedFilters"
                type="checkbox"
                :value="option.value"
              />
              <label :for="'filter-' + index.toString()">{{
                option.label
              }}</label>
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

    <div v-if="buttonType === 'checkbox'" class="btn-with-chkmrk">
      <label for="checkBtn">{{ buttonText }}</label>
      <input
        id="checkBtn"
        :value="value"
        type="checkbox"
        class="filter-btn"
        name="checkBtn"
        @input="onChange($event)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "@/components/Modal.vue";

export default defineComponent({
  name: "FilterButton",
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
      filterWord: "",
      selectedFilters: [],
    };
  },
  props: {
    buttonType: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    value: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  methods: {
    clickAction(name: unknown) {
      this.$emit("click", name);
    },
    onChange(event) {
      let value = undefined;
      if (event.target.type === "checkbox") {
        value = event.target.checked;
      } else {
        value = event.target.value;
      }
      this.applyFilters();
    },
    applyFilters() {
      this.$store.commit("setKeyword", this.selectedFilters);
    },
    resetFilters() {
      this.$store.commit("setKeyword", []);
    },
    updateSelectedFilters() {
      this.$emit("input", this.selectedFilters);
    },
  },
  computed: {
  },
});
</script>

<style scoped lang="scss">
.btn-wrapper {
  .btn-with-plus {
    .filter-btn {
      background-color: #000;
      border: 1px solid #666;
      color: #ccc;
      display: flex;
      align-items: center;
      align-content: center;
      padding: 0.5rem 1rem;
      padding-right: 0.75rem;
      height: 3rem;
      min-height: 3rem;
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

      svg {
        display: inline-flex;
        width: 1.5rem;
        height: 1.5rem;
        min-width: 1.5rem;
        margin-left: 0.5rem;
        overflow: visible;

        path {
          fill: #aaa;
        }
      }
    }
  }

  .btn-with-chkmrk {
    background-color: #000;
    border: 1px solid #666;
    color: #ccc;
    display: flex;
    align-items: center;
    align-content: center;
    padding: 0.5rem 1rem;
    padding-right: 0.75rem;
    height: 3rem;
    min-height: 3rem;
    border-radius: 0.25rem;
    cursor: pointer;
    overflow: visible;

    input {
      cursor: pointer;
    }

    label {
      display: inline-block;
      padding: 3px;
      cursor: pointer;
    }
  }
}
</style>
