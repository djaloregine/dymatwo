<template>
  <div id="app">

    <TheHead></TheHead>
    <div class="d-flex flex-column w-100">
       <router-view></router-view>
    </div>

  </div>
</template>

<script>
  import TheHead from "./components/TheHead"
 

  export default {
    name: 'App',
    components: {
      TheHead
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;

  }
</style>