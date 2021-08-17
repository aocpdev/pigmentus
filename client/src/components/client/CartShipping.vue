<template>
    <div>
        <h2 class="display-2 	text-center pa-4">{{$store.state.cartHeading}}</h2>
        <v-stepper
    v-model="$store.state.e2"
    vertical
  >
    <v-stepper-step
      :complete="$store.state.e2 > 1"
      step="1"
    >
      Shipping Address
      <!-- <small>Billing Address</small> -->
    </v-stepper-step>

    <v-stepper-content step="1">
        <v-container fluid>
            <v-row>
                <v-col
                cols="12"
                sm="6"
                >
                    <v-text-field
                        ref="name"
                        v-model="name"
                        :rules="[() => !!name || 'This field is required']"
                        :error-messages="errorMessages"
                        label="Full Name"
                        placeholder="Juan del Pueblo"
                        required
                    ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                sm="6"
                >
                    <v-text-field
                        ref="address"
                        v-model="address"
                        :rules="[
                        () => !!address || 'This field is required',
                        () => !!address && address.length <= 50 || 'Address must be less than 25 characters',
                        addressCheck
                        ]"
                        label="Address Line"
                        placeholder="Chapulin Ave"
                        counter="50"
                        required
                    ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                sm="6"
                >
                    <v-text-field
                        ref="city"
                        v-model="city"
                        :rules="[() => !!city || 'This field is required', addressCheck]"
                        label="City"
                        placeholder="Juncos"
                        required
                    ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                sm="6"
                >
                    <v-text-field
                        ref="state"
                        v-model="state"
                        :rules="[() => !!state || 'This field is required']"
                        label="State/Province/Region"
                        required
                        placeholder="PR"
                    ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                sm="6"
                >
                    <v-text-field
                        ref="zip"
                        v-model="zip"
                        :rules="[() => !!zip || 'This field is required']"
                        label="ZIP / Postal Code"
                        required
                        placeholder="00777"
                    ></v-text-field>
                </v-col>

                <v-col
                cols="12"
                sm="6"
                >
                    <v-autocomplete
                        ref="country"
                        v-model="country"
                        :rules="[() => !!country || 'This field is required']"
                        :items="countries"
                        label="Country"
                        placeholder="Select..."
                        required
                    ></v-autocomplete>
                </v-col>
            </v-row>
        </v-container>

      <v-btn
        color="primary"
        @click="e2 = 2"
        to="/cart/shipping/checkout"
      >
        Continue
      </v-btn>
      <v-btn text to="/cart/summary">
        Cancel
      </v-btn>
    </v-stepper-content>

    <v-stepper-step
      :complete="$store.state.e2 > 2"
      step="2"
    >
      Checkout Payment
    </v-stepper-step>

    <v-stepper-content step="2">
        <router-view/>
    </v-stepper-content>


  </v-stepper>
    </div>

</template>

<script>
    import CartCheckout from './CartCheckout.vue'
    import {mapState} from 'vuex'
    import axios from 'axios'
    export default {
        components: {CartCheckout},
        name: 'CartShipping',
        data: () => ({
        countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', `Timor L'Este`, 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
        errorMessages: '',
        name: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        country: null,
        formHasErrors: false,
        headingText: ''
        }),
        created() {
          this.$store.state.e2 = 1;
          this.$store.state.cartHeading = 'Shipping Address';
          window.ATHM_Checkout = {
                env: 'sandbox',
                publicToken: 'sandboxtoken01875617264',

                timeout: 600,

                theme: 'btn',
                lang: 'en',

                total: '0.00',
                tax: '0.00',
                subtotal: '0.00',

                metadata1: 'metadata1 test',
                metadata2: 'metadata2 test',

                items: [],
                onCompletedPayment: function (response)
                {
                    // console.log("mamamamamamama")
                },
                onCancelledPayment: function (response)
                {
                    // console.log("mamamamamaama", response )
                },
                onExpiredPayment: function (response)
                {
                    //Handle response
                }

            };
        },


        computed: {
          component: function () {

        },

        form () {
            return {
            name: this.name,
            address: this.address,
            city: this.city,
            state: this.state,
            zip: this.zip,
            country: this.country,
            }
        },
        },
        watch: {
        name () {
            this.errorMessages = ''
        },
        },

        methods: {



        addressCheck () {
            this.errorMessages = this.address && !this.name
            ? `Hey! I'm required`
            : ''

            return true
        },

        },
  }
</script>

<style >
.v-stepper{
  border: solid 1px rgb(187, 162, 87)!important;
}
</style>