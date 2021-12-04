<template>
    <v-navigation-drawer
          v-model="$store.state.drawer"
          v-if="!$vuetify.breakpoint.mobile"
          right
          temporary
          app
          style="background-color: #F7F7F7; width: 400px; z-index: 102"
          touchless
          :fullscreen="$vuetify.breakpoint.xsOnly"
        >
          <v-app-bar
          app
          color="black"
          dark
        >
          <v-toolbar-title style="width: 400px">
            <span style="color: rgb(187, 162, 87);"><b>Cart &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></span>
            <span style="font-size: 12px;">({{$store.state.cartDetails.productsQuantity}})</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
                tile
                large
                color="primary"
                class="ma-2"
                icon
                @click="closeNavigationDrawer()"
              >
                <v-icon small>mdi-close</v-icon>
              </v-btn>
          </v-app-bar>


          <template v-slot:append v-if="!$store.state.isCartEmpty">
            <v-row dense class="pa-2" style="background-color: white; height: 124px;">
              <v-col cols="4">
                <span style="font-size: 15px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif"><b>Estimated total</b></span>
              </v-col>
              <v-col cols="8" style="text-align: right;">
                <span style="font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif; font-size: 20px"><b>${{$store.state.cartDetails.total }}</b></span>
              </v-col>

              <v-col cols="12">
                <v-btn @click="goSignIn()" class="black mt-0" style="width: 382px; text-transform: none" rounded>
                <span style="color: rgb(187, 162, 87)">Continue to checkout</span>
                <svg
                  style="width: 24px; height: 24px; color: rgb(187, 162, 87)"
                  class="pl-2"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 11H4V8H20Z"
                  />
                </svg>
              </v-btn>
              </v-col>

            </v-row>



          </template>

              <v-main>
                <v-container>

                  <!-- Cuando el Carrito esta empty -->
                  <div v-if="$store.state.isCartEmpty">
                  <v-row class="mt-50px" >
                    <v-col class="pt-1 pb-0">
                      <v-card
                        elevation="1"
                        class="mx-auto"
                        max-width="375"
                      >
                        <v-list-item >
                            <v-list-item-action>
                            <v-img
                              alt="Shopping Logo"
                              contain
                              src="../../assets/ShoppingCart.png"
                              transition="scale-transition"
                              width="80"
                              height="80"
                            />
                            </v-list-item-action>

                          <v-list-item-content>
                            <v-list-item-title class="ml-2">

                              Your Cart is empty


                            </v-list-item-title>
                            <div style="width: 100px">
                              <v-btn
                                small
                                text
                                color="primary"
                                to="/shop/1"
                                class="noUpper"
                              >
                                See recommendations
                              </v-btn>
                            </div>

                            <a href="/shop/1" ><v-list-item-subtitle></v-list-item-subtitle></a>
                          </v-list-item-content>


                        </v-list-item>


                      </v-card>
                    </v-col>
                  </v-row>


                  </div>





                  <!-- Cuando el carro tiene productsos -->
                  <div v-if="!$store.state.isCartEmpty">
                    <v-row class="mt-50px" >
                    <v-col class="pt-2">

                      <v-card
                        class="mx-auto"
                        max-width="375"
                        elevation="1"
                      >

                        <v-row v-if="!show">
                          <v-col cols="4" class="pt-0">
                            <v-card-subtitle class="pb-0">
                              <span style="font-size: 12px">{{$store.state.cartDetails.productsQuantity}} items</span>
                            </v-card-subtitle>
                          </v-col>
                          <v-col cols="8" style="text-align: right" class="pt-0" >
                          </v-col>
                        </v-row>

                        <v-row class="pl-6 pr-6" v-if="!show">
                          <v-col cols="3" v-for="item in $store.state.cartDetails.cart"
                          :key="item.name">
                            <v-badge
                              color="black"
                              overlap
                              small
                              :content="item.quantity"
                              :value="item.quantity"
                            >
                            <v-img   v-bind:src="item.image" :alt="item.name" height="60px" width="60px" class="image" ></v-img>
                            </v-badge>
                          </v-col>

                        </v-row>
                        <v-card-actions>
                          <v-btn
                            text
                            style="text-transform: none"
                            @click="changeExpandName()"
                          >
                            {{showName}}

                          </v-btn>

                          <v-spacer></v-spacer>

                          <v-btn
                            icon
                            @click="changeExpandName()"
                          >
                            <v-icon style="color: black;">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                          </v-btn>
                        </v-card-actions>

                        <v-expand-transition>
                          <div v-show="show">
                            <v-divider></v-divider>

                            <v-row v-for="item in $store.state.cartDetails.cart"
                              :key="item.name" class="pl-2" justify="center" align="center">

                              <v-col cols="12" class="pb-0">
                                <v-row>
                                  <v-col cols="3" class="pr-0 pb-0">

                                <v-img v-bind:src="item.image" :alt="item.name" height="60px" width="60px" class="image" ></v-img>
                              </v-col>

                              <v-col cols="6" class="pl-0 pt-0 mb-0 pb-0"  style="text-align: start;">
                                <v-card-subtitle>
                                  <span style="font-size: 12px"><b> {{item.productName}}</b></span>
                                </v-card-subtitle>
                              </v-col>
                              <v-col cols="3" align="center" justify="center" style="text-align: right;" class="pr-6">
                                <span style="font-size: 14px"><b>${{item.price}}</b></span>
                              </v-col>

                                <v-col cols="3" class="pb-0">
                                  <v-btn
                                    text
                                    color="#D32F2F"
                                    style="text-transform: none"
                                    small
                                    @click="deleteProductFromCart(item.id)"
                                  >
                                    Remove
                                  </v-btn>
                                </v-col>
                                <v-col cols="5" class="pb-0">
                                  <v-btn
                                    text
                                    color="#558B2F"
                                    style="text-transform: none"
                                    small
                                    @click="savedProducts(item)"
                                  >
                                    Save for later
                                  </v-btn>
                                </v-col>

                                <v-col cols="4" style="text-align: right;" class="pt-0 pb-0">
                                  <v-text-field
                                    outlined
                                    style="width: 80px"
                                    dense
                                    type="number"
                                    v-model="item.quantity"
                                    @input="up(item)"
                                    min="1"
                                    color="primary"
                                    oninput="if(Number(this.value) === Number(0)) this.value = 1;"
                                  ></v-text-field>
                                </v-col>

                                </v-row>
                              </v-col>



                              <v-col cols="12" class="pt-0 pb-0">
                                <v-divider></v-divider>
                              </v-col>







                            </v-row>


                          </div>
                        </v-expand-transition>
                      </v-card>
                    </v-col>
                  </v-row>



                  <v-row class="pt-2" >
                    <v-col class="pt-0 pb-0">
                      <v-card
                        class="mx-auto pt-0"
                        max-width="375"
                      >

                        <v-row>
                          <v-col cols="6" >
                              <span style="font-size: 14px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif" class="pl-3 pr-3"><b>Subtotal </b> <span style="font-size: 12px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif">({{$store.state.cartDetails.productsQuantity}})</span></span>
                          </v-col>
                          <v-col cols="6" style="text-align: right"  >
                              <span style="font-size: 14px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif" class="pl-3 pr-3"><b>${{$store.state.cartDetails.subtotal}}</b></span>
                          </v-col>
                          <v-col cols="6" >
                              <span style="font-size: 14px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif" class="pl-3 pr-3"><b>Tax</b></span>
                          </v-col>
                          <v-col cols="6" style="text-align: right"  >
                              <span style="font-size: 14px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif" class="pl-3 pr-3"><b>${{$store.state.cartDetails.tax}}</b></span>
                          </v-col>
                          <v-col cols="6" >
                              <span style="font-size: 14px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif" class="pl-3 pr-3"><b>Shipping fee</b></span>
                          </v-col>
                          <v-col cols="6" style="text-align: right"  >
                              <span style="font-size: 14px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif" class="pl-3 pr-3"><b>$10.00</b></span>
                          </v-col>
                          <v-col cols="12" class="pt-1 pb-1 pr-6 pl-6">
                            <v-divider class="pt-0 pb-0" ></v-divider>
                          </v-col>
                          <v-col cols="6" >
                              <span style="font-size: 14px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif" class="pl-3 pr-3"><b>Estimated total</b></span>
                          </v-col>
                          <v-col cols="6" style="text-align: right"  >
                              <span style="font-size: 14px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif" class="pl-3 pr-3"><b>${{$store.state.cartDetails.total}}</b></span>
                          </v-col>
                        </v-row>





                      </v-card>
                    </v-col>
                  </v-row>
                  </div>

                  <v-row class="mt-5">
                    <your-items></your-items>
                  </v-row>

                  <v-row>
                    <v-col class="pt-0">
                      <top-picks></top-picks>
                    </v-col>
                  </v-row>



                </v-container>
              </v-main>



        </v-navigation-drawer>
</template>

<script>
import router from "../../router/index";
import store from "../../store/index";
import TopPicks from '../client/TopPicks.vue'
import YourItems from '../../views/YourItems.vue'
import axios from "axios";
import Helpers from '../client/common/Helpers.vue'
export default {
    components: {TopPicks, YourItems},
    name: 'NavigationCart',
    data() {
        return {
            cartDetails: {},
            show: false,
            showName: 'View all items',
        }
    },
    methods: {
    getCart: async function (userId) {
      if (userId !== undefined) {

      axios.get("api/cart", { params: { userId: userId } }).then((res) => {

        this.$store.state.cartDetails = res.data.cartDetails;
        this.cartDetails = res.data.cartDetails;
        this.$store.state.cartDetails.productsQuantity = this.cartDetails.productsQuantity;
        if (this.cartDetails.cart.length === 0) {
          this.$store.state.isCartEmpty = true;
        }
      }).catch((err) => console.log(err));

      }
      else {
        if (localStorage.__pigmentusCart !== undefined) {
        this.cartDetails = JSON.parse(localStorage.__pigmentusCart);
      }
      }

    },
    deleteProductFromCart (productId) {
      if (this.$store.state.user !== '') {
        axios.delete("api/cart", { params: { productId: productId } }).then((res) => {
            console.log('dimelo: ', res)
            this.getCart(this.$store.state.user.id);
        }).catch((err) => console.log(err));
      }else {
        console.log('entro aqui');
      }
    },
    savedProducts (productToSave) {

      console.log('User Id: ', this.$store.state.user.id)

      console.log('Product To Save:', productToSave);

      let savedProduct = {}

      if (this.$store.state.user.id !== undefined) {
        savedProduct.product = {productToSave};
        savedProduct.userId = this.$store.state.user.id;
        let date = new Date();
        savedProduct.createdDate = date;

        axios.post("api/saved", savedProduct).then((res) => {
          console.log(res);
          this.deleteProductFromCart(productToSave.id);
          Helpers.methods.getSavedProducts();
        })
        .catch((err) => console.log(err));

      } else {

      }
    },
    goSignIn ( ) {
      if (this.$store.state.user.id !== undefined) {
        router.replace({ path: "/cart/checkout"})
      } else {
        router.replace({ name: "Signin", query: { fromCart: 'true' }})
      }
    },
    closeNavigationDrawer() {
      this.$store.state.drawer = false;
      this.show = false;
    },
    changeExpandName () {
      if (this.show === false ) {
        this.showName = 'Hide all items'
        this.show = true;
      }else {
        this.showName = 'View all items'
        this.show = false;
      }
    },
    up(item) {
      let pricesArray = [];
      const sum = function (a) {
        return (a.length && parseFloat(a[0]) + sum(a.slice(1))) || 0;
      };

      if (this.$store.state.user.id !== undefined) {
        item.isEditInCart = true;
        axios
          .post("api/cart", item)
          .then((res) => {
            this.getCart(this.$store.state.user.id);
          })
          .catch((err) => console.log(err));
      } else {
        parseInt(item.quantity);
        let quantity = item.quantity;
        this.cartDetails.cart.map((value, index) => {
          if (item.productId === value.productId) {

            let totalArray = [];
            this.cartDetails.cart[index].quantity = item.quantity;
            this.cartDetails.cart[index].price = (
              item.customerPrice * item.quantity
            ).toFixed(2);
            this.cartDetails.cart.map((value, index) => {
              pricesArray.push(value.price);
            });

            this.cartDetails.subtotal = sum(pricesArray).toFixed(2);

            this.cartDetails.tax = (
              this.cartDetails.subtotal * 0.115
            ).toFixed(2);

            totalArray.push(this.cartDetails.subtotal);
            totalArray.push(this.cartDetails.shippingFee);
            totalArray.push(this.cartDetails.tax);
            this.cartDetails.total = sum(totalArray).toFixed(2);


            let quantityForCartIcon = this.cartDetails.cart.reduce((a, b) => ({
              quantity: parseInt(a.quantity) + parseInt(b.quantity),
            }));
            this.$store.state.cartDetails.productsQuantity =
              quantityForCartIcon.quantity;
            this.cartDetails.productsQuantity = quantityForCartIcon.quantity;

            localStorage.setItem(
              "__pigmentusCart",
              JSON.stringify(this.cartDetails)
            );
          }
        });
      }
    },
  },

  created() {

    if (this.$store.state.user.id !== undefined) {
      this.getCart(this.$store.state.user.id);
    }else {
      if (this.$store.state.cartDetails.cart.length > 0) {
        this.$store.state.isCartEmpty = false;
      }
    }


    // axios.get("api/saved", { params: { userId: 2 } }).then((res) => {

    //     console.log(res.data.savedProducts)
    //   }).catch((err) => console.log(err));

  },
  updated() {

    //   this.getCart()
    },
}
</script>

<style lang="">

</style>