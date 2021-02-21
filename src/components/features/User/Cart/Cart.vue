<template>
    <Cart-products-list class="p-3" :cart = "cart"></Cart-products-list>
</template>

<script>
import CartProductsList from "./CartProductsList"
import {eventBus} from "../../main.js"

export default {
  components : {
      CartProductsList
  },
  data()  {
    return  {
      cart : []
    }
  },
  created() {
    this.cart = eventBus.cart;
    eventBus.$on("update.cart", cart=> {
      this.cart = cart;
    });
  }
}
</script>

<style>

</style>