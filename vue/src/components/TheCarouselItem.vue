<template>
  <div class="carousel-item" >
    <img :src="slide" alt="" />
  </div>
</template>
<script>
export default {
  props: ["slide"],
};
</script>
<style></style>
