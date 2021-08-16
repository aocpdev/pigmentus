<template>

    <v-container fill-height fluid>
  <v-row align="center"
      justify="center">
      <v-col cols="12" style="text-align: center" class="mb-0 pb-0"> <span class="notFound" >404</span>

      </v-col>

      <v-col cols="12" style="text-align: center" class="mt-0 pt-0">
            <span class="oops">Oops! Page not found</span>
      </v-col>

      <v-col cols="12" style="text-align: center" class="mt--4 pt--4">
            <span style="font-size: 20px; color: rgb(187, 162, 87)">The page you are looking for was moved. renamed ir might never existed </span>
      </v-col>

      <v-col cols="12" style="text-align: center">
            <v-btn
            color="primary"
            text
            outlined
            rounded
            to="/home"
            >
            Go home
            </v-btn>
      </v-col>
  </v-row>
</v-container>



</template>

<script>
export default {
    name: 'NotFound',
    data() {
        return {

        }
    },
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital@1&display=swap');

    .notFound{
        font-family: 'Atkinson Hyperlegible', sans-serif;
        font-size: 125px;
        color: white;
        text-shadow: -1px 0 rgb(187, 162, 87), 0 1px rgb(163, 152, 152), 1px 0 rgb(187, 162, 87), 0 -1px rgb(187, 162, 87);
    }
    .oops {
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 50px;
        color: rgb(187, 162, 87);

    }


</style>

