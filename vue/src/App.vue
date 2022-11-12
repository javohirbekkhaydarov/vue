<script setup>
import { ChipIcon, MenuAlt3Icon } from "@heroicons/vue/outline";
</script>

<template>
  <div class="px-6 py-6 w-full text-white min-h-screen bg-mainly font-sans">
    <!--? logo -->
    <div class="flex justify-between items-center">
      <div class="flex space-x-2 py-2 px-2">
        <span> <ChipIcon class="w-6 h-6" /> </span>
        <span class="uppercase text-white font-blod"> Ender</span>
      </div>
      <div>
        <MenuAlt3Icon class="w-6 h-6" />
      </div>
    </div>

    <!-- ? main -->
    <main class="flex flex-col mt-12">
      <h1 class="text-3xl font-bold">
        Congrutlation! You've <br />
        won the Commpetition!👏
      </h1>
      <div class="grid grid-cols-1 gap-3 my-5 sm:grid-cols-3">
        <div class="h-26">
          <img
            class="object-cover w-full rounded-sm"
            src="https://picsum.photos/980/1200"
            alt=""
          />
        </div>
        <div class="h-26">
          <img
            class="object-cover w-full rounded-sm"
            src="https://picsum.photos/980/1201"
            alt=""
          />
        </div>
        <div class="h-26">
          <img
            class="object-cover w-full rounded-sm"
            src="https://picsum.photos/980/1202"
            alt=""
          />
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <span class="text-markText font-blod">
          Consequatur perspiciatis id iusto autem
        </span>
        quos saepe voluptate ut facere ducimus consectetur nostrum adipisci
        nulla, quod eveniet eos quibusdam minima at temporibus.
      </p>
      <div
        class="w-auto px-6 py-4 bg-second flex justify-between items-center border rounded-sm border-gray-900"
      >
        <div class="flex flex-col">
          <span class="text-gray-400">You won</span>
          <span class="text-2xl font-bold">$75.00</span>
          <span class="text-gray-400">Account Balance: $175</span>
        </div>
        <div>
          <a
            href="# "
            class="uppercase bg-white text-gray-700 font-blod rounded-sm font-bold p-2"
            >View Result</a
          >
        </div>
      </div>
    </main>
    <button
      class="m-5 p-2 br-3 bg-green-500 text-white border border-green-400 rounded-lg hover:bg-green-400 transition"
    >
      button
    </button>
  </div>
</template>

<style></style>
