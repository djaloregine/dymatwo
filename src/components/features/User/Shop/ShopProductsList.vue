<template>
    <div class="d-flex flex-row flex-wrap ">
        <ShopProductItem v-for=" product in products" :key="product.id" :product="product"> </ShopProductItem>
       
    </div>
</template>

<script>
    import ShopProductItem from "./ShopProductItem"
    export default {
        components: {
            ShopProductItem
        },
       props : ["products"]
    }
</script>

<style>

</style>