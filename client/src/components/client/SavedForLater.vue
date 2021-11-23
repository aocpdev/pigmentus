<template>
    <v-container fluid>
        <!-- <v-row>
            <v-subheader style="text-align: center">No tiene Productos</v-subheader>
        </v-row> -->
        <v-row>
            <v-col
            >
            <v-list flat v-for="item in $store.state.saveForLater" :key="item.productName" class="pt-0">

                <v-list-item class="list-item" >
                    <v-list-item-action>
                        <v-img v-bind:src="item.image" :alt="item.productName" height="60px" width="60px" class="image" ></v-img>
                    </v-list-item-action>
                    <v-list-item-content>

                        <v-list-item-title style="font-size: 11px" class="pb-2"> {{item.productName}}</v-list-item-title>
                        <!-- <v-list-item-subtitle>Descripcion del Producto: </v-list-item-subtitle> -->
                        <div style="width: 70px">
                            <v-btn
                            x-small
                            text
                            color="#3b7015"
                            dark
                            style="text-transform:none"
                            >
                            Add to Cart
                            </v-btn>

                            <v-btn
                            x-small
                            text
                            color="#D32F2F"
                            dark
                            style="text-transform:none"
                            @click="deleteProductSaved(item)"
                            >
                            Remove
                            </v-btn>

                        </div>

                    </v-list-item-content>

                    <v-list-item-action>
                        <span style="font-size: 12px"><b>${{item.customerPrice}}</b></span>
                    </v-list-item-action>
                </v-list-item>
            </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
import store from "../../store/index";
export default {
    name: "SavedForLater",
    data() {
        return {

        }
    },
    methods: {
        deleteProductSaved(productToDelete) {
            if (store.state.user !== '') {
                axios.get("api/saved", { params: { userId: store.state.user.id } }).then((res) => {

                res.data.savedProducts.rows[0].products.map((value, index) => {
                    if (value.productId === productToDelete.productId && res.data.savedProducts.rows[0].products.length >= 2) {
                        store.state.saveForLater.splice(index, 1);
                    }
                })
                console.log("Saved For Later", store.state.saveForLater)
            })
            .catch((err) => console.log(err));
            }

        },
    },

    created() {

            // this.getSavedProducts();


    },

}
</script>