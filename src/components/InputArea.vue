<script>
export default {
  name: "Input Area",
  data() {
    return {
      text: "",
    };
  },
  props: {
    placeholder: String,
  },
  emits: ["typing", "submit-text"],
  methods: {
    submitText() {
      this.$emit("submit-text");
    },
  },
};
</script>

<template>
  <input
    v-model="text"
    :placeholder="placeholder"
    @keyup="$emit('typing', text)"
    @keyup.enter="submitText"
    class="form-control"
    type="text" />
</template>
