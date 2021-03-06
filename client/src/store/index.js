import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    isLoading: true,
    user: '',
    cart: ''
  },
  mutations: {
    loading(state, isLoading) {
      state.isLoading = false;
    },
    changeLoginStatus(state, isLogin){
        state.isLogin = isLogin;
    },
    setUser(state, user) {

      if(user === undefined) {
        state.user = ''
        state.isLogin = false;
      } else {
        state.isLogin = true;
        state.user= user;
        axios.get('api/v1.0/cart', { params: { userId: user.id} }).then(res => {
          state.cart = res.data.cart.rows;
        }).catch(err => console.log(err))

      }
    }

  },
  actions: {
    isAuth: async function ({commit}) {
      axios.get('http://pigmentus.herokuapp/api/v1.0/auth')
        .then(user => {
          if (user.data.user === '') {
            state.user = "";
          }else {
            commit('setUser', user.data.user)
          }
        })
        .catch(err => console.log(err))
    }
  },
  modules: {
  }
})
