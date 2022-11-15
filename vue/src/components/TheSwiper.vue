<template>
  <div class="container bg-center justify-around m-auto">
    <div class="carousel" style="margin-top: 30px">
      <div id="item1" class="carousel-item w-full">
        <img
          src="https://picsum.photos/1200/620"
          style="height: 100%"
          class="w-full"
        />
      </div>
      <div id="item2" class="carousel-item w-full">
        <h1>How to Maximize Flexibility How to Maximize Flexibility</h1>
        <p>
          How to Maximize Flexibility How to Maximize Flexibility For small
          businesses, it’s a thin line between success and failure. Flexibility
          is key. This ability to respond swiftly often gives small businesses a
          desirable advantage over their much-larger competitors because they
          can adapt...
        </p>
        <button class="bg-green-400 rounded-full p-2">read more..</button>
        <img
          src="https://picsum.photos/1200/3010"
          style="height: 480px"
          class="w-full"
        />
      </div>
      <div id="item3" class="carousel-item w-full">
        <img
          src="https://picsum.photos/1200/3100"
          style="height: 480px"
          class="w-full"
        />
      </div>
    </div>
    <div class="arrow-icons">
      <div class="icons">
        <a href="#item1" class="btn btn-xs">prev</a>
        <a href="#item2" class="btn btn-xs">next</a>
      </div>
    </div>
    <div class="flex justify-center w-full py-2 gap-2">
      <a href="#item1" class="btn btn-xs">1</a>
      <a href="#item2" class="btn btn-xs">2</a>
      <a href="#item3" class="btn btn-xs">3</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "imagesliderdemo",
  props: {
    msg: String,
  },
};
</script>

<style>
.carousel-item {
 
   
    flex-direction: column;
    text-align: center;
}
.icons {
  top: 40%;
  display: flex;
  justify-content: space-between;
  z-index: 999;
  transform: translateY(-920%);
}
</style>
