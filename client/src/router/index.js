import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Layout from '../components/Layout.vue';
import Activity from '../components/client/Activity.vue';
import UserAccount from '../components/client/UserAccount.vue';
import Messages from '../components/client/Messages.vue';
import Profile from '../components/client/Profile.vue';
import Cart from '../components/client/Cart.vue';
import CartShipping from '../components/client/CartShipping.vue';
import CartSummary from '../components/client/CartSummary.vue';
import CartCheckout from '../components/client/CartCheckout.vue';
import OrderLoading from '../components/client/OrderLoading.vue';
import PersonalInfo from '../components/client/PersonalInfo.vue';
import Shop from '../components/client/Shop.vue';
import Collections from '../components/client/Collections.vue';
import Product from '../components/client/Product.vue';
import ProductInfo from '../components/client/ProductInfo.vue';
import Admin from '../views/AdminView.vue';
import Dashboard from '../components/admin/Dashboard.vue';
import Customers from '../components/admin/Customers.vue';
import AdminInventory from '../components/admin/Inventory.vue';
import AdminProducts from '../components/admin/Products.vue';
import AdminCollections from '../components/admin/Collections.vue';
import ReportsView from '../views/ReportsView.vue';
import ProductsReports from '../components/admin/ProductsReports.vue';
import UsersReports from '../components/admin/UsersReports.vue';
import NotFound from '../views/NotFound.vue';

import store from '../store/index'
import axios from 'axios'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    beforeEnter: (to, from, next) => {
      if (to.path === '/') {
        next ({name: 'Home'})
      }else next()
    },
    redirect: {name: 'Home'},
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/shop/',
        name: 'Shop',
        component: Shop,
        redirect: 'shop/1',
        children: [
          { path: ':id', name: 'collections', component: Collections,
            children: [
              { path: 'product/:id', name: 'Product', component: Product },
            ]},

        ]
      },
      {
        path: '/product',
        name: 'ProductInfo',
        component: ProductInfo
      },
      {
        path: '/profile/:id',
        name: 'Profile',
        component: Profile,
        children: [
          { path: 'activity', component: Activity },
          { path: 'account', redirect: { name: 'personal' }, component: UserAccount,
            children: [
              { path: 'personal', name: 'personal', component: PersonalInfo},
            ]},
          { path: 'messages', component: Messages }
        ]
      },
      {
        path: '/admin',
        beforeEnter: (to, from, next) => {
          axios.get('http://localhost:3000/api/auth').then(user => {
            console.log(user);

            // if (user.data.user === undefined){
            //   next({
            //     name: 'notFound'
            //   })
            // }

            // } else if (store.state.user !== undefined) {
            //   console.log(store.state);
            //   console.log(typeof(store.state.user.roleId));
            //   console.log(store.state.user);
            //   console.log(store.state.user.roleId === 1);
            //   console.log(store.state.user.roleId === 2);
            //   console.log(store.state.user.roleId === 3);
            //   console.log(store.state.user.roleId === 4);

              switch (user.data.user.roleId) {

                case 1:
                  store.state.isCEO = true;
                  store.state.enabledDashboard = true;
                  next();
                  break;
                case 2:
                  store.state.isAdmin = true;
                  store.state.enabledDashboard = true;
                  next();
                  break;
                case 3:
                  store.state.isDev = true;
                  store.state.enabledDashboard = true;
                  next();
                  break;
                default:
                  store.state.isCustomer = true;
                  store.state.enabledDashboard = false;
                  next({
                    name: 'notFound'
                  })
                  break;
              }
            // }

          }).catch(err => {
            next({ name: 'notFound' })
          })


        },
        name: 'Admin',
        component: Admin,
        redirect: {name: 'dashboard'},

        children: [
          { path: 'dashboard', name: 'dashboard', component: Dashboard},
          { path: 'reports', name: 'reports', component: ReportsView,
            children: [

              {path: 'products', name: 'products-reports', component: ProductsReports},
              {path: 'users', name: 'users-reports', component: UsersReports}

            ]
          },
          { path: 'customers', name: 'customers', component: Customers},
          { path: 'inventory', name: 'inventory', component: AdminInventory, redirect: {name: 'adminProducts'},
            children: [
              { path: 'products', name: 'adminProducts', component: AdminProducts},
              { path: 'collections', name: 'adminCollections', component: AdminCollections},
            ]
          },
        ]
      },
      {
        path: '/cart',
        name: 'cart',
        component: Cart,
        redirect: {name: 'cartSummary'},
        children: [
          { path: 'summary', name: 'cartSummary', component: CartSummary},
          { path: 'shipping', name: 'cartShipping', component: CartShipping,
          children:[
            { path: 'checkout', name: 'cartCheckout', component: CartCheckout}
          ]},

        ]
      },
      {
        path: '/order',
        name: 'order',
        component: OrderLoading,
      },
      {
        path: '/signup',
        name: 'Signup',
        component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
      },
      {
        path: '/auth/signin',
        name: 'Signin',
        component: () => import(/* webpackChunkName: "signin" */ '../views/Signin.vue')
      },
      {
        path: '/categories',
        name: 'categories',
        component: () => import(/* webpackChunkName: "categories" */ '../views/Categories.vue')
      },
      {
        path: '/404',
        alias: '*',
        name: 'notFound',
        component: NotFound
      }
    ]

  },

]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router;
