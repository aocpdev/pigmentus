<template>
  <div class="row" no-gutters width="100vh">
    <v-container>
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <v-carousel height="400" hide-delimiters :show-arrows="false">
            <v-carousel-item
              aspect-ratio="1.4"
              contain
              v-for="(product, i) in product"
              :key="i"
              :src="product.image"
            >
            </v-carousel-item>
          </v-carousel>
        </div>
        <div
          class="col-md-7 col-sm-7 col-xs-12"
          v-for="(product, i) in product"
          :key="i"
        >
          <v-btn :to="breadcrums.to" class="ml-2" color="white" text small style="text-transform: none">
            <v-icon small left style="color: rgb(187, 162, 87)">
              mdi-arrow-left
            </v-icon>
            {{ breadcrums.text }}
          </v-btn>

          <div class="pl-6">
            <p class="display-1 mb-0">{{ product.name }}</p>
            <v-card-actions class="pa-0">
              <p class="headline font-weight-light pt-3">
                ${{ product.customerPrice }}
                <span v-if="product.isDealDay">-</span
                ><span v-if="product.isDealDay" style="color: red">
                  $<strike>{{ product.lastCustomerPrice }}</strike></span
                >
                <span v-if="product.isDealDay"
                  ><svg
                    align="start"
                    style="width: 30px; height: 30px; color: red"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z"
                    />
                    <text
                      x="3"
                      y="14"
                      style="font-size: 8px; color: white; font-weight: bold"
                    >
                      -{{ product.specialOfferPercentage }}%
                    </text>
                  </svg></span
                >
              </p>
              <v-spacer></v-spacer>
            </v-card-actions>
            <p class="subtitle-1 font-weight-thin">
              {{ product.description }}
            </p>

            <p class="title">ITEMS</p>

            <v-text-field
              outlined
              style="width: 100px"
              dense
              v-model="cart.quantity"
              type="number"
              min="1"
              oninput="if(Number(this.value) === Number(0)) this.value = 1;"
            ></v-text-field>
            <v-btn
              class="primary white--text"
              outlined
              tile
              dense
              @click="addToCart(cart)"
              ><v-icon>mdi-cart</v-icon> ADD TO CART</v-btn
            >
            <v-btn class="ml-4" outlined tile>ADD TO WISHLIST</v-btn>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12">
          <v-card-text class="pa-0 pt-4" tile outlined>
            <p class="subtitle-1 font-weight-light pt-3 text-center">
              YOU MIGHT ALSO LIKE
            </p>
            <v-divider></v-divider>
            <div class="row text-center">
              <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img class="white--text align-end" height="200px">
                      <v-card-title>Bags & Purses </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 60% + Extra 10%</div>
                      <div>Baggit, Zara, Fossil</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn class="ma-2" outlined color="info">
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img class="white--text align-end" height="200px">
                      <v-card-title>T-Shirt </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 50%</div>
                      <div>Zara, Selected, Celio</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn class="ma-2" outlined color="info">
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img class="white--text align-end" height="200px">
                      <v-card-title>Jeans </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 60% + Extra 10%</div>
                      <div>Jack & Jones, Levis</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn class="ma-2" outlined color="info">
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img class="white--text align-end" height="200px">
                      <v-card-title>Shirts </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 60% + Extra 10%</div>
                      <div>Nike, Adidas, Puma</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn class="ma-2" outlined color="info">
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img class="white--text align-end" height="200px">
                      <v-card-title>Shoes </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 60% + Extra 10%</div>
                      <div>Nike, Adidas, Puma</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn class="ma-2" outlined color="info">
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center">
                <v-hover v-slot:default="{ hover }" open-delay="200">
                  <v-card :elevation="hover ? 16 : 2">
                    <v-img class="white--text align-end" height="200px">
                      <v-card-title>Jackets </v-card-title>
                    </v-img>

                    <v-card-text class="text--primary text-center">
                      <div>Upto 60% + Extra 10%</div>
                      <div>Nike, Adidas, Puma</div>
                    </v-card-text>

                    <div class="text-center">
                      <v-btn class="ma-2" outlined color="info">
                        Explore
                      </v-btn>
                    </div>
                  </v-card>
                </v-hover>
              </div>
            </div>
          </v-card-text>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
import BottomNavigation from "../BottomNavigation.vue";
import store from "../../store/index";
import { mapState } from "vuex";

// Models
import cartModel from "../../modules/cartModel";

export default {
  components: { bottom: BottomNavigation },
  props: {
    productId: {
      type: String,
    },
  },
  name: "Product",
  data: () => ({
    rating: 4.5,
    product: [],
    breadcrums: {},
    hasProductInCart: false,
    item: 5,
    items: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Lorem ipsum dolor?",
        subtitle:
          "<span class='text--primary'>Ali Connors</span> &mdash; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Tincidunt arcu non sodales neque sodales ut etiam. Lectus arcu bibendum at varius vel pharetra. Morbi tristique senectus et netus et malesuada.\n" +
          "\n",
      },
    ],
    cart: {
      quantity: 1,
    },
  }),
  methods: {
    isZero (quantity) {
      // console.log(quantity);
      if (parseInt(quantity) == 0) {
        this.cart.quantity = "1";
        // console.log(this.cart.quantity);
      }

    },
    getProduct: async function (productId) {
      let pathArray = this.$route.path.split("/");
      pathArray.shift();
      let collectionId = pathArray[1];
      axios
        .get("api/collections/collection", {
          params: { id: collectionId },
        })
        .then((res1) => {
          this.breadcrums = {
            text: "Back to " + res1.data.collection.rows[0].name,
            disabled: false,
            exact: true,
            to: "/shop/" + res1.data.collection.rows[0].id,
          };
        })
        .catch((err) => console.log(err));
      axios
        .get("api/products/prod", { params: { id: productId } })
        .then((res) => {
          this.product = res.data.product.rows;
          this.cart.productId = this.product[0].id;
          this.cart.userId = this.$store.state.user.id;
        })
        .catch((err) => console.log(err));
    },

    addToCart: async function (cart) {
      cart.isEditInCart = false;

      if (store.state.user === "") {
        store.state.cartDetails.shippingFee = (10).toFixed(2);

        const sum = function (a) {
          return (a.length && parseFloat(a[0]) + sum(a.slice(1))) || 0;
        };

        axios
          .get("api/products/prod", { params: { id: cart.productId } })
          .then((res) => {
            let cartObj = {
              productId: cart.productId,
              productName: res.data.product.rows[0].name,
              customerPrice: res.data.product.rows[0].customerPrice,
              weight: res.data.product.rows[0].weight,
              description: res.data.product.rows[0].description,
              image: res.data.product.rows[0].image,
              quantity: cart.quantity,
              price: 0,
              collectionId: res.data.product.rows[0].collectionId,
            };
            if (store.state.cartDetails.productsQuantity === 0) {
              let totalArray = [];
              cartObj.price = (
                res.data.product.rows[0].customerPrice * cartObj.quantity
              ).toFixed(2);
              store.state.cartDetails.subtotal = cartObj.price;
              store.state.cartDetails.tax = (
                store.state.cartDetails.subtotal * 0.115
              ).toFixed(2);

              // store.state.carDetails.paymentFee = res.data.product.rows.paymentFee;
              totalArray.push(store.state.cartDetails.subtotal);
              totalArray.push(store.state.cartDetails.shippingFee);
              totalArray.push(store.state.cartDetails.tax);
              store.state.cartDetails.total = sum(totalArray).toFixed(2);
              store.state.cartDetails.productsQuantity = cart.quantity;

              store.state.cartDetails.cart.push(cartObj);

              localStorage.setItem(
                "__pigmentusCart",
                JSON.stringify(store.state.cartDetails)
              );
            } else {


              store.state.cartDetails.cart.map((value, index) => {
              if (cart.productId === value.productId) {
                let quantityArray = [];
                let pricesArray = [];
                this.hasProductInCart = true;
                let totalArray = [];

                quantityArray.push(store.state.cartDetails.cart[index].quantity);
                quantityArray.push(cart.quantity);
                store.state.cartDetails.cart[index].quantity = sum(quantityArray);


                // console.log(parseInt(cart.quantity));

                store.state.cartDetails.cart[index].price = (store.state.cartDetails.cart[index].customerPrice * parseInt(store.state.cartDetails.cart[index].quantity)).toFixed(2);


                store.state.cartDetails.cart.map((value, index) => {pricesArray.push(value.price); console.log(value)});


                store.state.cartDetails.subtotal = sum(pricesArray).toFixed(2);

                store.state.cartDetails.tax = (
                  store.state.cartDetails.subtotal * 0.115
                ).toFixed(2);

                totalArray.push(store.state.cartDetails.subtotal);
                totalArray.push(store.state.cartDetails.shippingFee);
                totalArray.push(store.state.cartDetails.tax);
                store.state.cartDetails.total = sum(totalArray).toFixed(2);


                let quantityForCartIcon = store.state.cartDetails.cart.reduce((a, b) => ({
                  quantity: parseInt(a.quantity) + parseInt(b.quantity),
                }));
                this.$store.state.cartDetails.productsQuantity =
                  quantityForCartIcon.quantity;
                store.state.cartDetails.productsQuantity = quantityForCartIcon.quantity;

                localStorage.setItem(
                  "__pigmentusCart",
                  JSON.stringify(store.state.cartDetails)
                );
              }
            });

            if (this.hasProductInCart === false) {
              // let cartDetails = JSON.parse(localStorage.__pigmentusCart);

              let quantityArray = [];

              let subtotalArray = [];
              let totalArray = [];

              cartObj.price = (
                res.data.product.rows[0].customerPrice * cartObj.quantity
              ).toFixed(2);

              subtotalArray.push(store.state.cartDetails.subtotal);
              subtotalArray.push(cartObj.price);
              store.state.cartDetails.subtotal =
                sum(subtotalArray).toFixed(2);
              store.state.cartDetails.tax = (
                store.state.cartDetails.subtotal * 0.115
              ).toFixed(2);

              totalArray.push(store.state.cartDetails.subtotal);
              totalArray.push(store.state.cartDetails.shippingFee);
              totalArray.push(store.state.cartDetails.tax);
              store.state.cartDetails.total = sum(totalArray).toFixed(2);

              store.state.cartDetails.cart.push(cartObj);

              console.log(store.state.cartDetails);

              let quantityForCartIcon = store.state.cartDetails.cart.reduce(
                (a, b) => ({
                  quantity: parseInt(a.quantity) + parseInt(b.quantity),
                })
              );
              store.state.cartDetails.productsQuantity =
                quantityForCartIcon.quantity;

              localStorage.setItem(
                "__pigmentusCart",
                JSON.stringify(store.state.cartDetails)
              );

              // console.log(cartDetails);

              // store.state.cartDetails = cartDetails;
            } else {
            }
            // store.state.cartDetails.productsQuantity = store.state.cartDetails.productsQuantity + 1;

            // console.log('entro aqui', store.state.cartDetails);

            // let total = store.state.cartDetails.cart.reduce((a, b) => ({value: a.customerPrice + b.customerPrice}));
          }
        });
      } else {
        axios
          .post("api/cart", cart)
          .then((res) => {
            this.getCart(this.$store.state.user.id);
          })
          .catch((err) => console.log(err));
      }
    },
    getCart: async function (userId) {
      axios
        .get("api/cart", { params: { userId: userId } })
        .then((res) => {
          this.$store.state.cartDetails = res.data.cartDetails;
          console.log();
        })
        .catch((err) => console.log(err));
    },
  },


  created() {
    this.getProduct(this.productId, this.collectionsId);
    window.scrollTo(0, 0);
    this.$store.state.cartDetails = JSON.parse(localStorage.__pigmentusCart);
  },
};
</script>
