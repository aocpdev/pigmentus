<template>

    <v-row>
        <v-col cols='12' class="pl-10 pr-10 pt-10">


            <v-card
            outlined
            elevation="1"
            max-width="100%"
            color='rgb(252, 249, 237)'
            class="mx-auto my-12 mb-0 mt-2"
            >

                <v-card-actions class="mt-0">
                    <v-spacer></v-spacer>


                    <v-btn

                        outlined
                        color="primary"
                        x-small
                        to=''
                    >
                        Download Report
                    </v-btn>
                </v-card-actions>


                <v-row class="middle" v-if="!loaded">

                    <v-progress-circular
                    indeterminate
                    color="primary"
                    ></v-progress-circular>

                </v-row>

                <line-chart  v-if="loaded" :chartdata="datacollection" :options="options"></line-chart>

                <v-card-actions class="mt-0">

                    <v-select
                    :items="items"
                    label="Filter Options"
                    ></v-select>

                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>

                    <v-btn
                        icon
                        @click="show = !show"

                    >
                        <v-icon color="primary">{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>

                </v-card-actions>



                <v-expand-transition>
                <div v-show="show" style="background-color: white">
                    <v-divider></v-divider>

                    <v-card-text>
                    <v-simple-table>
                        <template v-slot:default>
                        <thead>
                            <tr>
                            <th class="text-left">
                                Name
                            </th>
                            <th class="text-left">
                                email
                            </th>
                                <th class="text-left">
                                Created Date
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            v-for="item in dataTable"
                            :key="item.id"
                            >
                            <td>{{ item.name }} {{ item.last_name }}</td>
                            <td>{{ item.email }}</td>
                            <td>{{new Date(item.created_date).toLocaleString()}}</td>
                            </tr>
                        </tbody>
                        </template>
                    </v-simple-table>
                    </v-card-text>
                </div>
                </v-expand-transition>
            </v-card>
        </v-col>

    </v-row>
</template>

<script>
import axios from 'axios'
import LineChart from './LineChart.vue'
export default {
    name: 'UsersReports',
    components: {LineChart},
    data() {
        return {
            items: ['Day', 'Month', 'Year', 'Hour'],
            loaded: false,
            show: false,
            dataTable: [],
            timer: '',
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
        getUsers: async function () {
            this.loaded = false
            // this.datacollection.datasets = [];
            axios.get('api/v1.0/users')
                .then(res => {

                    const sortById = res.data.users.rows.sort(function(a, b) {
                        let aDate = new Date(a.created_date);
                        let bDate = new Date(b.created_date)
                        return bDate - aDate
                    });

                    this.dataTable = sortById;

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
        },

        // cancelAutoUpdate() {
        //     clearInterval(this.timer);
        // }

    },
    // beforeDestroy() {
    //     this.cancelAutoUpdate();
    // },
    created() {
        // this.getTotalUsers();

        this.getUsers();
        // this.timer = setInterval(this.getUsers, 10000);
    },


}
</script>