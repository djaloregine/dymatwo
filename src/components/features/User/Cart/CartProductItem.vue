<template>

  <div class="d-flex flex-row justify-content-between  py-2">
    <span > {{ item.title }} </span>
    <span > {{ item.price }} € </span>

    <button class="close" @click="removeItemCart"> </button>
    <span>&times;</span>

  </div>
</template>

<script>
  export default {
   props:["item"],
   
  }
</script>

<style>
 
</style>