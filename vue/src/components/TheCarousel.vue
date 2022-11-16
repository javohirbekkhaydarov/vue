<template>
  <div class="carousel">
    <div class="carousel-inner">
      <div class="carousel-item" v-for="slide in slides">
        <img :src="slide" alt="slide" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCarousel",
  data: () => ({
    slides: [
      "https://picsum.photos/900/300",
      "https://picsum.photos/900/310",
      "https://picsum.photos/900/390",
    ],
  }),
};
</script>
