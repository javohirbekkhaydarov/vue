<script setup>
import { SearchIcon } from "@heroicons/vue/outline";
</script>

<template>
  <!-- top navbar -->
  <div class="bg-white px-6 py-2">
    <div
      class="container flex justify-around mx-auto max-w-screen-2xl itemes-center"
    >
      <div class="items-center flex space-x-3">
        <div
          class="logo flex rounded-full border items-center border-green-400 text-green-400 px-2 py-0"
        >
          <span><font-awesome-icon icon="fa-brands fa-twitter" /></span>
          <span> Follow</span>
        </div>
        <div><font-awesome-icon icon="fa-brands fa-facebook-f" /></div>

        <div><font-awesome-icon icon="fa-brands fa-google-plus-g" /></div>
      </div>
      <div class="font-serif text-3xl hover:text-green-400 transition">
        Mediumish
      </div>
      <div class="flex items-center">
        <input
          type="serch"
          placeholder="search"
          class="border outline-green-400 px-4 py-2 rounded"
        />
        <span class="bg-green-400 h-10 w-10 text-center items-center">
          <SearchIcon
            class="h-4 w-4 bg-green-400 text-white m-auto mt-3 cursour-pointer"
          />
        </span>
      </div>
    </div>
    <!-- menu navbar -->
    <nav class="uppercase font-bold text-gray-500 flex justify-around my-2">
      <ul class="flex justify-between space-x-6">
        <li><a href="#">home</a></li>
        <li><a href="#">life</a></li>
        <li><a href="#">marketing</a></li>
        <li><a href="#">creative</a></li>
        <li><a href="#">social</a></li>
        <li><a href="#">authors</a></li>
        <li><a href="#">write for us</a></li>
        <li><a href="#">contact</a></li>
        <li><a href="#">buy medimush</a></li>
      </ul>
    </nav>
  </div>
</template>
