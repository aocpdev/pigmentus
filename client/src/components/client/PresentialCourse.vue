<template>
    <!-- <v-container fluid>
        <v-row>

        </v-row>
    </v-container> -->
    <v-row no-gutters>
        <v-col class="col-md-12 col-sm-12 col-xs-12 pr-0 pl-0 pt-0 pb-0">
            <v-img

        aspect-ratio="3.85"
        :src="require('../../assets/course.png')"
        contain
        max-height="300px"

      />

    {{course}}
        </v-col>

        <!-- <v-row style="height: 800px">
            <v-col cols="12" >
            <iframe id="testimonialto-c-alfonso-bonin-light" src="https://embed.testimonial.to/c/alfonso-bonin?theme=light" allow="camera;microphone" frameborder="0" scrolling="yes" width="100%" height="800px"></iframe>
        </v-col>
        </v-row> -->



    </v-row>


</template>

<script>
import axios from 'axios'
import router from '../../router/index'
import postscribe from 'postscribe'
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


