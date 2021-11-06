<template>
    <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
        <!-- <v-hover v-slot="{ hover }"> -->
            <v-card
            outlined
            elevation="2"
            max-width="600"
            height="355"
            color='rgb(252, 249, 237)'
            shaped
            class="mx-auto my-12 mb-0 mt-5"
            >
                <v-card-actions class="mt-0">

                    <span><b>Total Sales</b></span>

                    <v-spacer></v-spacer>


                    <v-btn

                        outlined
                        color="primary"
                        x-small
                        to='/admin/reports/products'
                    >
                        Reports
                    </v-btn>
                </v-card-actions>

                <v-card-actions class="pt-0">
                    <span>$140.00</span>
                    <v-spacer></v-spacer>
                    <span style="color: #4BB543"> <v-icon dense small style="color: #4BB543">mdi-arrow-up</v-icon>100%</span>
                </v-card-actions>





                <v-row class="middle" v-if="false">

                    <v-progress-circular
                    indeterminate
                    color="primary"
                    ></v-progress-circular>

                </v-row>

                <line-chart style="height: 280px; max-width: 580px" v-if="true" :chartdata="collection" :options="options"></line-chart>

            </v-card>
        <!-- </v-hover> -->

    </div>
</template>

<script>
import axios from 'axios'
import LineChart from './LineChart.vue'
export default {
    name: 'TotalSalesChart',
    components: {LineChart},
    data() {
        return {
            loaded: false,
            collection: {
                labels: [
                "3:00 AM",
                "6:00 AM",
                "9:00 AM",
                "12:00 PM",
                "3:00 PM",
                "6:00 PM",
                "9:00 PM",
                "12:00 AM",
                ],
                datasets: [{
                    label: ``,
                    data: [1000.50, 80.00, 10.00],
                    borderColor: "#4BB543",
                    borderWidth: 1,
                    pointBorderColor: 'white',
                    fill: false,}],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: false,
                    text: ''
                },
                tooltips: {
                    mode: 'index',
                    intersect: true,
                    callbacks: {
                label: function (tooltipItem, data) {
                    var value = Number(data.datasets[0].data[tooltipItem.index]).toFixed(2);
                    return ' $' + value;
                }, },

                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Hours'
                    }
                    }],
                    yAxes: [{
                    display: true,
                    ticks: {
                        callback: function(value, index, values) {
                            return value.toLocaleString("en-US",{style:"currency", currency:"USD"});
                        }

                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                    }]
                }
            },
        }
    },
    methods: {
        getDate: async function () {
            let date = new Date()
            let month = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1)))
            let day =  ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()))
            let year =  date.getFullYear()
            this.collection.datasets[0].label = `${day}/${month}/${year}`
        },
    },
    created() {
        this.getDate();
    },


}
</script>

<style>
    .middle {
        top: 50%;
        left: 50%;
        position: absolute;
    }

</style>