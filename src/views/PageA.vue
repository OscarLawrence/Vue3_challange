<template>
  <div class="page_a">
    <button @click="store.commit('toggle_images')">
      {{ store.state.show_images ? "Hide" : "Show" }}
    </button>
    <div class="images_wrapper" v-show="store.state.show_images">
      <div v-for="index in 10" :key="index">
        <img src="https://placeimg.com/150/150/people" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex";
const store = useStore();
</script>

<style lang="scss" scoped>
.page_a {
  button {
    padding: 1rem;
    margin-bottom: 1rem;
  }
  .images_wrapper {
    display: flex;
    justify-content: center;
  }
}
</style>
