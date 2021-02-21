<template>
    <div class="d-flex flex-column flex-wrap p-1">

    <h5 class="border-bottom  pb-3">Mon panier </h5>
        <CartProductItem v-for=" item in cart" :key="item.id" :item="item"> </CartProductItem>
        <hr class="w-100">
       
    </div>
</template>

<script>
    import CartProductItem from "./CartProductItem"
    export default {
        components: {
            CartProductItem
        },
       props : ["cart"],
       computed: {
    total() {
      return this.cart.reduce((acc, v) => {
        acc += v.price;
        return acc;
      }, 0)
    }
    }
    }
</script>

<style>

</style>