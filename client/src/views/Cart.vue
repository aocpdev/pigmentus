<template>
  <div>
      <v-container>
        <router-view/>
      </v-container>

  </div>
</template>
<script>
    import CartShipping from '../components/client/CartShipping.vue'
    import BottomNavigation from '../components/BottomNavigation.vue'
    export default {
        components: {
          BottomNavigation,
          CartShipping,
        },
        name: 'CartView',
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
