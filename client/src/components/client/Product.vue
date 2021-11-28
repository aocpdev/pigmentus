<template>
  <v-row>

    <skeleton-product-info v-if="loading"></skeleton-product-info>

    <v-container v-else>
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <v-carousel height="400" hide-delimiters :show-arrows="false">



            <div>
              <v-carousel-item
              aspect-ratio="1.4"
              contain
              v-for="(product, i) in product"
              :key="i"
              :src="product.image"

            >
            </v-carousel-item>
            </div>

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
              @click="addCartMobile(cart)"
              v-if="$vuetify.breakpoint.mobile"
              ><v-icon>mdi-cart</v-icon> ADD TO CART</v-btn
            >
            <v-btn
              v-else
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








      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        width="unset"
        scrollable  persistent

      >
        <v-card>

          <v-app-bar
            color="black"
            style="height: 56px"
          >

            <v-toolbar-title style="width: 350px">
            <span style="color: rgb(187, 162, 87);"><b>Cart &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></span>
            <span style="font-size: 12px; color: white">({{$store.state.cartDetails.productsQuantity}})</span>
          </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              icon
              dark
              @click="dialog = false"
              color="primary"
            >
              <v-icon small>mdi-close</v-icon>
            </v-btn>

          </v-app-bar>


              <v-main class="pt-0" style="background-color: #F8F8F8; ">
                <v-container>

                  <!-- Cuando el Carrito esta empty -->
                  <div v-if="$store.state.isCartEmpty">
                  <v-row class="mt-50px" >
                    <v-col class="pt-1 pb-0">
                      <v-card
                        elevation="1"
                        class="mx-auto"
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
                  <div v-else>
                    <v-row>
                    <v-col class="pt-2">

                      <v-card
                        class="mx-auto"
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
                                  >
                                    Remove
                                  </v-btn>
                                </v-col>
                                <v-col cols="5" class="pb-0">
                                  <v-btn
                                    text
                                    color="primary"
                                    style="text-transform: none"
                                    small
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
                    <v-col class="pt-0 pb-2">
                      <v-card
                        class="mx-auto pt-0"
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



                  <v-row>
                    <v-col class="pt-0">
                      <v-card class="mt-5 mx-auto">
                      <v-subheader style="text-align: center"><b>Your Items</b></v-subheader>
                      <v-divider></v-divider>


                      <v-tabs
                        color="primary"

                      >
                        <v-tab  style="font-size: 13px">Wishlist (0)</v-tab>
                        <v-tab style="font-size: 13px">Buy it again (0)</v-tab>
                        <v-tab style="font-size: 13px">Saved (0)</v-tab>

                        <!-- <v-tab-item
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
                        </v-tab-item> -->

                        <v-tab-item
                        >
                          <v-container fluid>
                            <v-row>
                              <v-subheader style="text-align: center">No tiene Productos</v-subheader>
                            </v-row>
                            <!-- <v-row>
                              <v-col
                              >
                                <v-list flat>

                                    <v-list-item class="list-item">
                                        <v-list-item-action >
                                            <v-img height="60px" width="60px" class="image" ></v-img>
                                        </v-list-item-action>
                                        <v-list-item-content>

                                            <a><v-list-item-title> Nombre del Producto</v-list-item-title></a>
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
                            </v-row> -->
                          </v-container>
                        </v-tab-item>

                        <v-tab-item
                        >
                          <v-container fluid>
                            <v-row>
                              <v-subheader style="text-align: center">No tiene Productos</v-subheader>
                            </v-row>
                            <!-- <v-row>
                              <v-col
                              >
                                <v-list flat>

                                    <v-list-item class="list-item">
                                        <v-list-item-action >
                                            <v-img height="60px" width="60px" class="image" ></v-img>
                                        </v-list-item-action>
                                        <v-list-item-content>

                                            <a><v-list-item-title> Nombre del Producto</v-list-item-title></a>
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
                            </v-row> -->
                          </v-container>
                        </v-tab-item>

                        <v-tab-item
                        >
                          <v-container fluid>
                            <v-row>
                              <v-subheader style="text-align: center">No tiene Productos</v-subheader>
                            </v-row>
                            <!-- <v-row>
                              <v-col
                              >
                                <v-list flat>

                                    <v-list-item class="list-item">
                                        <v-list-item-action >
                                            <v-img height="60px" width="60px" class="image" ></v-img>
                                        </v-list-item-action>
                                        <v-list-item-content>

                                            <a><v-list-item-title> Nombre del Producto</v-list-item-title></a>
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
                            </v-row> -->
                          </v-container>
                        </v-tab-item>
                      </v-tabs>
                    </v-card>
                    </v-col>
                  </v-row>

                  <v-row>
                    <v-col class="pt-0" style="padding-bottom: 150px">
                      <top-picks></top-picks>
                    </v-col>
                  </v-row>



                </v-container>
              </v-main>

          <v-footer  style="background-color: white">
                  <v-row dense class="pa-2" style="background-color: white; height: 124px;">
              <v-col cols="4">
                <span style="font-size: 15px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif"><b>Estimated total</b></span>
              </v-col>
              <v-col cols="8" style="text-align: right;">
                <span style="font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif; font-size: 20px"><b>${{$store.state.cartDetails.total }}</b></span>
              </v-col>

              <v-col cols="12">
                <v-btn @click="goSignIn()" class="black mt-0" style="width: 354px; text-transform: none" rounded>
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
          </v-footer>


        </v-card>
      </v-dialog>


    </v-container>


  </v-row>
</template>
<script>
import axios from "axios";
import VueGtag from "vue-gtag";
import BottomNavigation from "../BottomNavigation.vue";
import store from "../../store/index";
import TopPicks from '../client/TopPicks.vue'
import router from '../../router/index'
import { mapState } from "vuex";
import SkeletonProductsInfo from '../skeletonLoadings/SkeletonProductsInfo.vue'

// Models
import cartModel from "../../modules/cartModel";

export default {
  components: { bottom: BottomNavigation, 'skeletonProductInfo': SkeletonProductsInfo, TopPicks},
  props: {
    productId: {
      type: String,
    },
  },
  name: 'Product',
  data: () => ({
    rating: 4.5,
    product: [],
    breadcrums: {},
    show: false,
    hasProductInCart: false,
    item: 5,
    loading: false,
    drawer: false,
    dialog: false,
    showName: 'View all items',
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
          this.loading = false;
        })
        .catch((err) => console.log(err));
    },
    goSignIn ( ) {
      if (this.$store.state.user.id !== undefined) {
        router.replace({ path: "/cart/checkout"})
        this.dialog = false;
      } else {
        router.replace({ name: "Signin", query: { fromCart: 'true' }})
        this.dialog = false;
      }
    },
    addCartMobile (cart) {
      this.addToCart(cart);
      if (this.$store.state.cartDetails.cart.length > 0) {
        this.$store.state.isCartEmpty = false;
      }
      this.dialog = true;
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
    addToCart: async function (cart) {
      // console.log(cart);
      cart.isEditInCart = false;

      this.$gtag.event('add_to_cart', {
        'event_category': 'ecommerce',
        'event_label': 'cart',
        'value': cart.quantity
      })

      if (this.$vuetify.breakpoint.mobile) {

      } else {
        this.$store.state.drawer = true;
      }

      this.$store.state.isCartEmpty = false;
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
              this.drawer = true;
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
                this.drawer = true;
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
              this.drawer = true;

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

            this.drawer = true;
          })
          .catch((err) => console.log(err));
      }
    },
    getCart: async function (userId) {
      axios
        .get("api/cart", { params: { userId: userId } })
        .then((res) => {
          this.$store.state.cartDetails = res.data.cartDetails;

        })
        .catch((err) => console.log(err));
    },
  },


  created() {
    this.getProduct(this.productId, this.collectionsId);
    window.scrollTo(0, 0);
    this.loading = true;
    if (this.$store.state.user.id === undefined) {
      if (localStorage.__pigmentusCart !== undefined) {
        this.$store.state.cartDetails = JSON.parse(localStorage.__pigmentusCart);
      }

    }

  },
};
</script>


<style >
  .image {
        border: 1px solid #ddd;
        border-radius: 4px;
        width: 150px;
        box-shadow: 0 0 2px 1px rgb(187, 162, 87,  0.5);
    }
    .v-dialog > .v-card > .v-toolbar {
      position: sticky;
      top: 0;
      z-index: 999;
    }

    .v-dialog > .v-card > .v-footer {
      position: sticky;
      bottom: 0;
      z-index: 999;
    }


</style>