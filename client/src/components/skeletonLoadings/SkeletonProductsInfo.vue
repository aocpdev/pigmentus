<template>
    <v-container>
      <div class="row">
        <div class="col-md-5 col-sm-5 col-xs-12">
          <!-- <v-col> -->
            <v-skeleton-loader
              v-bind="attrs"
              type="image"
              ></v-skeleton-loader>
          <!-- </v-col> -->
          <!-- <v-carousel height="400" hide-delimiters :show-arrows="false">
            <v-carousel-item
            aspect-ratio="1.4"
            contain
            v-for="(product, i) in product"
            :key="i"
            :src="product.image"
            >
            </v-carousel-item>


          </v-carousel> -->
        </div>
        <div
          class="col-md-7 col-sm-7 col-xs-12"
          v-for="(product, i) in product"
          :key="i"

        >


          <div class="pl-6">
            <div>
              <v-skeleton-loader
            v-bind="attrs"
            type="text"
            style="padding-right: 90%"
            ></v-skeleton-loader>
            </div>

            <div style="padding-top: 5px">
              <v-skeleton-loader
              v-bind="attrs"
              type="heading"
              ></v-skeleton-loader>
            </div>

            <div style="padding-top: 15px">
              <v-skeleton-loader
              v-bind="attrs"
              type="text"
              style="padding-right: 85%"
              ></v-skeleton-loader>
            </div>

            <div style="padding-top: 30px">
              <v-skeleton-loader
              v-bind="attrs"
              type="paragraph"
              ></v-skeleton-loader>
              <v-skeleton-loader
              v-bind="attrs"
              type="paragraph"
              ></v-skeleton-loader>
            </div>

            <div style="padding-top: 30px">
              <v-skeleton-loader
              v-bind="attrs"
              type="text"
              style="padding-right: 90%"
              ></v-skeleton-loader>
            </div>

            <div style="padding-top: 8px">
              <v-skeleton-loader
              v-bind="attrs"
              type="button"
              style="padding-right: 70%"
              ></v-skeleton-loader>
            </div>

            <div style="padding-top: 30px">
              <v-skeleton-loader
              v-bind="attrs"
              type="heading"
              style="padding-right: 70%"
              ></v-skeleton-loader>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12">
          <v-card-text class="pa-0 pt-4" tile outlined>
            <div style="padding-top: 15px">
              <v-skeleton-loader
              v-bind="attrs"
              type="text"
              style="padding-right: 45%; padding-left: 45%"
              ></v-skeleton-loader>
            </div>


            <div style="padding-top: 15px">
              <v-skeleton-loader
              v-bind="attrs"
              type="divider"

              ></v-skeleton-loader>
            </div>

            <v-divider></v-divider>
            <div class="row text-center" >
              <div class="col-md-2 col-sm-4 col-xs-12 text-center ">
                  <v-card :elevation="2" >
                    <!-- <v-img class="white--text align-end" height="200px">
                      <v-card-title>Bags & Purses </v-card-title>
                    </v-img> -->
                    <v-skeleton-loader
                    v-bind="attrs"
                    type="image"
                    ></v-skeleton-loader>

                    <v-card-text class="text--primary text-center">
                      <v-skeleton-loader
                    v-bind="attrs"
                    type="text"
                    style="padding-left: 25%; padding-right: 25%"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                    v-bind="attrs"
                    type="text"
                    style="padding-left: 25%; padding-right: 25%"
                    ></v-skeleton-loader>
                    </v-card-text>



                    <div class="text-center">
                      <v-skeleton-loader
                    v-bind="attrs"
                    type="button"
                    style="padding-left: 36%; padding-bottom: 10px "

                    ></v-skeleton-loader>
                      <!-- <v-btn class="ma-2" outlined color="info">
                        Explore
                      </v-btn> -->
                    </div>
                  </v-card>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center ">
                  <v-card :elevation="2" >
                    <!-- <v-img class="white--text align-end" height="200px">
                      <v-card-title>Bags & Purses </v-card-title>
                    </v-img> -->
                    <v-skeleton-loader
                    v-bind="attrs"
                    type="image"
                    ></v-skeleton-loader>

                    <v-card-text class="text--primary text-center">
                      <v-skeleton-loader
                    v-bind="attrs"
                    type="text"
                    style="padding-left: 25%; padding-right: 25%"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                    v-bind="attrs"
                    type="text"
                    style="padding-left: 25%; padding-right: 25%"
                    ></v-skeleton-loader>
                    </v-card-text>



                    <div class="text-center">
                      <v-skeleton-loader
                    v-bind="attrs"
                    type="button"
                    style="padding-left: 36%; padding-bottom: 10px "

                    ></v-skeleton-loader>
                      <!-- <v-btn class="ma-2" outlined color="info">
                        Explore
                      </v-btn> -->
                    </div>
                  </v-card>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center ">
                  <v-card :elevation="2" >
                    <!-- <v-img class="white--text align-end" height="200px">
                      <v-card-title>Bags & Purses </v-card-title>
                    </v-img> -->
                    <v-skeleton-loader
                    v-bind="attrs"
                    type="image"
                    ></v-skeleton-loader>

                    <v-card-text class="text--primary text-center">
                      <v-skeleton-loader
                    v-bind="attrs"
                    type="text"
                    style="padding-left: 25%; padding-right: 25%"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                    v-bind="attrs"
                    type="text"
                    style="padding-left: 25%; padding-right: 25%"
                    ></v-skeleton-loader>
                    </v-card-text>



                    <div class="text-center">
                      <v-skeleton-loader
                    v-bind="attrs"
                    type="button"
                    style="padding-left: 36%; padding-bottom: 10px "

                    ></v-skeleton-loader>
                      <!-- <v-btn class="ma-2" outlined color="info">
                        Explore
                      </v-btn> -->
                    </div>
                  </v-card>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center ">
                  <v-card :elevation="2" >
                    <!-- <v-img class="white--text align-end" height="200px">
                      <v-card-title>Bags & Purses </v-card-title>
                    </v-img> -->
                    <v-skeleton-loader
                    v-bind="attrs"
                    type="image"
                    ></v-skeleton-loader>

                    <v-card-text class="text--primary text-center">
                      <v-skeleton-loader
                    v-bind="attrs"
                    type="text"
                    style="padding-left: 25%; padding-right: 25%"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                    v-bind="attrs"
                    type="text"
                    style="padding-left: 25%; padding-right: 25%"
                    ></v-skeleton-loader>
                    </v-card-text>



                    <div class="text-center">
                      <v-skeleton-loader
                    v-bind="attrs"
                    type="button"
                    style="padding-left: 36%; padding-bottom: 10px "

                    ></v-skeleton-loader>
                      <!-- <v-btn class="ma-2" outlined color="info">
                        Explore
                      </v-btn> -->
                    </div>
                  </v-card>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center ">
                  <v-card :elevation="2" >
                    <!-- <v-img class="white--text align-end" height="200px">
                      <v-card-title>Bags & Purses </v-card-title>
                    </v-img> -->
                    <v-skeleton-loader
                    v-bind="attrs"
                    type="image"
                    ></v-skeleton-loader>

                    <v-card-text class="text--primary text-center">
                      <v-skeleton-loader
                    v-bind="attrs"
                    type="text"
                    style="padding-left: 25%; padding-right: 25%"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                    v-bind="attrs"
                    type="text"
                    style="padding-left: 25%; padding-right: 25%"
                    ></v-skeleton-loader>
                    </v-card-text>



                    <div class="text-center">
                      <v-skeleton-loader
                    v-bind="attrs"
                    type="button"
                    style="padding-left: 36%; padding-bottom: 10px "

                    ></v-skeleton-loader>
                      <!-- <v-btn class="ma-2" outlined color="info">
                        Explore
                      </v-btn> -->
                    </div>
                  </v-card>
              </div>
              <div class="col-md-2 col-sm-4 col-xs-12 text-center ">
                  <v-card :elevation="2" >
                    <!-- <v-img class="white--text align-end" height="200px">
                      <v-card-title>Bags & Purses </v-card-title>
                    </v-img> -->
                    <v-skeleton-loader
                    v-bind="attrs"
                    type="image"
                    ></v-skeleton-loader>

                    <v-card-text class="text--primary text-center">
                      <v-skeleton-loader
                    v-bind="attrs"
                    type="text"
                    style="padding-left: 25%; padding-right: 25%"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                    v-bind="attrs"
                    type="text"
                    style="padding-left: 25%; padding-right: 25%"
                    ></v-skeleton-loader>
                    </v-card-text>



                    <div class="text-center">
                      <v-skeleton-loader
                    v-bind="attrs"
                    type="button"
                    style="padding-left: 36%; padding-bottom: 10px "

                    ></v-skeleton-loader>
                      <!-- <v-btn class="ma-2" outlined color="info">
                        Explore
                      </v-btn> -->
                    </div>
                  </v-card>
              </div>




            </div>
          </v-card-text>
        </div>
      </div>
    </v-container>
</template>

<script>
export default {
    name: 'SkeletonProductsInfo',
    data() {
        return {
            attrs: {
                boilerplate: false,
            },
        }
    },
}
</script>