<template>
    <!-- <v-container fluid>
        <v-row>

        </v-row>
    </v-container> -->
    <v-row class="pt-0 mt-0">
        <v-col cols="12" class="pr-0 pl-0 pt-0 pb-0">
            <v-img
                aspect-ratio="3.85"
                :src="course.courseInformation.image"
                contain
                max-height="300px"
            >
            <!-- <div class="row fill-height text-right ma-0 pt-0">
                <div class="col col-12">
                    <h2 class="mx-0 mb-2 pr-6">
                        {{course.courseInformation.courseName}}
                    </h2>
                    <div class="caption">
                        Horario
                    </div>
                </div>
            </div> -->

            </v-img>
        </v-col>

    <v-container fill-height fluid>
      <v-row justify="center">
      <v-col cols="12" sm="8" md="8" >
            <h3 class="pb-3" style="text-align: center"><strong>{{course.courseInformation.courseTheme}}</strong></h3>

                <section class="container">
                    <div  v-html="course.courseInformation.courseDescription"></div>
                </section>
      </v-col>

      <v-col cols="12" sm="8" md="8">
          <v-row class="pl-3">
              <v-col cols="6">
                  <h3 class="pb-3" style="text-align: start"><strong>Incluye:</strong></h3>
            <div v-for="includes in course.courseInformation.includes" :key="includes.length">
                • {{ includes }} <br>
            </div>
              </v-col>
              <v-col cols="6" >
                  <h3 class="pb-3" style="text-align: start"><strong>Temas:</strong></h3>
            <div v-for="topics in course.courseInformation.topics" :key="topics.length">
                • {{ topics }} <br>
            </div>
              </v-col>
          </v-row>


      </v-col>
      <!-- <v-col cols="12" sm="8" md="8">

      </v-col> -->
      </v-row>
    </v-container>

    </v-row>



</template>

<script>
import axios from 'axios'
import router from '../../router/index'
export default {
    name: "PresentialCourse",
    data() {
        return {
            course: {},
        }
    },
    methods: {
        getCourse: async function (courseId) {

            axios.get('api/courses/presential', { params: { courseId: courseId } })
            .then(res => {
                this.course = res.data.course.rows[0];
                console.log(this.course);

                let div = document.getElementById('myElementID');
                div.innerHTML += this.course.courseInformation.courseDescription;

                // document.getElementById('pr').innerHTML += this.course.courseInformation.courseDescription;

            }).catch(err => console.log(err))
        },

    },
    created() {
        console.log(this.$route.params.courseId)
        this.getCourse(this.$route.params.courseId);

    },
    mounted: function () {






    }


}
</script>

<style>
    .container {
        width: 100%;
padding: 12px;
margin-right: auto;
margin-left: auto;
    }
</style>


