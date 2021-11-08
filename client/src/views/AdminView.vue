<template>

        <!-- <v-row
        class="mb-6"
        no-gutters
        >
        <v-col
            cols="2"
            md="2"
        > -->
        <v-row>

            <!-- <v-col
            cols="6"
            md="2"
            class="hidden-md-and-down"
            >


            <v-list rounded class="ma-0 pa-0"
            width="300px"
            height="100vh">
            <v-subheader>Admin</v-subheader>
            <v-list-item-group
                v-model="selectedItem"
                color="rgb(187, 162, 87)"
            >
                <v-list-item
                v-for="(item, i) in items"
                :key="i"
                :to="item.route"
                >
                <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            </v-list>

            </v-col> -->

            <v-navigation-drawer
        absolute
        left

        v-model="drawer"
        temporary

      >
        <v-list nav dense >
            <v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-4"
        >
          <v-list-item
          v-for="item in items"
          :key="item.text"
          link
          :to="item.route"
          >
              <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
            <!-- <v-list-item-title>Foo</v-list-item-title>ist-item> -->
          </v-list-item>

        </v-list-item-group>
          <!-- <v-list-tile>
            <v-list-tile-action>
              <v-icon> mdi-view-dashboard</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile> -->
        </v-list>
      </v-navigation-drawer>

      <v-toolbar  dense
            style="background-color: rgb(252, 249, 237)">

        <v-btn
        class="ma-2 hidden-md-and-up"
        text
        icon
        @click.stop="drawer = !drawer"
        color="primary"
      >
        <v-icon color="black">mdi-menu</v-icon>
      </v-btn>
        <!-- <v-spacer class="hidden-md-and-up"></v-spacer> -->
        <!-- <v-toolbar-title> <v-icon>mdi-account-child-circle</v-icon> <span>{{$store.state.user.name}} {{$store.state.user.lastName}}</span></v-toolbar-title> -->
        <v-spacer class="hidden-sm-and-down"></v-spacer>
        <v-btn
                v-for="(item, i) in items"
                :key="i"
                :to="item.route"
                text
                x-small
                color="black"
                style="color: rgb(252, 249, 237);"
                class="hidden-sm-and-down"
            >
                {{item.text}}
            </v-btn>
      </v-toolbar>

            <!-- <v-toolbar
            dense
            style="background-color: rgb(252, 249, 237)"
            >
            <v-toolbar-title><b>Admin:</b> <i>{{$store.state.user.name}} {{$store.state.user.lastName}}</i></v-toolbar-title>
            <v-spacer></v-spacer>

            <v-btn
                v-for="(item, i) in items"
                :key="i"
                :to="item.route"
                text
                x-small
                color="black"
                style="color: rgb(252, 249, 237);"
            >
                {{item.text}}
            </v-btn>
            </v-toolbar> -->
            <v-col cols="12" class="pt-0"
            >
            <v-main class="pt-0">
                <router-view></router-view>
            </v-main>
            </v-col>

        </v-row>



        <!-- </v-col> -->
        <!-- <v-col
        cols="12"
        sm="6"
        md="10"
        >
        <v-card
        elevation="2"
        max-width="100"
        >
        <v-card-text>
            <div>New Users</div>
        </v-card-text>
        </v-card>
        </v-col> -->




</template>

<script>
export default {
    data: () => ({
    selectedItem: 1,
    drawer: false,
    group: null,
    items: [
    { text: 'Dashboard', icon: 'mdi-view-dashboard', route: '/admin/dashboard'},
    { text: 'Customers', icon: 'mdi-account', route: '/admin/customers'},
    // { text: 'Revenue', icon: 'mdi-currency-usd', route: '' },
    { text: 'Inventory', icon: 'mdi-view-list', route: '/admin/inventory' },
    // { text: 'Orders', icon: 'mdi-history', route: '' },
    // { text: 'Courses', icon: 'mdi-history', route: '' },
    // { text: 'Purchases', icon: 'mdi-history', route: '' },
    // { text: 'Expenses', icon: 'mdi-history', route: '' },
    ],
    }),
    watch: {
      group () {
        this.drawer = false
      },
    },
    created() {
      this.$store.state.bottomNavigation = false;
    },
}
</script>

<style>

.v-toolbar-title {
    font-size: 1rem!important;
    line-height: 1!important;

}


</style>
