<template>
    <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <!-- <v-hover v-slot="{ hover }"> -->
            <v-card
            outlined
            elevation="2"
            max-width="355"
            height="355"
            color='rgb(252, 249, 237)'
            shaped
            class="mx-auto my-12 mb-0 mt-5"
            >
                <v-card-actions class="mt-0">
                    <span>Total Sales</span>
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

                <span style="font-size: large">$ 0.00</span>




                <v-row class="middle" v-if="false">

                    <v-progress-circular
                    indeterminate
                    color="primary"
                    ></v-progress-circular>

                </v-row>

                <line-chart style="height: 320px; width: 320px" v-if="true" :chartdata="datacollection" :options="options"></line-chart>

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
            datacollection: {
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
                    data: [50.00, 80.00, 10.00],
                    borderColor: "#4BB543",

                    borderWidth: 1,
                    pointBorderColor: 'white',
                }
                ],
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
                        beginAtZero: true,
                        callback: function (value) { if (Number.isInteger(value)) { return value; } },
                        stepSize: 1

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


}
</script>

<style>
    .middle {
        top: 50%;
        left: 50%;
        position: absolute;
    }

</style>