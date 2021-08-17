<template>
    <v-col class="col-md-12 col-sm-12 col-xs-12 pr-0 pl-0 pt-0 pb-0">
      <v-carousel reverse-transition="fade-transition"
      transition="fade-transition" hide-delimiters
      :show-arrows="false"
      cycle
    >
      <v-carousel-item
        :src="require('../assets/FirstImage.png')"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >

        </v-row>
      </v-carousel-item>
      <v-carousel-item
        :src="require('../assets/SecondImage.png')"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >

        </v-row>
      </v-carousel-item>

    </v-carousel>
    <div class="pl-4 pr-4 row">
      <div
       class="col-md-6 col-sm-6 col-xs-12"
      >
        <v-card>

          <v-img
            aspect-ratio="1.7"
            contain
            :src="require('../assets/TopPick.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px"
          >
           <h1 class="text-center font-size border">Top Picks</h1>
            <div class="text-center">
              <v-btn  to="/shop" class="white--text" outlined>SHOP NOW</v-btn>
            </div>


<!--            <v-expand-transition>-->
<!--              <div-->
<!--                v-if="hover"-->
<!--                class="d-flex transition-fast-in-fast-out orange darken-2 v-card&#45;&#45;reveal display-3 white&#45;&#45;text"-->
<!--                style="height: 100%;"-->
<!--              >-->

<!--                <h3>Top Picks</h3><br/>-->
<!--                <h3>sdfs</h3>-->
<!--              </div>-->
<!--            </v-expand-transition>-->
          </v-img>
        </v-card>
<!--        </v-hover>-->
      </div>
      <div
        class="col-md-6 col-sm-6 col-xs-12"
      >
        <v-card>
          <v-img
            aspect-ratio="1.4"
            contain
            :src="require('../assets/NewProducts.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="400px"
          >
            <h1 class="text-center font-size border">New Arrivals</h1>
            <div class="text-center">
              <v-btn  to="/shop" class="white--text" outlined>SHOP NOW</v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
    </div>
    <div class="pl-4 pr-4 row">
      <div
       class="col-md-4 col-sm-4 col-xs-12"
      >
        <v-card outlined>
          <v-img
            aspect-ratio="1.4"
            contain
            :src="require('../assets/ThirdImage.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <h1 class="text-center font-size border">Colors</h1>
            <div class="text-center mt-2">
              <v-btn class="white--text caption" to="/shop" text>SHOP NOW <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
      <div
        class="col-md-4 col-sm-4 col-xs-12"
      >
        <v-card outlined>
          <v-img
            aspect-ratio="1.4"
            contain
            :src="require('../assets/Needles.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <h1 class="text-center font-size border">Needles</h1>
            <div class="text-center mt-2">
              <v-btn class="white--text caption" to="/shop" text>SHOP NOW <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-img>
        </v-card>
      </div>
      <div
        class="col-md-4 col-sm-4 col-xs-12"
      >
        <v-card outlined>
          <v-img
            aspect-ratio="1.4"
            contain
            :src="require('../assets/Kits.jpg')"
            class="white--text align-center"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="300px"
          >
            <h1 class="text-center font-size border">Kits</h1>
            <div class="text-center mt-2">
              <v-btn class="white--text caption" to="/shop" text>SHOP NOW <v-icon class="white--text caption">  mdi-arrow-right</v-icon></v-btn>

            </div>
          </v-img>
        </v-card>
      </div>
    </div>
    <v-container>
      <v-row no-gutters>


        <v-col :cols="12">
          <v-card-text
            class=""
            tile
            outlined
          >
            <v-card-title class="subheading ">Deals of the Day</v-card-title>
            <v-divider></v-divider>
            <v-row

            >

              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center" :key="i.id" v-for="(item, i) in dealsArray">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                    class="mx-auto"
                >
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
                                            <text x="3" y="14" class="percentage" transform="rotate(46, 14, 13) translate(2,2)">-{{item.specialOfferPercentage}}%</text>
                                        </svg>
                                    </v-col>
                                    <!-- <v-col cols="12" v-if="false">
                                        <svg style="width:40px;height:40px; color: rgb(187, 162, 87)" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M20,4C21.11,4 22,4.89 22,6V18C22,19.11 21.11,20 20,20H4C2.89,20 2,19.11 2,18V6C2,4.89 2.89,4 4,4H20M8.5,15V9H7.25V12.5L4.75,9H3.5V15H4.75V11.5L7.3,15H8.5M13.5,10.26V9H9.5V15H13.5V13.75H11V12.64H13.5V11.38H11V10.26H13.5M20.5,14V9H19.25V13.5H18.13V10H16.88V13.5H15.75V9H14.5V14A1,1 0 0,0 15.5,15H19.5A1,1 0 0,0 20.5,14Z" />
                                        </svg>
                                    </v-col> -->
                                </v-row>
                  </v-img>

                  <v-card-text class="text--primary text-center" style="background-color: rgb(252, 249, 237)">
                    <div>{{item.name}}</div>
                    <div>${{item.customerPrice}} <span v-if="item.isDealDay">-</span><span v-if="item.isDealDay" style="color: red"> $<strike>{{item.lastCustomerPrice}}</strike></span></div>
                  </v-card-text>

                  <div class="text-center" style="background-color: rgb(252, 249, 237)">
                    <v-btn
                      :to="`/shop/${item.collectionId}/product/${item.id}`"
                      class="ma-2"
                      outlined
                      color="primary"
                    >
                      Explore
                    </v-btn>
                  </div>
                </v-card>
                </v-hover>
              </div>
              <!-- <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                  <v-img
                    class="white--text align-end"
                    height="200px"

                  >
                    <v-card-title>T-Shirt </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 50%</div>
                    <div>Zara, Selected, Celio</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn href="/shop"
                      class="ma-2"
                      outlined
                      color="primary"
                    >
                      Explore
                    </v-btn>
                  </div>
                </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                  <v-img
                    class="white--text align-end"
                    height="200px"

                  >
                    <v-card-title>Jeans </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 60% + Extra 10%</div>
                    <div>Jack & Jones, Levis</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn href="/shop"
                      class="ma-2"
                      outlined
                      color="primary"
                    >
                      Explore
                    </v-btn>
                  </div>
                </v-card>
                </v-hover>
              </div>
              <div class="col-12 col-md-3 col-sm-6 col-xs-6 text-center" >
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="200"
                >
                  <v-card
                    :elevation="hover ? 16 : 2"
                  >
                  <v-img
                    class="white--text align-end"
                    height="200px"

                  >
                    <v-card-title>Shoes </v-card-title>
                  </v-img>

                  <v-card-text class="text--primary text-center">
                    <div>Upto 60% + Extra 10%</div>
                    <div>Nike, Adidas, Puma</div>
                  </v-card-text>

                  <div class="text-center">
                    <v-btn href="/shop"
                      class="ma-2"
                      outlined
                      color="primary"
                    >
                      Explore
                    </v-btn>
                  </div>
                </v-card>
                </v-hover>
              </div> -->

            </v-row>



          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
    </v-col>
</template>

<script>
  import axios from 'axios'
    export default {
        data () {
            return {
                items: [
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                    { title: 'Click Me' },
                    { title: 'Click Me 2' },
                ],
                activeBtn: 1,
                colors: [
                    'indigo',
                    'warning',
                    'pink darken-2',
                    'red lighten-1',
                    'deep-purple accent-4',
                ],
                slides: [
                    'First',
                    'Second',
                    'Third',
                    'Fourth',
                    'Fifth',
                ],
                dealsArray: [],
            }
        },
        methods: {
            getInventory: async function () {
              axios.get('api/products/inventory')
              .then(res => {
                  res.data.inventory.rows.map((value, index) => {
                    if (value.isDealDay === true) {
                      this.dealsArray.push(value)
                    }
                  })
              }).catch(err => console.log(err))
          },
        },
        created() {
          this.getInventory();
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
  .v-btn .v-btn__content .v-icon {
        color: white;
    }

  .border {
    text-shadow: -0.094rem 0 rgb(187, 162, 87), 0 0.094rem rgb(187, 162, 87), 0.094rem 0 rgb(187, 162, 87), 0 -0.094rem rgb(187, 162, 87);
  }
  .percentage {
    fill: white;
    font-size: 6.5px;
    font-weight: bold
  }
</style>

