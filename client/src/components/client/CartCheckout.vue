<template>

  <web-cart-chekout v-if="!$vuetify.breakpoint.mobile"></web-cart-chekout>
  <mobile-cart-checkout v-else></mobile-cart-checkout>

</template>

<script>
    import {mapState} from 'vuex'
    import router from '../../router/index'
    import orderModel, { orderJson } from '../../modules/orderModel'
    import axios from 'axios'
    import WebCartChekout from '../client/web/WebCartChekout.vue'
    import MobileCartCheckout from '../client/mobile/MobileCartCheckout.vue'
    export default {
  components: { WebCartChekout, MobileCartCheckout },
        name: 'CartCheckout',
        data: () => ({
            order: "",
            cartDetails: {}
        }),
        created() {
          this.$store.state.e2 = 2;
          this.$store.state.cartHeading = 'Checkout Payment';

          orderModel.order.userId = this.$store.state.user.id;




        },
        mounted: function() {

          if (localStorage.getItem("__pigmentusCart") !== undefined) {
            const sum = function (a) {
              return (a.length && parseFloat(a[0]) + sum(a.slice(1))) || 0;
            };
            let localStrg = JSON.parse(localStorage.getItem("__pigmentusCart"))
            if (this.$store.state.user !== '') {
              axios.get('api/cart', { params: { userId: this.$store.state.user.id} }).then(res => {
                this.$store.state.cartDetails = res.data.cartDetails;
                if (res.data.cartDetails.cart.length > 0) {
                  localStrg.cart.forEach((storage, indx) => {
                    let isSaved = false;
                    let quantityArray = []
                    res.data.cartDetails.cart.forEach((element, index) => {
                      if (storage.productId === element.productId) {
                        isSaved = true;
                        quantityArray.push(storage.quantity);
                        quantityArray.push(element.quantity);

                        element.quantity = sum(quantityArray);
                        element.isEditInCart = true;
                        axios
                        .post("api/cart", element)
                        .then((res) => {
                          this.getCart(this.$store.state.user.id);
                        })
                        .catch((err) => console.log(err));

                        console.log(sum(quantityArray))

                      }else if (isSaved === false && res.data.cartDetails.cart.length === index + 1) {
                        storage.isEditInCart = false;

                        let newProduct = {
                          isEditInCart: false,
                          productId: storage.productId,
                          userId: this.$store.state.user.id,
                          quantity: storage.quantity,
                        }

                        axios
                        .post("api/cart", newProduct)
                        .then((res) => {
                          this.getCart(this.$store.state.user.id);
                        })
                        .catch((err) => console.log(err));

                      }
                    });

                    localStorage.removeItem('__pigmentusCart');
                  });

                }else {

                }


              }).catch(err => console.log(err))
                // console.log('Cart: ', this.$store.state.cartDetails);
                // console.log('Local Storage: ', JSON.parse(localStorage.getItem("__pigmentusCart")))
            }else {

            }
          }else {

          }

          // const script = document.createElement("script");
          //     script.src =
          // "https://www.paypal.com/sdk/js?client-id=Aa7yUJ-MbLo8prf7N_VR9XhQuW0TMENMSUTVKKno1iEu8cl3mEoelJw5WuYBPvfYbZYCvNU8rdDnK7xq";
          //     script.addEventListener("load", this.setLoaded);
          //         document.body.appendChild(script);
        },

        methods: {
            // backToShiping: function () {
            //   this.$store.state.e2 = 1;
            //   this.$store.state.cartHeading = 'Shipping Address';
            //   this.$store.state.validatedAddress = false;
            //   router.push({ path: '/cart/shipping'});
            // },
            getCart: async function (userId) {
                axios.get('api/cart', { params: { userId: userId} }).then(res => {
                this.$store.state.cartDetails = res.data.cartDetails;
                this.cartDetails = res.data.cartDetails;
                console.log('dime que si')
                }).catch(err => console.log(err))
            },

            saveOrder: async function (order) {
              axios.post("api/orders", order).then((res) => {
                console.log(res.data.order);
              })
              .catch((err) => console.log(err));
            },

            // setLoaded: function() {
            //     window.paypal.Buttons({
            //     createOrder: (data, actions) => {
            //         // This function sets up the details of the transaction, including the amount and line item details.

            //         return actions.order.create({
            //         purchase_units: [{
            //             amount: {
            //               currency_code: "USD",
            //               value: this.$store.state.cartDetails.total
            //             },
            //         }]
            //         });
            //     },
            //     onApprove: async (data, actions) => {

            //         // This function captures the funds from the transaction.
            //         const paypalOrder = await actions.order.capture();



            //         if (paypalOrder.status === "COMPLETED") {
            //           console.log('Paypal Order', JSON.stringify(paypalOrder));
            //           console.log('Status', paypalOrder.status)
            //           console.log('Shipping Information', paypalOrder.purchase_units[0].shipping);
            //           console.log('Cart Details', this.$store.state.cartDetails)

            //           console.log('UserId', this.$store.state.user.id);
            //           console.log('Name', this.$store.state.user.name);
            //           console.log('Last Name', this.$store.state.user.lastName);
            //           console.log('Email', this.$store.state.user.email);
            //           console.log('Order ID', paypalOrder.purchase_units[0].payments.captures[0].id)

            //           let order = {

            //             userId: this.$store.state.user.id,
            //             paypalOrder: JSON.stringify(paypalOrder),
            //             cartDetails: JSON.stringify(this.$store.state.cartDetails),
            //           }
            //           console.log(order);
            //           axios.post("api/orders", order).then((res) => {
            //             console.log(res.data.order);
            //           }).catch((err) => console.log(err));
            //         }else {

            //         }

            //         // console.log(orderModel);


            //         // Mapping
            //         // orderModel.oder.id = paypalOrder.purchase_units[0].payments.captures[0].id,
            //         // orderModel.oder.intent = paypalOrder.intent,
            //         // orderModel.oder.status = paypalOrder.status,
            //         // orderModel.oder.createdDate = paypalOrder.create_time,

            //         // console.log(JSON.stringify(orderModel.order));
            //         // window.location.href("../");
            //     },
            //     onError: err => {
            //         console.log(err);
            //     }
            //     }).render(this.$refs.paypal);
            // },

        },
    }

</script>

<style >
    .cancelButton {
    width: 100%!important;
    margin-top: 10px;
    min-height: 20px!important;
    box-shadow: none !important;
  }
</style>