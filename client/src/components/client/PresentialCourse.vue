<template>
    <v-container fill-height fluid>
      <v-row justify="center">
          <v-col cols="12" sm="8" md="8">
              <v-card
                    shaped
                    class="mx-auto my-12"
                    max-width="374"

                >

                    <v-img
                    height="350"
                    :src="course.courseInformation.image"
                    ></v-img>

              </v-card>
          </v-col>
      <v-col cols="12" sm="8" md="8" >

          <!-- <v-card>
              <v-card-text> -->
                  <h3 class="pb-3" style="text-align: center"><strong>{{course.courseInformation.courseTheme}}</strong></h3>

                <section class="container">
                    <div  v-html="course.courseInformation.courseDescription"></div>
                </section>
              <!-- </v-card-text>
          </v-card> -->

      </v-col>


      <v-col cols="12" sm="8" md="8">
          <v-row class="pl-3">
              <v-col cols="6">
                  <h3 class="pb-3" style="text-align: start"><strong>Temas:</strong></h3>
                    <div v-for="topics in course.courseInformation.topics" :key="topics.length">
                        • {{ topics }} <br>
                    </div>
              </v-col>
              <v-col cols="6">
                  <h3 class="pb-3" style="text-align: start"><strong>Incluye:</strong></h3>
            <div v-for="includes in course.courseInformation.includes" :key="includes.length">
                • {{ includes }} <br>
            </div>
              </v-col>
          </v-row>
          <!-- <v-card>
              <v-card-text> -->

              <!-- </v-card-text>
          </v-card> -->
      </v-col>
      </v-row>

        <!-- <iframe id="testimonialto-c-pigmentus-light" src="https://embed.testimonial.to/c/pigmentus?theme=light" allow="camera;microphone" frameborder="0" scrolling="yes" width="100%" height="500px"></iframe> -->
        <!-- <iframe id="testimonialto-pigmentus-dark" src="https://embed.testimonial.to/w/pigmentus?theme=dark&card=base" frameborder="0" scrolling="no" width="100%" height="800px"></iframe> -->


    </v-container>







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


