<template>

  <div class="p-3 product-container w-25 d-flex flex-column ">
    <div>
      <img :src="product.img" alt="pain fait maison" height="80px" width="150px">
    </div>

    <div>
      <h3> {{ product.title }}</h3>
    </div>

    <div>
      <p> {{ product.description }}</p>
    </div>

    <div>
      <span> {{ product.price }} €</span>
    </div>
    <button @click="addProductToCart()" class="btn btn-primary btn-sm float-right">Commander</button>

  </div>
</template>

<script>
  import {
    eventBus
  } from "../../main.js"

  export default {
    props: ['product'],
    methods: {
      addProductToCart() {
        eventBus.addProductToCart({
          ...this.product
        });
        console.log(this.product)
      }

    }
  }
</script>

<style>
  .product-container {
    height: 350px;

  }

  p {
    font-size: 12px;
  }
</style>