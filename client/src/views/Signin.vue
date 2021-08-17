<template>
    <v-container fill-height fluid>
      <v-row justify="center">
      <v-col cols="12" sm="8" md="8" align="center">
        <v-card class='elevation-12' max-width="650px" max-height="500px">
          <v-window>
            <v-window-item>
              <v-row>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-12">
                    <!-- <h1 class="text-center display-2 textColor text--accent-3">Sign in to Pigmentus</h1> -->
                    <!-- <div class=text-center>
                      <v-btn class="mx-2 facebook" fab color="rgb(66 103 178)"
                      href="https://www.facebook.com/Pigmentus"
                      >
                        <v-icon color="white">mdi-facebook</v-icon>
                      </v-btn>
                      <v-btn class="mx-2 instagram" fab color="black"
                      href="https://www.instagram.com/pigmentus_pr/"
                      >
                        <v-icon color="white">mdi-instagram</v-icon>
                      </v-btn>
                      <v-btn class="mx-2" fab color="rgb(40,103,178)"
                      href="https://www.linkedin.com/in/axelcastro/"
                      >
                        <v-icon color="white">mdi-linkedin</v-icon>
                      </v-btn>
                    </div> -->
                    <div style="padding-top: 20px" v-if="error">
                      <v-alert
                      text
                      v-model="error"
                      dismissible
                      close-icon="mdi-close"
                      icon="mdi-lock"
                      type="error"
                    >
                       {{errorMessage}}
                    </v-alert>
                    </div>
                    <v-form>
                      <v-text-field
                      v-model="user.email"
                      label="Email"
                      name="Email"
                      prepend-icon="mdi-email"
                      color="rgb(187, 162, 87)"
                      />
                      <v-text-field
                      v-model="user.password"
                      id="Password"
                      label="Password"
                      name="Password"
                      prepend-icon="mdi-lock"
                      type="password"
                      color="rgb(187, 162, 87)"
                      />
                    </v-form>
                    <h3 class="text-center mt-3">Forget your password?</h3>
                  </v-card-text>
                  <div class="text-center mt-3">
                    <v-btn rounded color="rgb(187, 162, 87)" @click="login()">SIGN IN</v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="goldColor accent-3">
                  <v-card-text class="white--text mt-12">
                    <h1 class="text-center display-1">Hello, Amigos !</h1>
                    <h5>Enter your personnel detail and start journey with us</h5>
                  </v-card-text>
                  <div class="text-center">
                    <v-btn rounded  dark @click="goSignup()">SIGN UP</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
    </v-container>

</template>
<script>
import {mapMutations, mapState} from 'vuex'
import router from '../router/index'
export default {
  data: () => ({
    user: {},
    error: false,
    errorMessage: '',
    prevRoute: '',
  }),
  methods: {
    ...mapMutations(['changeLoginStatus', 'setUser', 'isAuth', 'changeRole']),
    login() {
      this.axios.post('/api/auth/signin', this.user)
        .then(res => {
          this.changeLoginStatus(true);
          let user = {
            id: res.data.id,
            name: res.data.name,
            lastName: res.data.lastName,
            email: res.data.email,
            preferences: res.data.preferences,
            roleId: res.data.roleId
          }
          this.$store.state.snackbarMessage = "Welcome Back!" + " "  + user.name + " "  + user.lastName
          this.$store.state.snackbar = true;
          this.setUser(user);
          this.changeRole(user.roleId);
          if (this.$route.query.fromCart === "true") {
            router.push({ name: "cartShipping"});
          } else {
            router.push('/home');
          }

        })
        .catch(err => {
          this.error = false;
          if (err.response.data.message === "Invalid user or password"){
            this.user = {}
            this.error = true;
            this.errorMessage = err.response.data.message + '.'
          }
        });
    },
    goSignup () {
      if (this.$route.query.fromCart === "true") {
        router.push({ name: "Signup", query: { fromCart: 'true' }});
      } else {
        router.push({ name: "Signup"});
      }

    }
  },
  created() {
    console.log(this.$route.query.fromCart);
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(from);
      vm.prevRoute = from.fullPath;
    })
  },

}
</script>

<style>
  .goldColor {
    background-color: rgb(187, 162, 87);
  }
  .textColor {
    color: rgb(187, 162, 87);
  }
  .my-text-style >>> .v-text-field__slot input {
    color: rgb(187, 162, 87);
  }
  .instagram {
    background-image: -webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );
    background-image: gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );
    color:transparent;
    -webkit-background-clip: text;
    background-clip: text;color: transparent;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    background: -webkit-radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
}
.facebook{
  background-color: rgb(66 103 178);
}
</style>