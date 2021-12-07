<template>
        <div
        class="col-md-9 col-sm-9 col-xs-12"
        v-if="!isProductInfo"
        >

            <v-breadcrumbs class="pb-0"></v-breadcrumbs>

            <v-row dense>

                <v-col cols="12" sm="8" class="pl-6 pt-6">

                <small>Showing 1-12 of 200 products</small>
                </v-col>
                <v-col cols="12" sm="4">

                    <v-skeleton-loader
                    v-bind="attrs"
                    v-if="loading"
                    type="text"
                    ></v-skeleton-loader>
                <!-- <v-select class="pa-0" v-model="select" :items="options" style="margin-bottom: -20px;" outlined dense></v-select> -->
                <v-select v-else class="pa-0"  style="margin-bottom: -20px;" outlined dense></v-select>
                </v-col>
            </v-row>

            <v-divider></v-divider>
            <div class="row text-center" >
                <!-- <div class="col-md-3 col-sm-6 col-xs-12"  v-if="loading">
                <v-card
                    :elevation="hover ? 12 : 2"
                    class="mx-auto"
                    color="grey lighten-4"
                    max-width="600"
                >
                <v-skeleton-loader
                    v-bind="attrs"
                    type="image"
                    ></v-skeleton-loader>
                <v-card-text class="text--primary" style="background-color: rgb(252, 249, 237)">
                    <v-skeleton-loader
                    v-bind="attrs"
                    type="text"
                    ></v-skeleton-loader>
                    <div style="padding-left: 80px; padding-right: 80px">
                        <v-skeleton-loader
                    v-bind="attrs"
                    type="text"
                    ></v-skeleton-loader>
                    </div>


                </v-card-text>

                </v-card>
                </div> -->

                <skeleton-products v-if="loading"></skeleton-products>
                <skeleton-products v-if="loading"></skeleton-products>
                <skeleton-products v-if="loading"></skeleton-products>
                <skeleton-products v-if="loading"></skeleton-products>
                <skeleton-products v-if="loading"></skeleton-products>
                <skeleton-products v-if="loading"></skeleton-products>
                <skeleton-products v-if="loading"></skeleton-products>
                <skeleton-products v-if="loading"></skeleton-products>
                <div class="col-md-3 col-sm-6 col-xs-12" v-for="item in pages" :key="item.num" v-else>

                    <v-hover v-slot="{ hover }">
                    <v-card
                        :elevation="hover ? 12 : 2"
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="400"

                        >


                            <v-hover v-slot:default="{ hover }">
                            <v-img
                                contain
                                class="white--text align-end"
                                :aspect-ratio="16/9"
                                height="180px"
                                :src='item.image'
                                style="background-color: white"
                            >

                                <v-row no-gutters  justify="start"  class="mt-n4 mb-0">
                                    <v-col  class="py-0 my-0" align="start" style="text-align: start" v-if="item.isDealDay">
                                        <svg align="start" style="width:40px;height:40px; color: red" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z" />
                                            <text x="3" y="14" class="percentage" transform="rotate(46, 14, 13) translate(2,2)">-{{item.specialOfferPercentage}}%</text>
                                        </svg>
                                    </v-col>
                                    <!-- <v-col cols="12" v-if="false">
                                        <svg style="width:40px;height:40px; color: rgb(187, 162, 87)" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M20,4C21.11,4 22,4.89 22,6V18C22,19.11 21.11,20 20,20H4C2.89,20 2,19.11 2,18V6C2,4.89 2.89,4 4,4H20M8.5,15V9H7.25V12.5L4.75,9H3.5V15H4.75V11.5L7.3,15H8.5M13.5,10.26V9H9.5V15H13.5V13.75H11V12.64H13.5V11.38H11V10.26H13.5M20.5,14V9H19.25V13.5H18.13V10H16.88V13.5H15.75V9H14.5V14A1,1 0 0,0 15.5,15H19.5A1,1 0 0,0 20.5,14Z" />
                                        </svg>
                                    </v-col> -->
                                </v-row>





                            <v-expand-transition>
                                <div
                                    v-if="hover"
                                    class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal display-3 white--text"
                                    style="height: 100%;"
                                >
                                    <v-btn v-if="hover" :to="`/shop/${collectionsId}/product/${item.id}`" color="white" outlined>VIEW</v-btn>
                                </div>

                            </v-expand-transition>
                            </v-img>
                            </v-hover>
                            <v-card-text class="text--primary" style="background-color: rgb(252, 249, 237)">

                                <!-- <v-btn text x-small :to="`/shop/${collectionsId}/product/${item.id}`">
                                    <span style="text-decoration: none">{{item.name}}</span>
                                </v-btn> -->
                                <div><a @click="goToProductInfo(collectionsId, item.id)" style="text-decoration: none">{{item.name}}</a></div>

                                <div>${{item.customerPrice}} <span v-if="item.isDealDay">-</span><span v-if="item.isDealDay" style="color: red"> $<strike>{{item.lastCustomerPrice}}</strike></span></div>
                            </v-card-text>

                    </v-card>
                    </v-hover>

                </div>
            </div>
        <v-divider></v-divider>
        <v-row>
            <v-col align="center" v-if="loading">

                <v-skeleton-loader
                v-bind="attrs"
                type="avatar"
                ></v-skeleton-loader>

            </v-col>

            <v-col align="right" v-else>
                <v-pagination v-model="page" :length="length" :total-visible="5" circle></v-pagination>
            </v-col>
        </v-row>




        </div>
</template>

<script>
import axios from 'axios'
import router from '../../router/index'
import About from '../../views/About.vue'
import SkeletonProducts from '../skeletonLoadings/SkeletonProducts.vue'
export default {
  components: { About,  'skeletonProducts': SkeletonProducts},
    name: 'Collections',
    props: {
        collectionsId: {
            type: String
        },
    },

    data() {
        return {
            products: [],
            dialog: false,
            isProductInfo: false,
            page: 1,
            length: 2,
            attrs: {
                boilerplate: false,
            },
            loading: false,
            productsLoading: false,
        }
    },
    computed: {
        pages () {
            // A esto hay que hacerle un for sencillo
            if (this.products.length < 8) {
                this.length = 1;
            } else if (this.products.length < 17){
                this.length = 2;
            } else if (this.products.length < 25) {
                this.length = 3;
            } else if (this.products.length < 33) {
                this.length = 4;
            } else if (this.products.length < 41) {
                this.length = 5;
            } else if (this.products.length < 49) {
                this.length = 6;
            } else if (this.products.length < 57) {
                this.length = 7;
            } else if (this.products.length < 65) {
                this.length = 8;
            } else if (this.products.length < 73) {
                this.length = 9;
            } else if (this.products.length < 81) {
                this.length = 10;
            } else if (this.products.length < 89) {
                this.length = 11;
            } else if (this.products.length < 97) {
                this.length = 12;
            } else if (this.products.length < 105) {
                this.length = 13;
            } else if (this.products.length < 113) {
                this.length = 14;
            } else if (this.products.length < 121) {
                this.length = 15;
            } else if (this.products.length < 129) {
                this.length = 16;
            } else if (this.products.length < 137) {
                this.length = 17;
            } else if (this.products.length < 145) {
                this.length = 18;
            } else if (this.products.length < 153) {
                this.length = 19;
            } else if (this.products.length < 161) {
                this.length = 20;
            } else if (this.products.length < 169) {
                this.length = 21;
            } else if (this.products.length < 177) {
                this.length = 22;
            } else if (this.products.length < 185) {
                this.length = 23;
            } else if (this.products.length < 193) {
                this.length = 24;
            } else if (this.products.length < 201) {
                this.length = 25;
            }
            // console.log(this.products.length)

            const { page, length, products } = this;
            const number = 8  // Numero de elementos a mostrar por página
            // console.log(products.slice((page - 1) * number, page * number));
            return products.slice((page - 1) * number, page * number);

        }
    },
    methods: {
        getProducts: async function (collectionId) {
            if (collectionId == 1) {
                axios.get('api/products/inventory')
                .then(res => {
                    this.products = res.data.inventory.rows;
                    this.loading = false;
                }).catch(err => console.log(err))
            } else {
                axios.get('api/products', { params: { collectionId: collectionId } })
                .then(res => {
                    this.products = res.data.products.rows;
                    this.loading = false;
                }).catch(err => console.log(err))
            }

        },
        goToProductInfo: function (collectionId, itemId) {
            router.replace({ path: "/shop/" + collectionId + "/product/" + itemId})

        }

    },
    created() {
        this.getProducts(this.collectionsId);
        this.loading = true;
    },

}
</script>

<style>

    .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
    }

    .percentage {
        fill: white;
        font-size: 6.5px;
        font-weight: bold
    }
</style>
