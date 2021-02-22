<template>
    <shop-products-list class="p-3" :products = "products"></shop-products-list>
</template>

<script>
import ShopProductsList from "./ShopProductsList"
import {eventBus} from "../../../../main.js"

export default {
  components : {
      ShopProductsList
  },
  data()  {
    return  {
      products : []
    }
  },
  created() {
    this.products = eventBus.products
    eventBus.$on("update.products", (products)=> {
      this.products = products;
    })
  }
}
</script>

<style>

</style>