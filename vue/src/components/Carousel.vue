<template>
  <div class="carousel">
    <div class="carousel-inner">
      <carousel-item
        v-for="(slide, index) in slides"
        :slide="slide"
        :key="index"
      >
      </carousel-item>
    </div>
  </div>
</template>

<script>
import TheCarouselItemVue from "./TheCarouselItem.vue";

export default {
  props: ["slides"],
  components: { TheCarouselItemVue },
};
</script>
