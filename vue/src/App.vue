
<template>
  <div class="w-full min-h-screen overflow-hidden bg-back">
    <TheNavbar />
    <carousel :slides="slides"> </carousel>
  </div>
</template>

<script >
import TheNavbar from "./components/TheNavbar.vue";
import Carousel from "./components/TheCarouselItem.vue";

export default {
  name: "Carousel",
  components: {
    Carousel
  },
  data: () => ({
    slides: [
      "https://picsum.photos/900/300",
      "https://picsum.photos/900/310",
      "https://picsum.photos/900/390",
    ],
  }),
};
</script>


<style></style>
