<template>
    <div>
        <div>
            <v-row>
            <v-col cols="12" class="pt-0 pb-0">
                <span style="font-size: 24px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif"> <b> Checkout</b> <span style="font-size: 12px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif">({{$store.state.cartDetails.productsQuantity}} items)</span></span>
            </v-col>
            </v-row>
            <v-row>

            <!-- Cuando hay productos en el carrito -->
            <v-col :cols="12" md="8" sm="12">
                <v-card
                class="mx-auto"
                >

                <v-row v-if="!show">
                    <v-col cols="4" class="pt-0">
                    <v-card-subtitle class="pb-0">
                        <span style="font-size: 12px">{{$store.state.cartDetails.productsQuantity}} items</span>
                    </v-card-subtitle>
                    </v-col>
                    <v-col cols="8" style="text-align: right" class="pt-0" >
                    <!-- <v-card-subtitle class="pb-0">
                        <span style="font-size: 14px"><b>${{$store.state.cartDetails.subtotal}}</b></span>
                    </v-card-subtitle> -->
                    </v-col>
                </v-row>
                <v-row class="pl-6 pr-6" v-if="!show">
            <v-col  v-for="item in $store.state.cartDetails.cart"
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
                <v-row class="pl-2" justify="center" align="center">
                <v-col cols="1" class="pb-0"><div></div></v-col>
                <v-col cols="5" class="pb-0" style="text-align: start;"><span style="font-size: 13px"><b>Name</b></span></v-col>
                <v-col cols="2" class="pb-0" style="text-align: right;"><span style="font-size: 13px"><b>Price</b></span></v-col>
                <v-col cols="2" class="pb-0" style="text-align: center;"><span style="font-size: 13px"><b>Quantity</b></span></v-col>
                <v-col cols="2" class="pb-0 pr-6" style="text-align: end;"><span style="font-size: 13px"><b>Total</b></span></v-col>
                </v-row>
                <v-divider></v-divider>
                <v-row v-for="item in $store.state.cartDetails.cart"
                        :key="item.name" class="pl-2" justify="center" align="center">

                        <v-col cols="12" class="pb-0 pt-0">
                        <v-row>
                            <v-col cols="1" class="pr-0 pb-2">

                            <v-img v-bind:src="item.image" :alt="item.name" height="50px" width="50px" class="image" ></v-img>

                            </v-col>

                        <v-col cols="5" class="pl-0 pt-5 pb-0"  style="text-align: start;">
                        <!-- <v-btn
                            text
                            color="primary"
                            style="text-transform: none"
                            small
                            class="pl-0"
                            :to="`/shop/${item.collectionId}/product/${item.productId}`"
                            >
                            {{item.productName}}
                            </v-btn> -->
                            <span style="font-size: 12px"><b> {{item.productName}}</b></span>
                            <!-- <p style="font-size: 11px">{{item.description}}</p> -->
                        </v-col>
                        <v-col cols="2"  style="text-align: right;" class=" pt-5">
                        <span style="font-size: 12px"><b>${{item.customerPrice}}</b></span>
                        </v-col>
                        <v-col cols="2" style="text-align: center;" class="pt-5 ">
                            <!-- <v-text-field
                            outlined
                            style="width: 80px"
                            dense
                            type="number"
                            v-model="item.quantity"
                            @input="up(item)"
                            min="1"
                            color="primary"
                            oninput="if(Number(this.value) === Number(0)) this.value = 1;"
                            readonly
                            ></v-text-field> -->
                            <span style="font-size: 12px"><b> {{item.quantity}}</b></span>
                        </v-col>
                        <v-col cols="2"  style="text-align: right;" class="pr-6 pt-5">
                        <span style="font-size: 12px"><b>${{item.price}}</b></span>
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

            <v-col
                :cols="12"
                md="4"
                sm="12"

            >
                <v-card
                class="mx-auto pt-0"
                >

                <v-row>
                    <v-col cols="6" >
                        <span style="font-size: 14px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif" class="pl-3 pr-3"><b>Subtotal </b> <span style="font-size: 12px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif">({{$store.state.cartDetails.productsQuantity}} items)</span></span>
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
                        <span style="font-size: 18px; font-family: BogleWeb,Helvetica Neue,Helvetica,Arial,sans-serif" class="pl-3 pr-3"><b>${{$store.state.cartDetails.total}}</b></span>
                    </v-col>



                    <v-col class="pl-6 pr-6">
                        <div style="margin-top: 10px" ref="paypal"></div>
                        <v-btn class="cancelButton" color="primary" to="/cart" rounded>
                            <span style="color: black">Cancel</span>
                        </v-btn>
                    </v-col>
                </v-row>

                </v-card>
            </v-col>
            </v-row>

            <v-row v-if="false">
            <v-col>
                <v-card class="mt-5">
                <v-subheader style="text-align: center"
                    ><b>Your Items</b></v-subheader
                >
                <v-divider></v-divider>

                <v-tabs color="primary">
                    <v-tab>Wishlist (0)</v-tab>
                    <v-tab>Buy it again</v-tab>

                    <v-tab-item>
                    <v-container fluid>
                        <v-row>
                        <v-subheader style="text-align: center"
                            >No tiene Productos</v-subheader
                        >
                        </v-row>
                        <v-row>
                        <v-col> </v-col>
                        </v-row>
                    </v-container>
                    </v-tab-item>

                    <v-tab-item>
                    <v-container fluid>
                        <v-row>
                        <v-subheader style="text-align: center"
                            >No tiene Productos</v-subheader
                        >
                        </v-row>
                        <v-row>
                        <v-col>
                            <v-list flat>
                            <v-list-item class="list-item">
                                <v-list-item-action>
                                <v-img
                                    height="100px"
                                    width="100px"
                                    class="image"
                                ></v-img>
                                </v-list-item-action>
                                <v-list-item-content>
                                <a href="#"
                                    ><v-list-item-title>
                                    Nombre del Producto</v-list-item-title
                                    ></a
                                >
                                <v-list-item-subtitle
                                    >Descripcion del Producto:
                                </v-list-item-subtitle>
                                <div style="width: 70px">
                                    <v-btn x-small outlined color="primary">
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
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WebCartCheckout',
    data() {
        return {
            show: false,
            viewItems: "View all items",
        }
    },
    mounted() {
        const script = document.createElement("script");
              script.src =
          "https://www.paypal.com/sdk/js?client-id=Aa7yUJ-MbLo8prf7N_VR9XhQuW0TMENMSUTVKKno1iEu8cl3mEoelJw5WuYBPvfYbZYCvNU8rdDnK7xq";
              script.addEventListener("load", this.setLoaded);
                  document.body.appendChild(script);
    },
    updated() {
        if (this.show !== false) {
            this.viewItems = 'Hide all items'
        }else {
            this.viewItems = 'View all items'
        }
    },

    methods: {
        setLoaded: function() {
                window.paypal.Buttons({
                    style: {

                        layout:  'vertical',

                        shape:   'pill',

                        label:   'pay',
                        height: 35

                    },
                createOrder: (data, actions) => {
                    // This function sets up the details of the transaction, including the amount and line item details.

                    return actions.order.create({
                    purchase_units: [{
                        amount: {
                          currency_code: "USD",
                          value: this.$store.state.cartDetails.total
                        },
                    }]
                    });
                },
                onApprove: async (data, actions) => {

                    // This function captures the funds from the transaction.
                    const paypalOrder = await actions.order.capture();



                    if (paypalOrder.status === "COMPLETED") {
                      console.log('Paypal Order', JSON.stringify(paypalOrder));
                      console.log('Status', paypalOrder.status)
                      console.log('Shipping Information', paypalOrder.purchase_units[0].shipping);
                      console.log('Cart Details', this.$store.state.cartDetails)

                      console.log('UserId', this.$store.state.user.id);
                      console.log('Name', this.$store.state.user.name);
                      console.log('Last Name', this.$store.state.user.lastName);
                      console.log('Email', this.$store.state.user.email);
                      console.log('Order ID', paypalOrder.purchase_units[0].payments.captures[0].id)

                      let order = {

                        userId: this.$store.state.user.id,
                        paypalOrder: JSON.stringify(paypalOrder),
                        cartDetails: JSON.stringify(this.$store.state.cartDetails),
                      }
                      console.log(order);
                      axios.post("api/orders", order).then((res) => {
                        console.log(res.data.order);
                      }).catch((err) => console.log(err));
                    }else {

                    }

                    // console.log(orderModel);


                    // Mapping
                    // orderModel.oder.id = paypalOrder.purchase_units[0].payments.captures[0].id,
                    // orderModel.oder.intent = paypalOrder.intent,
                    // orderModel.oder.status = paypalOrder.status,
                    // orderModel.oder.createdDate = paypalOrder.create_time,

                    // console.log(JSON.stringify(orderModel.order));
                    // window.location.href("../");
                },
                onError: err => {
                    console.log(err);
                }
                }).render(this.$refs.paypal);
            },
    },

}
</script>