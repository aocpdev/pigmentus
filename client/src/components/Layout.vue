<template>
  <v-app >

    <!-- <loading></loading> -->
    <!-- <order-loading v-if="store.state.isPaymentLoading"></order-loading> -->

    <v-app-bar
      app
      color="black"
      style="z-index: 101;"
      dark

    >
      <!-- <v-app-bar app color="black" :clipped-left="$vuetify.breakpoint.lgAndUp" dark v-if="false"> -->
      <v-toolbar-title style="width: 350px">
        <a @click="goToHome()" >
        <v-img
          alt="Pigmentus Logo"
          class="shrink mr-2"
          contain
          src="../assets/pigmentus-logo.png"
          transition="scale-transition"
          width="80"
        /></a>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <v-tooltip bottom color="black">
        <template v-slot:activator="{ on, attrs }"> -->
          <v-btn
            tile
            large
            color="white"
            class="ma-2"
            icon
            to="/academy"
          >
            <v-icon small>mdi-school</v-icon>
          </v-btn>
        <!-- </template>
        <span style="color: rgb(187, 162, 87)">Academy</span>
      </v-tooltip> -->

      <!-- <v-tooltip bottom color="black">
        <template v-slot:activator="{ on, attrs }"> -->
          <v-btn
            tile
            large
            color="white"
            class="ma-2"
            icon
            to="/shop/1"
          >
            <v-icon small>mdi-shopping</v-icon>
          </v-btn>
        <!-- </template>
        <span style="color: rgb(187, 162, 87)">Shop</span>
      </v-tooltip> -->

      <!-- <v-tooltip bottom color="black">
        <template v-slot:activator="{ on, attrs }"> -->
          <v-btn
            tile
            large
            color="white"
            icon
            to="/admin"
            class="ma-2"
            v-show="$store.state.enabledDashboard"
          >
            <v-icon small>mdi-account-cog</v-icon>
          </v-btn>
        <!-- </template>
        <span style="color: rgb(187, 162, 87)">Admin</span>
      </v-tooltip> -->

      <!-- <v-tooltip bottom color="black">
        <template v-slot:activator="{ on, attrs }"> -->
          <v-btn
            class="ma-2"
            tile
            large
            color="white"
            icon
            @click="goCart()"
          >
            <v-badge
              color="rgb(187, 162, 87)"
              overlap
              small
              :content="$store.state.cartDetails.productsQuantity"
              :value="$store.state.cartDetails.productsQuantity"
            >
              <v-icon small>mdi-cart</v-icon>
            </v-badge>
          </v-btn>
        <!-- </template>
        <span style="color: rgb(187, 162, 87)">Cart</span>
      </v-tooltip> -->

      <!-- <v-tooltip bottom color="black">
        <template v-slot:activator="{ on, attrs }"> -->
          <v-btn
            class="ma-2"
            tile
            large
            color="white"
            icon
            to="/auth/signin"
            v-show="!$store.state.isLogin"
          >
            <v-icon small>mdi-login</v-icon>
          </v-btn>
        <!-- </template>
        <span style="color: rgb(187, 162, 87)">Login</span>
      </v-tooltip> -->

      <div
        class="d-flex justify-center align-center"
        v-if="$store.state.isLogin"
      >
        <v-menu offset-y>
          <template v-slot:activator="{ attrs, on }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-avatar rounded size="36">
                <!-- <img
                    src="https://i1.sndcdn.com/avatars-000143584345-3qxowr-t500x500.jpg"
                    alt="John"
                  > -->

                <v-icon small> mdi-account </v-icon>

                <!-- <v-col class="mt-0 pt-0">
                      <span style="font-size: 10px;">{{$store.state.user.name.charAt(0)}} {{$store.state.user.lastName.charAt(0)}}</span>
                    </v-col> -->
              </v-avatar>
            </v-btn>
          </template>
          <v-card class="mx-auto mt-2" width="280" tile>
            <v-list>
              <v-list-item>
                <v-list-item-avatar color="primary">
                  <!-- <v-img
                    src="https://i1.sndcdn.com/avatars-000143584345-3qxowr-t500x500.jpg"
                  ></v-img> -->
                  <span style="font-size: 10px;">{{$store.state.user.name.charAt(0).toUpperCase()}} {{$store.state.user.lastName.charAt(0).toUpperCase()}}</span>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="title"
                    >{{ $store.state.user.name }}
                    {{ $store.state.user.lastName }}</v-list-item-title
                  >
                  <v-list-item-subtitle>{{
                    $store.state.user.email
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <v-list nav dense>
              <v-list-item-group color="rgb(187, 162, 87)">
                <v-list-item color="rgb(187, 162, 87)" to="">
                  <v-list-item-icon>
                    <v-icon>mdi-account</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title :to="`/profile/${$store.state.user.id}`">Profile</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

                <v-list-item color="rgb(187, 162, 87)" @click="logOut()">
                  <v-list-item-icon>
                    <v-icon>mdi-logout</v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title>Log Out</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-menu>
      </div>
    </v-app-bar>







    <v-main style="background-color: #f9f9f9">
      <bottom-navigation v-if="$store.state.bottomNavigation"></bottom-navigation>
      <v-snackbar
        v-model="$store.state.snackbar"
        :timeout="$store.state.snackbarTimeout"
        color="black"
        absolute
        right
        rounded="pill"
        top
      >
        {{ $store.state.snackbarMessage }}

        <template v-slot:action="{ attrs }">
          <v-btn color="primary" text v-bind="attrs" @click="snackbar = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>

      <v-container fluid class="px-0 py-0" >
        <navigation-cart></navigation-cart>
        <router-view />
      </v-container>

    </v-main>

    <!-- <v-card flat tile class=" primary" >
      <v-container>
        <v-row>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row >
              <v-col class="col-12 col-sm-3 pr-4 hidden-sm-only" align="right">
                <v-icon class="display-2" style="color: white">mdi-truck</v-icon>
              </v-col>
              <v-col class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light" style="color: white">FREE SHIPPING & RETURN</h3>
                <p class="font-weight-thin" style="color: white">Free Shipping over $300</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row >
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2" style="color: white">mdi-cash-usd</v-icon>
              </v-col>
              <v-col  class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light" style="color: white">MONEY BACK GUARANTEE</h3>
                <p class="font-weight-thin" style="color: white">30 Days Money Back Guarantee</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col class="col-12 col-md-4 col-sm-12">
            <v-row>
              <v-col class="col-12 col-sm-3 pr-4" align="right">
                <v-icon class="display-2" style="color: white">mdi-headset</v-icon>
              </v-col>
              <v-col  class="col-12 col-sm-9 pr-4">
                <h3 class="font-weight-light" style="color: white">(787)-210-6953</h3>
                <p class="font-weight-thin" style="color: white">Monday to Friday 8:00 AM - 6:00 PM</p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card> -->

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title style="color: black">
          <h1 style="color: white; font-size: 18px" class="border"
            >Microblading Puerto Rico by Pigmentus</h1
          >

          <v-spacer></v-spacer>

          <ul>
            <li>
              <a href="https://www.facebook.com/Pigmentus">
                <svg style="width:26px;height:26px" viewBox="0 0 24 24">
                    <path id="facebook" fill="#000" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                </svg>
              </a>
            </li>
            <!-- <li>
              <a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a>
            </li> -->
            <!-- <li><a href="#"><i class="fab fa-google-plus-g" aria-hidden="true"></i></a></li> -->
            <!-- <li><a href="#"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li> -->
            <li>
              <a href="https://www.instagram.com/pigmentus_pr/">
                <svg style="width:26px;height:26px" viewBox="0 0 24 24">
                    <path id="instagram" fill="#000" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
              </a>
            </li>
          </ul>
        </v-card-title>

        <v-card-text class="goldColor py-2 white--text text-center">
          <span style="font-size: 0.625rem"
            >@{{ new Date().getFullYear() }} -</span
          >

          <v-btn
            class="ml-0 pl-1"
            text
            color="white"
            x-small
            style="text-transform: none"
          >
            <span>Powered by Devasks Software Solutions LLC</span>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>



</template>

<script>
import Loading from "@/components/Loading.vue";
import { mapState, mapActions, mapMutations } from "vuex";
import router from "../router/index";
import axios from "axios";
import BottomNavigation from '../components/BottomNavigation.vue'
import NavigationCart from '../components/client/NavigationCart.vue'
export default {
  name: "Layout",

  components: {
    Loading,
    NavigationCart,
    BottomNavigation
  },

  data: () => ({
    drawer: false,
    show: false,
    icons: [
      { icon: "mdi-facebook", color: "rgb(66 103 178)" },
      { icon: "mdi-linkedin", color: "rgb(66 103 178)" },
      { icon: "mdi-instagram", color: "rgb(66 103 178)" },
    ],
    items: [
      { name: "Profile", to: "/profile", icon: "mdi-account", click: "" },
      { name: "My Courses", to: "/courses", icon: "mdi-school", click: "" },
      { name: "My Cart", to: "/cart", icon: "mdi-cart", click: "" },
      { name: "Wishlist", to: "", icon: "mdi-view-list", click: "" },
      { name: "Help", to: "", icon: "mdi-help-box", click: "" },
      { name: "Log Out", to: "", icon: "mdi-logout", click: "this.logOut()" },
    ],
    drawer: false,
    isMobile: false,
  }),
  beforeDestroy () {
    if (typeof window === 'undefined') return

    window.removeEventListener('resize', this.onResize, { passive: true })
  },
  mounted () {
    this.onResize()

    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    ...mapActions(["isAuth"]),
    ...mapMutations(["changeLoginStatus", "changeRole"]),
    goCollection() {
      router.push({ path: "shop", query: { collection: 1 } });
    },
    goToProfile () {
      router.replace({ name: "Profile", query: { userId: this.$store.state.user.id }})
    },
    onResize () {
        this.isMobile = window.innerWidth < 600
      },
    logOut() {
      axios
        .get("api/auth/logout")
        .then((res) => {
          if (res.status === 200) {
            this.$store.state.user = "";
            this.$store.state.cartDetails = {
              cart: [],
              shippingFee: 0,
              subtotal: 0,
              tax: 0,
              total: 0,
              productsQuantity: 0,
            };
            this.$store.state.snackbarMessage = "User logout successfully";
            this.$store.state.snackbar = true;
            this.changeLoginStatus(false);
            this.changeRole(4);
            router.push({ path: "/home" });
            this.$store.state.saveForLater = [];
            this.$store.state.isCartEmpty = true;
          }
        })
        .catch((err) => console.log(err));
    },

    goCart () {
      if (this.$vuetify.breakpoint.mobile) {
        router.push({ path: `/cart`});
      }else {
        this.$store.state.drawer = true;
          if (this.$store.state.cartDetails.cart.length > 0) {
            this.$store.state.isCartEmpty = false;
          }
        }
    },
    goToHome() {
      router.push({ path: `/home`});
    },

  },

  created() {
    this.isAuth();
    this.$store.state.bottomNavigation = true;
    if (
      this.$store.state.user === "" &&
      localStorage.__pigmentusCart !== undefined
    ) {
      this.$store.state.cartDetails = JSON.parse(localStorage.__pigmentusCart);
    }
  },
};
</script>

<style>
.goldColor {
  background-color: rgb(187, 162, 87);
}

.v-btn--active .v-btn__content {
  color: rgb(187, 162, 87);
}

.border {
  text-shadow: -1px 0 rgb(187, 162, 87), 0 1px rgb(163, 152, 152),
    1px 0 rgb(187, 162, 87), 0 -1px rgb(187, 162, 87);
}

ul {
  display: flex;
}

ul li {
  list-style: none;
}

ul li a {
  position: relative;
  width: 40px;
  height: 40px;
  display: block;
  text-align: center;
  margin: 0 10px;
  border-radius: 50%;
  padding: 6px;
  box-sizing: border-box;
  text-decoration: none;
  box-shadow: 0 10px 15px rgb(187, 162, 87, 0.3);
  background: linear-gradient(0deg, #ddd, #fff);
  transition: 0.5s;
}

ul li a:hover {
  box-shadow: 0 2px 5px rgb(187, 162, 87, 0.3);
  text-decoration: none;
}

ul li a .fab {
  width: 100%;
  height: 100%;
  display: block;
  background: linear-gradient(0deg, #fff, #ddd);
  border-radius: 50%;
  line-height: calc(40px - 12px);
  font-size: 18px;
  color: #262626;
  transition: 0.5s;
}

ul li:nth-child(1) a:hover #facebook {
  fill: #3b5998;
}

ul li:nth-child(2) a:hover #instagram {
  fill: #e4405f;
}



/* #facebook:hover {
  fill: #3b5998;
} */
</style>
