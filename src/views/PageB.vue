<template>
  <div class="page_b">
    <form>
      <label>Width</label>
      <input
        placeholder="Width"
        type="text"
        id="width"
        v-model="form_data.width"
      />
      <label>Height</label>

      <input placeholder="Height" type="text" v-model="form_data.height" />
      <label>Bachground Color</label>
      <input
        placeholder="Background Color"
        type="text"
        v-model="form_data.background"
      />
      <label>Border Radius</label>
      <input
        placeholder="Border Radius"
        type="text"
        v-model="form_data.border_radius"
      />
    </form>
    <div class="displays">
      <div
        v-for="index in 10"
        :key="index"
        :style="{
          width: form_data.width,
          height: form_data.height,
          'background-color': form_data.background,
          'border-radius': form_data.border_radius,
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();
const form_data = store.state.form_data;
</script>

<style lang="scss" scoped>
.page_b {
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      margin-bottom: 0.75rem;
    }
  }
  .displays {
    display: flex;
    justify-content: center;
    div {
      margin: 1rem;
    }
  }
}
</style>
