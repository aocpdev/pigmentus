<template>
  <div>
    <p class="display-3 font-weight-light text-center pa-4">SHOPPING CART</p>
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
                      src="../../assets/ShoppingCart.png"
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
      <v-col :cols="12" md="9" sm="12" v-if="!isCartEmpty">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center">ITEM</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in cartDetails.cart" :key="item.name">
                <td>
                  <v-list-item
                    key="index"
                    :to="`/shop/${item.collectionId}/product/${item.productId}`"
                    primary
                  >
                    <v-list-item-avatar>
                      <v-img v-bind:src="item.image" :alt="item.name"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>{{
                        item.productName
                      }}</v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </td>
                <td>${{ item.customerPrice }}</td>
                <td>
                  <v-text-field
                    class="pt-8"
                    outlined
                    style="width: 80px"
                    dense
                    type="number"
                    v-model="item.quantity"
                    @input="up(item)"
                    min="1"
                    oninput="if(Number(this.value) === Number(0)) this.value = 1;"
                  ></v-text-field>
                </td>
                <td>${{ item.price }}</td>
                <td>
                  <v-btn icon color="red">
                    <v-icon small color="red">mdi-delete-forever</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>

      <v-col
        :cols="12"
        md="3"
        sm="12"
        style="background-color: rgb(252, 249, 237)"
        class="orderBorder"
        v-if="!isCartEmpty"
      >
        <p class="headline">Order Summary</p>
        <p class="overline">
          Shipping and additional costs are calculated based on values you have
          entered.
        </p>
        <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr>
                <td>Order Subtotal</td>
                <td class="text-right" style="width: 50px">
                  ${{ cartDetails.subtotal }}
                </td>
              </tr>
              <tr>
                <td>Shipping Charges</td>
                <td class="text-right" style="width: 50px">
                  ${{ cartDetails.shippingFee }}
                </td>
              </tr>
              <!-- <tr>
                <td>Convenience Fee</td>
                <td class="text-right" style="width: 50px">
                  ${{ cartDetails.shippingFee }}
                </td>
              </tr> -->
              <tr>
                <td>Tax</td>
                <td class="text-right" style="width: 50px">
                  ${{ cartDetails.tax }}
                </td>
              </tr>
              <tr>
                <td><b>Total</b></td>
                <td class="text-right" style="width: 50px">
                  <b>${{ cartDetails.total }}</b>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>

        <v-col cols="12">
          <v-checkbox v-model="checkbox1">
            <template v-slot:label>
              <div>
                I agree
                <v-dialog v-model="dialog" width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      medium
                      text
                      v-bind="attrs"
                      v-on="on"
                      style="text-transform: none"
                      class="pl-0 pr-0"
                      color="primary"
                    >
                      Terms and Conditions
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5"
                        >Pigmentus® Terms and Conditions</span
                      >
                    </v-card-title>
                    <v-card-text>
                      Ay Fonsi DY Oh-oh Oh no, oh no (oh) Hey yeah Diridiri,
                      dirididi Daddy Go Sí, sabes que ya llevo un rato mirándote
                      Tengo que bailar contigo hoy (DY) Vi que tu mirada ya
                      estaba llamándome Muéstrame el camino que yo voy Oh Tú, tú
                      eres el imán y yo soy el metal Me voy acercando y voy
                      armando el plan Solo con pensarlo se acelera el pulso Oh
                      yeah Ya, ya me está gustando más de lo normal Todos mis
                      sentidos van pidiendo más Esto hay que tomarlo sin ningún
                      apuro Despacito Quiero respirar tu cuello despacito Deja
                      que te diga cosas al oído Para que te acuerdes si no estás
                      conmigo Despacito Quiero desnudarte a besos despacito
                      Firmar las paredes de tu laberinto Y hacer de tu cuerpo
                      todo un manuscrito (sube, sube, sube) (Sube, sube) Oh
                      Quiero ver bailar tu pelo Quiero ser tu ritmo (eh-oh)
                      (uh-oh, uh-oh) Que le enseñes a mi boca (eh-oh) (uh-oh,
                      uh-oh) Tus lugares favoritos (eh-oh) (favoritos, favoritos
                      baby) Déjame sobrepasar Tus zonas de peligro (eh-oh)
                      (uh-oh, uh-oh) Hasta provocar tus gritos (uh-oh, uh-oh) Y
                      que olvides tu apellido (diridiri, dirididi Daddy) Yo sé
                      que estás pensándolo (yeh) Llevo tiempo intentándolo (yeh)
                      Mami, esto es dando y dándolo Sabes que tu corazón conmigo
                      te hace bam bam Sabe que esa beba 'tá buscando de mi bam
                      bam Ven prueba de mi boca para ver cómo te sabe (eh-eh)
                      Quiero, quiero, quiero ver cuánto amor a ti te cabe Yo no
                      tengo prisa, yo me quiero dar el viaje Empezamo' lento,
                      después salvaje Pasito a pasito, suave suavecito Nos vamos
                      pegando poquito a poquito Cuando tú me besas con esa
                      destreza Veo que eres malicia con delicadeza Pasito a
                      pasito, suave suavecito Nos vamos pegando, poquito a
                      poquito (oh oh) Y es que esa belleza es un rompecabezas
                      (oh no) Pero pa montarlo aquí tengo la pieza (slow, oh
                      yeah) Despacito (yeh, go) Quiero respirar tu cuello
                      despacito (yeh) Deja que te diga cosas al oído (yeh) Para
                      que te acuerdes si no estás conmigo Despacito Quiero
                      desnudarte a besos despacito (yeh) Firmar las paredes de
                      tu laberinto Y hacer de tu cuerpo todo un manuscrito
                      (sube, sube, sube) (Sube, sube) Oh Quiero ver bailar tu
                      pelo Quiero ser tu ritmo (eh-oh) (uh-oh, uh-oh) Que le
                      enseñes a mi boca (eh-oh) (uh-oh, uh-oh) Tus lugares
                      favoritos (eh-oh) (favoritos, favoritos baby) Déjame
                      sobrepasar Tus zonas de peligro (eh-oh) (uh-oh, uh-oh)
                      Hasta provocar tus gritos (uh-oh, uh-oh) Y que olvides tu
                      apellido (eh-oh) Despacito Vamo' a hacerlo en una playa en
                      Puerto Rico Hasta que las olas griten "Ay, bendito" Para
                      que mi sello se quede contigo (báilalo) Pasito a pasito,
                      suave suavecito (hey yeah, yeah) Nos vamos pegando,
                      poquito a poquito (oh no) Que le enseñes a mi boca (eh-oh)
                      (uh-oh, uh-oh) Tus lugares favoritos (eh-oh) (favoritos,
                      favoritos baby) Pasito a pasito, suave suavecito Nos vamos
                      pegando, poquito a poquito (eh-oh) Hasta provocar tus
                      gritos (eh-oh) (Fonsi) Y que olvides tu apellido (DY)
                      Despacito Fuente: LyricFind Compositores: Erika Ender /
                      Luis Fonsi / Ramon Ayala Letra de Despacito © Sony/ATV
                      Music Publishing LLC
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="red" text @click="dialog = false">
                        Disagree
                      </v-btn>
                      <v-btn
                        color="green darken-1"
                        text
                        @click="dialog = false"
                      >
                        Agree
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </template>
          </v-checkbox>
        </v-col>

        <div class="text-center">
          <v-btn class="black mt-5" @click="goSignIn()" outlined>
            <span style="color: rgb(187, 162, 87)">PROCEED TO PAY</span>

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
        </div>
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
</template>
<script>
import { mapState } from "vuex";
import TopPicks from "./TopPicks.vue";
import store from "../../store/index";
import axios from "axios";
import router from "../../router/index";
export default {

  name: "CartSummary",
  components: { TopPicks },
  data: () => ({
    dialog: false,
    checkbox1: false,
    cartDetails: {},
    isCartEmpty: true,
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
        console.log(this.cartDetails);
      }

    },

    goSignIn ( ) {
      if (this.$store.state.user.id !== undefined) {
        router.replace({ path: "/cart/shipping"})
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
</style>
