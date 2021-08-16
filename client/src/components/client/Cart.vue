<template>
  <div>
            <bottom-navigation></bottom-navigation>
            <v-container>


      <router-view/>
        <!-- <component v-bind:is="changeComponent"></component> -->

    </v-container>

  </div>
</template>
<script>
    import CartSummary from './CartSummary.vue'
    import CartShipping from './CartShipping.vue'
    import BottomNavigation from '../BottomNavigation.vue'
    export default {
        components: { 'cartSummary': CartSummary, BottomNavigation, 'cartShipping':  CartShipping},
        name: 'Cart',
        data: () => ({

        }),
        computed: {
        changeComponent: function () {
            if (this.$route.name === "cartSummary") {
                return 'cartSummary'
            }else {
                return 'cartShipping' // aqui deberia ir un 404
            }
        },


    },
    }
</script>

<style>


</style>
