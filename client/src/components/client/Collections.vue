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
                <!-- <v-select class="pa-0" v-model="select" :items="options" style="margin-bottom: -20px;" outlined dense></v-select> -->
                <v-select class="pa-0"  style="margin-bottom: -20px;" outlined dense></v-select>
                </v-col>
            </v-row>

            <v-divider></v-divider>
            <div class="row text-center" >
                <div class="col-md-3 col-sm-6 col-xs-12" v-for="item in pages" :key="item.num" >
                    <v-hover v-slot="{ hover }">
                    <v-card
                        :elevation="hover ? 12 : 2"
                        class="mx-auto"
                        color="grey lighten-4"
                        max-width="600"
                        >

                            <v-hover v-slot:default="{ hover }">
                            <v-img
                                content
                                class="white--text align-end"
                                :aspect-ratio="16/9"
                                height="200px"
                                :src='item.image'
                            >

                                <v-row no-gutters  justify="start"  class="mt-n4 mb-0">
                                    <v-col  class="py-0 my-0" align="start" style="text-align: start" v-if="item.isDealDay">
                                        <svg align="start" style="width:40px;height:40px; color: red" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z" />
                                            <text x="3" y="14" style="font-size: 8px; color: white; font-weight: bold">-{{item.specialOfferPercentage}}%</text>
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
                                <div><a :href="`/shop/${collectionsId}/product/${item.id}`" style="text-decoration: none">{{item.name}}</a></div>
                                <div>${{item.customerPrice}} <span v-if="item.isDealDay">-</span><span v-if="item.isDealDay" style="color: red"> $<strike>{{item.lastCustomerPrice}}</strike></span></div>
                            </v-card-text>

                    </v-card>
                    </v-hover>

                </div>
            </div>
        <v-divider></v-divider>
        <v-row>
            <v-col align="right">
                <v-pagination v-model="page" :length="length" circle></v-pagination>
            </v-col>
        </v-row>




        </div>
</template>

<script>
import axios from 'axios'
export default {
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
            length: 2
        }
    },
    computed: {
        pages () {
            if (this.products.length < 10) {
                this.length = 1;
            } else if (this.products.length < 20){
                this.length = 2;
            } else if (this.products.length < 30) {
                this.length = 3
            }

            const { page, length, products } = this;
            const number = 8  // Numero de elementos a mostrar por página
            console.log(products.slice((page - 1) * number, page * number));
            return products.slice((page - 1) * number, page * number);

        }
    },
    methods: {
        getProducts: async function (collectionId) {
            if (collectionId == 1) {
                axios.get('api/v1.0/products/inventory')
                .then(res => {
                    this.products = res.data.inventory.rows;
                }).catch(err => console.log(err))
            } else {
                axios.get('api/v1.0/products', { params: { collectionId: collectionId } })
                .then(res => {
                    this.products = res.data.products.rows;
                }).catch(err => console.log(err))
            }

        }

    },
    created() {
        this.getProducts(this.collectionsId);
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

</style>
