<script>
export default {
  name: "App Pagination",
  emits: ["change-page"],
};
</script>

<template>
  <ul class="pagination">
    <li class="page-item" role="button">
      <span class="page-link" @click="$emit('change-page', 'prev')"
        >Previous</span
      >
    </li>
    <li class="page-item" role="button" @click="$emit('change-page', 'next')">
      <span class="page-link">Next</span>
    </li>
  </ul>
</template>

<style scoped></style>
