import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    isLoading: true,
    isPaymentLoading: false,
    user: '',
    isAdmin: false,
    isDeveloper: false,
    isCEO: false,
    isCustomer: false,
    enabledDashboard: false,
    cartHeading: '',
    e2: 1,
    paymentFee: 0.00,
    feeRate: 0.00,
    cartRoute: '',
    cartDetails: {
      cart: [],
      shippingFee: 0,
      subtotal: 0,
      tax: 0,
      total: 0,
      productsQuantity: 0
    },
    snackbarMessage: '',
    snackbar: false,
    snackbarTimeout: 2000,
  },
  mutations: {
    loading(state, isLoading) {
      state.isLoading = false;
    },
    paymentLoading(state, isPaymentLoading){
      state.isPaymentLoading = isPaymentLoading;
    },
    changeLoginStatus(state, isLogin){
        state.isLogin = isLogin;
    },
    changeRole(state, roleId) {
      // if (roleId === 1 || roleId === 2 || roleId === 3) {
      //   state.enabledDashboard = true;
      // } else {
      //   state.enabledDashboard = false;
      // }
      switch (roleId) {

        case 1:
          state.isCEO = true;
          state.enabledDashboard = true;
          break;
        case 2:
          state.isAdmin = true;
          state.enabledDashboard = true;
          break;
        case 3:
          state.isDev = true;
          state.enabledDashboard = true;
          break;
        default:
          state.isCustomer = true;
          state.enabledDashboard = false;
          break;
      }
    },
    setUser(state, user) {

      if(user === undefined) {
        state.user = ''
        state.isLogin = false;
        state.enabledDashboard = false


      } else {
        state.isLogin = true;
        switch (user.roleId) {

          case 1:
            state.isCEO = true;
            state.enabledDashboard = true;
            break;
          case 2:
            state.isAdmin = true;
            state.enabledDashboard = true;
            break;
          case 3:
            state.isDev = true;
            state.enabledDashboard = true;
            break;
          default:
            state.isCustomer = true;
            state.enabledDashboard = false;
            break;
        }


        state.user= user;
        axios.get('api/cart', { params: { userId: user.id} }).then(res => {
          state.cartDetails = res.data.cartDetails;
        }).catch(err => console.log(err))

      }
    }

  },
  actions: {
    isAuth: async function ({commit}) {
      axios.get('https://pigmentus.herokuapp.com/api/auth')
      // axios.get('http://localhost:3000/api/auth')
        .then(user => {
          if (user.data.user === '') {
            state.user = "";

          }else {

            commit('setUser', user.data.user)
          }
        })
        .catch(err => { if (err) { } })
    }
  },
  modules: {
  }
})
