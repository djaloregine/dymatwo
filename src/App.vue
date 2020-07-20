<template>
  <div id="app">

    <TheHead></TheHead>
    <div class="d-flex flex-row ">
      <Shop class="d-flex w-75"> Shop </Shop>
      <Cart class="d-flex w-25"> Cart </Cart>
    </div>

  </div>
</template>

<script>
  import TheHead from "./components/TheHead"
  import Shop from "./components/Shop/Shop"
  import Cart from "./components/Cart/Cart"

  export default {
    name: 'App',
    components: {
      TheHead,
      Shop,
      Cart,
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;

  }
</style>