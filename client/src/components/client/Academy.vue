<template>
    <v-container fluid>
        <v-row>
            <div
                class="col-md-3 col-sm-6 col-xs-12" v-for="item in courses" :key="item.id"
            >
            <v-card
                class="mx-auto my-12"
                max-width="374"
                shaped
            >
                <template slot="progress">
                <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
                ></v-progress-linear>
                </template>

                <v-img
                height="250"
                :src="item.courseInformation.image"
                ></v-img>

                <!-- <v-card-title class="pb-0" style="font-size: 18px">{{item.courseInformation.courseName}}</v-card-title> -->
                <!-- <span class="pt-0 pb-0 pl-4" style="font-size: 14px"><b>Fecha:</b><span></span></span> -->
                <span style="font-size: 15px" class="pl-4"> <b>Precio: </b></span><span style="font-size: 14px"> ${{item.courseInformation.totalPrice}} <br></span>
                <v-card-text class="pt-0 pb-0">
                <!-- <v-row
                    align="center"
                    class="mx-0"
                >
                    <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                    ></v-rating>

                    <div class="grey--text ms-4">
                    4.5 (413)
                    </div>
                </v-row> -->

                <v-row>
                    <v-col cols="6" class="pt-0">
                        <div class="my-4 text-subtitle-1 mb-1 mt-1">
                            <span style="font-size: 15px"><b>Incluye:</b></span>
                        </div>

                        <div v-for="includes in item.courseInformation.includes" :key="includes.length">
                            • {{ includes }} <br>
                        </div>
                    </v-col>
                    <v-col cols="6" class="pt-0">
                        <div class="my-4 text-subtitle-1 mb-1 mt-1">
                            <span style="font-size: 15px"><b>Temas:</b></span>
                        </div>

                        <div v-for="topics in item.courseInformation.topics" :key="topics.length">
                            • {{ topics }} <br>
                        </div>
                    </v-col>
                </v-row>


                </v-card-text>

                <!-- <span style="font-size: 12px" class="pl-4"> Separa con <b>${{item.courseInformation.priceToSeparate}}</b> y el día del seminario paga la diferencia<br></span>
                <span style="font-size: 12px" class="pl-4"> de su balance pendiente. <br></span>
                <span style="font-size: 11px" class="pl-4">(el dinero no es reembolsable ni transferible para otro seminario).</span> -->
                <!-- <v-card-title class="pt-0 pb-0">
                <v-row>
                    <v-col class="pb-0 pt-0">
                        <span style="font-size: 15px"> <b>Lugar: </b></span>
                        <v-icon
                        medium
                        color="blue darken-2"
                        >
                        mdi-map-marker
                        </v-icon>
                        <span style="font-size: 12px">{{item.courseInformation.location}}</span>
                    </v-col>
                </v-row>


                </v-card-title> -->

                <!-- <v-card-text>
                <v-chip-group
                    v-for="hours in item.courseInformation.hours" :key="hours.length"
                    active-class="deep-purple accent-4 white--text"
                    column
                >
                    <v-chip>{{hours}}</v-chip>
                </v-chip-group>
                </v-card-text> -->

                <v-card-actions style="background-color: rgb(252, 249, 237)">
                <v-btn
                    color="primary"
                    text
                    style="text-transform: none"
                    @click="goToCourse(item.id)"
                >
                    Mas detalles
                </v-btn>

                </v-card-actions>
            </v-card>
            </div>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
import router from '../../router/index'
export default {
    name: "Academy",
    data() {
        return {
            courses: [],
        }
    },
    methods: {
        getCourses: async function () {
            axios.get('api/courses')
            .then(res => {
                this.courses = res.data.courses.rows;
                console.log(this.courses);
            }).catch(err => console.log(err))
        },
        goToCourse: function (courseId) {
            router.push({ path: `/academy/presential/${courseId}`});
            // router.replace({ path: "/presential/" + courseId})
        }
    },
    created() {
        this.getCourses();
    },


}
</script>