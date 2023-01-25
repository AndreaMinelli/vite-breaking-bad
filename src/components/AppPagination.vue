<script>
export default {
  name: "App Pagination",
  emits: ["change-page"],
  props: { nextPage: Number, prevPage: Number },
  computed: {
    isFirst() {
      if (!this.prevPage) return true;
    },
    isLast() {
      if (!this.nextPage) return true;
    },
  },
};
</script>

<template>
  <ul class="pagination">
    <li
      :class="['page-item', { disabled: isFirst }]"
      @click="$emit('change-page', 'prev')"
      class="page-item"
      role="button">
      <span class="page-link">Prev</span>
    </li>
    <li
      :class="['page-item', { disabled: isLast }]"
      @click="$emit('change-page', 'next')"
      role="button">
      <span class="page-link">Next</span>
    </li>
  </ul>
</template>

<style scoped>
.disabled {
  cursor: not-allowed;
}
</style>
