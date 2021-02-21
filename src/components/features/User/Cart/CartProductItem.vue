<template>

  <div class="d-flex flex-row justify-content-between  py-2">
    <span > {{ item.title }} </span>
    <span > {{ item.price }} € </span>

    <button class="close" @click="removeItemCart"> </button>
    <span>&times;</span>

  </div>
</template>

<script>
import {eventBus} from "../../main.js"

  export default {
   props:["item"],
   methods: {
     removeItemCart() {
       eventBus.removeItemCart({ ...this.item});
     }
   }
  }
</script>

<style>
 
</style>