<template>
  <div class="outer-wrapper" :class="[open && 'open']">
    <div class="menu-wrapper" :class="[open && 'open']">
      <div class="top-wrapper">
        <div class="text-wrapper">
          <h3>MENU</h3>
          <p>CHECK OUT OTHER DESIGNERS</p>
        </div>
        <button class="close" @click="CloseMenu">
          <img src="../assets/svg/close.svg" alt="menu" />
        </button>
      </div>
      <div class="designers-wrapper">
        <ul class="designers">
          <li v-for="(person, i) of persons" :key="i">
            <button @click="setPerson(i)">
              <img :src="person.picture" />
              <div>
                <h4>{{ person.name }} {{ person.lastname }}</h4>
                <p>{{ person.workTitle }}</p>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Fold Out Menu",
  props: {
    persons: Array,
    open: Boolean,
  },
  methods: {
    CloseMenu() {
      this.$store.dispatch("toggleMenu", false);
    },
    setPerson(index) {
      this.$store.dispatch("setActive", index);
      this.$store.dispatch("toggleMenu", false);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.menu-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  width: 18rem;
  padding: 1.5rem;
  height: 100%;
  z-index: 6;
  background-color: black;
  transform: translateX(22rem);
  transition: all 0.3s ease-in-out;

  &.open {
    transform: translateX(0);

    &::before {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}

div.outer-wrapper {
  position: absolute;
  &::before {
    content: " ";
    position: fixed;
    opacity: 0;
    pointer-events: none;
    z-index: 2;
    transition: all 0.3s ease-in-out;
  }

  &.open {
    &::before {
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 2;
      background-color: var(--color-annevo-orange);
      opacity: 0.2;
      pointer-events: all;
    }
  }
}

div.top-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 0.5rem;

  h3 {
    margin: 0;
    font-size: 1.55rem;
    line-height: 1em;
  }
  p {
    margin: 0;
    font-size: 0.8rem;
    color: var(--color-annevo-orange);
  }
}

button.close {
  background-color: transparent;
  width: 2rem;
  height: 2rem;
  padding: 0.45rem;
  border: 0;
  cursor: pointer;
}

ul.designers {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 1.5rem 0;
  margin: 0;

  li {
    margin-bottom: 0.5rem;
  }

  button {
    background-color: transparent;
    border: 0;
    padding: 0.5rem;
    margin: 0;
    color: white;
    justify-content: flex-start;
    display: flex;
    width: 100%;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: #121212;
    }

    img {
      width: 3rem;
      height: auto;
      border-radius: 1.5rem;
      margin-right: 0.5rem;
    }

    div {
      display: block;
      text-align: left;

      h4 {
        margin: 0 0 0.25rem;
        font-size: 1rem;
        line-height: 1em;
      }

      p {
        margin: 0;
        opacity: 0.5;
      }
    }
  }
}

div.designers-wrapper {
  overflow-y: auto;
  height: calc(100% - 7rem);
}
</style>
