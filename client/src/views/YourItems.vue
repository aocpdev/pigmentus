<template>
    <v-col class="pt-0 pl-0 pr-0">
        <v-card class="mx-auto ">
        <v-subheader style="text-align: center"><b>Your Items</b></v-subheader>
        <v-divider></v-divider>


        <v-tabs
        color="primary"

        >
        <v-tab  style="font-size: 11px">Wishlist (100)</v-tab>
        <v-tab style="font-size: 11px">Buy it again (100)</v-tab>
        <v-tab style="font-size: 11px">Saved ({{$store.state.saveForLater.length}})</v-tab>

        <v-tab-item>
            <wishlist></wishlist>
        </v-tab-item>

        <v-tab-item>
            <buy-it-again></buy-it-again>
        </v-tab-item>

        <v-tab-item>
            <saved-for-later></saved-for-later>
        </v-tab-item>
        </v-tabs>
    </v-card>
    </v-col>
</template>

<script>
import BuyItAgain from '../components/client/BuyItAgain.vue'
import SavedForLater from '../components/client/SavedForLater.vue'
import Wishlist from '../components/client/Wishlist.vue'
export default {
    components: { Wishlist, BuyItAgain, SavedForLater },
    name: "YourItems",
    data() {
        return {

        }
    },
    methods: {
        getSavedProducts: async function() {
            if (this.$store.state.user.id === undefined) {

            } else {
                axios.get("api/saved", { params: { userId:store.state.user.id } }).then((res) => {
                    this.$store.state.saveForLater = res.data.savedProducts.rows[0].products;
                    console.log("Saved For Later", this.$store.state.saveForLater)
                })
                .catch((err) => console.log(err));
            }

        },
    },
}
</script>