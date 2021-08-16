<template>
    <v-card elevation="1">

        <v-list flat>
        <v-subheader style="text-align: center"><b>Best Seller</b></v-subheader>
        <v-divider></v-divider>
        <v-list-item-group
            v-model="selectedItem"
            color="primary"
        >
            <v-list-item class="list-item">
                <v-list-item-action >
                    <v-img height="60px" width="60px" class="image" ></v-img>
                </v-list-item-action>
                <v-list-item-content>

                    <v-list-item-title> Nombre del Producto</v-list-item-title>
                    <v-list-item-subtitle>$2.99</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item class="list-item">
                <v-list-item-action >
                    <v-img height="60px" width="60px" class="image" ></v-img>
                </v-list-item-action>
                <v-list-item-content>

                    <v-list-item-title> Nombre del Producto</v-list-item-title>
                    <v-list-item-subtitle>$2.99</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item class="list-item">
                <v-list-item-action >
                    <v-img height="60px" width="60px" class="image" ></v-img>
                </v-list-item-action>
                <v-list-item-content>

                    <v-list-item-title> Nombre del Producto</v-list-item-title>
                    <v-list-item-subtitle>$2.99</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item class="list-item">
                <v-list-item-action >
                    <v-img height="60px" width="60px" class="image" ></v-img>
                </v-list-item-action>
                <v-list-item-content>

                    <v-list-item-title> Nombre del Producto</v-list-item-title>
                    <v-list-item-subtitle>$2.99</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-list-item class="list-item">
                <v-list-item-action >
                    <v-img height="60px" width="60px" class="image" ></v-img>
                </v-list-item-action>
                <v-list-item-content>

                    <v-list-item-title> Nombre del Producto</v-list-item-title>
                    <v-list-item-subtitle>$2.99</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>


        </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>

export default {
    name: 'TopPicks',
    data() {
        return {

        }
    },
    methods: {

        getProductWishlist: async function () {

        }
        // getCart: async function (userId) {
        // axios.get('api/v1.0/cart', { params: { userId: userId} }).then(res => {
        //     this.$store.state.cartDetails = res.data.cartDetails;
        // }).catch(err => console.log(err))
        // },
        // up (item){
        // console.log(item)
        // item.isEditInCart = true;
        // axios.post('api/v1.0/cart', item).then(res => {
        //     this.getCart(this.$store.state.user.id);
        // }).catch(err => console.log(err))
        // },

    },
    created() {

    },

}
</script>

<style>
    .image {
        border: 1px solid #ddd;
        border-radius: 4px;
        width: 150px;
        cursor: pointer;
    }


    .list-item:hover .image{
        box-shadow: 0 0 2px 1px rgb(187, 162, 87,  0.5);
    }
</style>