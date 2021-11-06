<template>
    <v-skeleton-loader
    v-bind="attrs"
    type="list-item, list-item, list-item"
    ></v-skeleton-loader>
</template>

<script>
export default {
    name: "SkeletonList",
    data() {
        return {
            attrs: {
                boilerplate: false,
            },
        }
    },
}
</script>