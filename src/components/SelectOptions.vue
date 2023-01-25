<script>
export default {
  name: "Select Options",
  data() {
    return {
      selected: this.firstOption,
    };
  },
  props: {
    firstOption: String,
    options: Array,
  },
};
</script>

<template>
  <select v-model="selected">
    <option>{{ firstOption }}</option>
    <option v-for="option in options">{{ option }}</option>
  </select>
</template>

<style scoped></style>
