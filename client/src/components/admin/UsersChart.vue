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
                    <v-spacer></v-spacer>
                    <v-btn

                        outlined
                        color="primary"
                        x-small
                        to='/admin/customers'
                    >
                        Customers
                    </v-btn>

                    <v-btn

                        outlined
                        color="primary"
                        x-small
                        to='/admin/reports/users'
                    >
                        Reports
                    </v-btn>
                </v-card-actions>

                <v-row class="middle" v-if="!loaded">

                    <v-progress-circular
                    indeterminate
                    color="primary"
                    ></v-progress-circular>

                </v-row>

                <bar-chart style="height: 320px; max-width: 580px" v-if="loaded" :chartdata="datacollection" :options="options"></bar-chart>

            </v-card>
        <!-- </v-hover> -->

    </div>
</template>

<script>
import axios from 'axios'
import BarChart from './BarChart.vue'
export default {
    name: 'ProductsChart',
    components: {BarChart},
    data() {
        return {
            loaded: false,
            datacollection: {
                labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
                ],
                datasets: [],
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
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
                        labelString: 'Month'
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
    computed: {

    },
    methods: {
        getUser: async function () {
            this.loaded = false
            axios.get('api/users')
                .then(res => {
                    this.options.title.text = "Total Users: " + " (" + res.data.users.rows.length + ")";

                    let data = [];

                    res.data.users.rows.map((value, index) => {
                        let monthsAndYears = {};
                        let date = new Date(value.created_date);
                        let year = date.getFullYear();
                        let month = date.getMonth() + 1;

                        monthsAndYears.year = year
                        monthsAndYears.month = month;
                        data.push(monthsAndYears);

                    });

                    let obj = data.reduce((res, curr) =>
                    {
                        if (res[curr.year]) {
                            res[curr.year].push(curr);
                        }
                        else
                            Object.assign(res, {[curr.year]: [curr]});
                        return res;
                    }, {});

                    let objKey = Object.keys(obj)
                    let separateYear = [{year: '', data: []}];
                    let beforeYear = ''

                    for (let index = 0; index < objKey.length; index++) {
                        obj[Object.keys(obj)[index]].map((value, index1) => {
                            if (beforeYear === '') {
                                beforeYear = objKey[index];
                                separateYear[index].year = objKey[index];
                                separateYear[index].data.push(value.month);
                                separateYear[index].total = 1;
                            }else if (beforeYear === objKey[index] && index1 > 0) {
                                separateYear[index].data.push(value.month);
                                beforeYear = objKey[index];
                                separateYear[index].total = separateYear[index].total + 1
                            } else {
                                separateYear.push({year: objKey[index], data: [value.month], total: 1})
                                beforeYear = objKey[index]
                            }
                        })
                    }



                    let finalData = [];
                    for (let index = 0; index < separateYear.length; index++) {
                        const specimens = separateYear[index].data.filter((month, i) => i == 0 ? true : separateYear[index].data[i - 1] != month);
                        const counterSpecimens = specimens.map(spec => {
                            return {month: spec, count: 0};
                        });
                        counterSpecimens.map((countSpec, i) =>{

                            const actualSpecLength = separateYear[index].data.filter(month => month === countSpec.month).length;
                            countSpec.count = actualSpecLength;

                        })
                        finalData.push({year: separateYear[index].year, data: counterSpecimens})
                    }

                    finalData.map((value, index) => {
                        if (index === 0) {
                            this.datacollection.datasets.push({
                            label: `${value.year}: (${separateYear[index].total})`,
                            data: [0,0,0,0,0,0,0,0,0,0,0,0],
                            borderColor: "#bba257",
                            pointBackgroundColor: '#bba257',
                            borderWidth: 1,
                            pointBorderColor: 'white',
                            fill: true,

                        })
                        }else {
                            this.datacollection.datasets.push({
                            label: `${value.year}: (${separateYear[index].total})`,
                            data: [0,0,0,0,0,0,0,0,0,0,0,0],
                            borderColor: "#bba257",
                            pointBackgroundColor: '#bba257',
                            borderWidth: 1,
                            pointBorderColor: 'white',
                            backgroundColor: 'white'
                        })
                        }

                        finalData[index].data.map((value1, index1) => {

                            this.datacollection.labels.map((value2, index2) => {
                                if (value1.month === (index2 + 1)) {

                                    this.datacollection.datasets[index].data[index2] = value1.count

                                }
                            })
                        })
                    })

                    this.loaded = true;
                }).catch(err => console.log(err))
        }
    },
    mounted() {
        // this.getTotalUsers();

        this.getUser();
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