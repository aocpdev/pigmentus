<template>
    <div class="col-md-3 col-sm-6 col-xs-12">
    <v-card

        class="mx-auto"
        color="grey lighten-4"
        max-width="600"
    >
    <v-skeleton-loader
        v-bind="attrs"
        type="image"
        ></v-skeleton-loader>
    <v-card-text class="text--primary" style="background-color: rgb(252, 249, 237)">
        <v-skeleton-loader
        v-bind="attrs"
        type="text"
        ></v-skeleton-loader>
        <div style="padding-left: 80px; padding-right: 80px">
            <v-skeleton-loader
        v-bind="attrs"
        type="text"
        ></v-skeleton-loader>
        </div>


    </v-card-text>

    </v-card>
    </div>
</template>

<script>
export default {
    name: 'SkeletonProducts',
    data() {
        return {
            attrs: {
                boilerplate: false,
            },
        }
    },
}
</script>

<style lang="">

</style>