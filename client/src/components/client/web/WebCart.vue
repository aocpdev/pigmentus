<template>
  <div>
    <v-row>
      <v-col cols="12" class="pt-0 pb-0">
        <span style="font-size: 24px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif"> <b> Cart</b> <span style="font-size: 12px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif">({{$store.state.cartDetails.productsQuantity}} items)</span></span>
    </v-col>
    </v-row>
    <v-row>
      <!-- Cuando no hay nada en el carrito -->
      <v-col :cols="12" md="9" sm="12"  v-if="isCartEmpty">

          <v-card
            elevation="1"
          >
            <v-list-item >
              <v-list-action>
                    <v-img
                      alt="Shopping Logo"
                      class="shrink"
                      contain
                      src="../../../assets/ShoppingCart.png"
                      transition="scale-transition"
                      width="80"
                      height="80"
                    />
                  </v-list-action>
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

          <v-card class="mt-5">
            <v-subheader style="text-align: center"><b>Your Items</b></v-subheader>
            <v-divider></v-divider>


            <v-tabs
              color="primary"

            >
              <v-tab>Wishlist (0)</v-tab>
              <v-tab>Buy it again</v-tab>

              <v-tab-item
              >
                <v-container fluid>
                  <v-row>
                    <v-subheader style="text-align: center">No tiene Productos</v-subheader>
                  </v-row>
                  <v-row>
                    <v-col
                    >

                    </v-col>
                  </v-row>
                </v-container>
              </v-tab-item>

              <v-tab-item
              >
                <v-container fluid>
                  <v-row>
                    <v-subheader style="text-align: center">No tiene Productos</v-subheader>
                  </v-row>
                  <v-row>
                    <v-col
                    >
                      <v-list flat>

                          <v-list-item class="list-item">
                              <v-list-item-action >
                                  <v-img height="100px" width="100px" class="image" ></v-img>
                              </v-list-item-action>
                              <v-list-item-content>

                                  <a href="#"><v-list-item-title> Nombre del Producto</v-list-item-title></a>
                                  <v-list-item-subtitle>Descripcion del Producto: </v-list-item-subtitle>
                                  <div style="width: 70px">
                                    <v-btn
                                      x-small
                                      outlined
                                      color="primary"
                                    >
                                      Add to Cart
                                    </v-btn>
                                  </div>

                              </v-list-item-content>

                              <v-list-item-action>
                                <v-list-item-title><b>$2.99</b></v-list-item-title>
                              </v-list-item-action>
                          </v-list-item>
                      </v-list>
                    </v-col>
                  </v-row>
                </v-container>
              </v-tab-item>
            </v-tabs>
          </v-card>
        </v-col>

        <v-col :cols="12" md="3" sm="12" v-if="isCartEmpty">
          <top-picks></top-picks>
        </v-col>

      <!-- Cuando hay productos en el carrito -->
      <v-col :cols="12" md="8" sm="12" v-if="!isCartEmpty">
        <v-card
        class="mx-auto"
        >

        <v-row v-if="!show">
            <v-col cols="4" class="pt-0">
            <v-card-subtitle class="pb-0">
                <span style="font-size: 12px">{{cartDetails.productsQuantity}} items</span>
            </v-card-subtitle>
            </v-col>
            <v-col cols="8" style="text-align: right" class="pt-0" >
            <!-- <v-card-subtitle class="pb-0">
                <span style="font-size: 14px"><b>${{$store.state.cartDetails.subtotal}}</b></span>
            </v-card-subtitle> -->
            </v-col>
        </v-row>

        <v-row class="pl-6 pr-6" v-if="!show">
            <v-col  v-for="item in cartDetails.cart"
            :key="item.name">

            <v-row>
              <v-badge
                color="black"
                overlap
                small
                :content="item.quantity"
                :value="item.quantity"
            >
            <v-img   v-bind:src="item.image" :alt="item.name" height="60px" width="60px" class="yuca" ></v-img>
            </v-badge>
            </v-row>





            </v-col>

        </v-row>
        <v-card-actions>
            <v-btn
            text
            style="text-transform: none"
            >
            {{viewItems}}
            </v-btn>

            <v-spacer></v-spacer>

            <v-btn
            icon
            @click="show = !show"
            >
            <v-icon style="color: black;">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
        </v-card-actions>

        <v-expand-transition>
            <div v-show="show">
            <v-divider></v-divider>

            <v-row v-for="item in cartDetails.cart"
                :key="item.name" class="pl-2" justify="center" align="center">

                <v-col cols="12" class="pb-0">
                <v-row>
                    <v-col cols="1" class="pr-0 pb-0">

                      <v-img v-bind:src="item.image" :alt="item.name" height="60px" width="60px" class="image" ></v-img>

                    </v-col>

                <v-col cols="9" class="pl-0  mb-0 pb-0"  style="text-align: start;">
                  <v-btn
                    text
                    color="primary"
                    style="text-transform: none"
                    small
                    class="pl-0"
                    :to="`/shop/${item.collectionId}/product/${item.productId}`"
                    >
                    {{item.productName}}
                    </v-btn>
                    <!-- <span style="font-size: 14px"><b> {{item.productName}}</b></span> -->
                    <p style="font-size: 11px">{{item.description}}</p>
                </v-col>
                <v-col cols="1" style="text-align: right;" class="pt-6 pb-0">
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
                <v-col cols="1"  style="text-align: right;" class="pr-6 pt-8">
                <span style="font-size: 14px"><b>${{item.price}}</b></span>
                </v-col>

                <v-col cols="2" class="pb-0 pt-1">
                    <v-btn
                    text
                    color="#D32F2F"
                    style="text-transform: none"
                    small
                    >
                    Remove
                    </v-btn>
                </v-col>
                <v-col cols="5" class="pb-0 pt-1">
                    <v-btn
                    text
                    color="#558B2F"
                    style="text-transform: none"
                    small
                    >
                    Save for later
                    </v-btn>
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

        <div class="pt-5 pl-0 pr-0">
          <your-items></your-items>
        </div>
      </v-col>

      <v-col
        :cols="12"
        md="4"
        sm="12"
        v-if="!isCartEmpty"
      >

        <v-card
        class="mx-auto pt-0"
        >

        <v-row>
            <v-col cols="6" >
                <span style="font-size: 14px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif" class="pl-3 pr-3"><b>Subtotal </b> <span style="font-size: 12px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif">({{cartDetails.productsQuantity}} items)</span></span>
            </v-col>
            <v-col cols="6" style="text-align: right"  >
                <span style="font-size: 14px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif" class="pl-3 pr-3"><b>${{cartDetails.subtotal}}</b></span>
            </v-col>
            <v-col cols="6" >
                <span style="font-size: 14px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif" class="pl-3 pr-3"><b>Tax</b></span>
            </v-col>
            <v-col cols="6" style="text-align: right"  >
                <span style="font-size: 14px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif" class="pl-3 pr-3"><b>${{cartDetails.tax}}</b></span>
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
                <span style="font-size: 18px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif" class="pl-3 pr-3"><b>${{cartDetails.total}}</b></span>
            </v-col>

            <v-col cols="12" class="pt-0 pl-5 pr-5">
              <v-btn @click="goSignIn()" class="black mt-0" style="max-width: 812px; text-transform: none" block rounded>
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

        </v-card>

        <div class="pt-5">
          <top-picks></top-picks>
        </div>


      </v-col>
    </v-row>

    <!-- <v-row >
      <v-col :cols="12" md="8" sm="12">

      </v-col>

      <v-col :cols="12" md="4" sm="12">
        <top-picks></top-picks>
      </v-col>
    </v-row> -->
  </div>

</template>
<script>
import TopPicks from "../TopPicks.vue";
import YourItems from '../../../views/YourItems.vue'
import axios from "axios";
import router from "../../../router/index";
export default {
  name: "CartSummary",
  components: { TopPicks, YourItems },
  data: () => ({

    viewItems: "View all items",
    cartDetails: {},
    isCartEmpty: true,
    show: false,
  }),
  mounted: function () {},
  methods: {
    getCart: async function (userId) {
      if (userId !== undefined) {
      axios.get("api/cart", { params: { userId: userId } }).then((res) => {
        this.cartDetails = res.data.cartDetails;
        this.$store.state.cartDetails.productsQuantity = this.cartDetails.productsQuantity;
      }).catch((err) => console.log(err));
      }
      else {
        this.cartDetails = JSON.parse(localStorage.__pigmentusCart);
      }
    },
    goSignIn ( ) {
      if (this.$store.state.user.id !== undefined) {
        router.replace({ path: "/cart/checkout"})
      } else {
        router.replace({ name: "Signin", query: { fromCart: 'true' }})
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
    this.getCart(this.$store.state.user.id);
    if (this.$store.state.cartDetails.cart.length > 0) {
      this.isCartEmpty = false;
    }
  },
  updated() {
    if (this.show !== false) {
        this.viewItems = 'Hide all items'
    }else {
        this.viewItems = 'View all items'
    }
  },
};
</script>

<style>
.orderBorder {
  border: 1px solid rgb(187, 162, 87);
  border-radius: 5px;
}
.v-tab {
  text-transform: none !important;
}
.noUpper {
  text-transform: none !important;
}
.yuca {
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 150px;
  box-shadow: 0 0 2px 1px rgb(187, 162, 87,  0.5);
}
</style>