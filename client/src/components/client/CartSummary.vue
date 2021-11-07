<template>
        <mobile-cart v-if="$vuetify.breakpoint.mobile"></mobile-cart>
        <web-mobile v-else></web-mobile>
</template>
<script>

  import MobileCart from './mobile/MobileCart.vue'
  import WebMobile from './web/WebCart.vue'
  export default {

    name: "CartSummary",
    components: {
      WebMobile,
      MobileCart
    },
    data: () => ({

    }),
    mounted: function () {},
    methods: {

    },
  };
</script>

<style>
</style>
