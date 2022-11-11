<script></script>

<template>
  <button type="submit" @click="$emit('add', Math.floor(Math.random() * 10))">
    Random number
  </button>
</template>
