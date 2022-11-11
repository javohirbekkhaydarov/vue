<script setup>

const { text } = defineProps({
  text: String,
})
console.log(text);

</script>
<template>

  <h1> {{text}} </h1>
</template>