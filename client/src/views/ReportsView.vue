<template>
    <v-row no-gutters>
        <v-col cols="12"

        >
        <v-main class="pt-0">
            <router-view></router-view>
        </v-main>
        </v-col>

    </v-row>
</template>

<script>
export default {
    name: "ReportsView",
    data() {
        return {

        }
    },
}
</script>