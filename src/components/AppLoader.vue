<script>
export default {
  name: "App Loader",
  props: {
    image: String,
  },
  computed: {
    buildImagePath() {
      if (this.image)
        return new URL("../assets/img/pikachu-loading.jpg", import.meta.url)
          .href;
    },
  },
};
</script>

<template>
  <div class="loading">
    <h3>Loading...</h3>
    <img v-if="image" :src="buildImagePath" alt="loading pics" />
  </div>
</template>

<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba($color: grey, $alpha: 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  img {
    height: 300px;
    width: auto;
    margin-top: 1rem;
  }
}
</style>
