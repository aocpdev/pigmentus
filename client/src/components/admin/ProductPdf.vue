<template>
    <v-simple-table v-if="false">
        <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    Product Name
                </th>
                <th class="text-left">
                    Description
                </th>
                <th class="text-left">
                    Date Created
                </th>
                <th class="text-left">
                    Date Modified
                </th>
                <th class="text-left">
                    Stock
                </th>

                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in desserts"
                :key="item.name"
                >
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>

</template>

<script>
import axios from 'axios'
export default {
    name: "ProductPdf",
    data() {
        return {

        }
    },
}
</script>

