import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue';
import CreateProduct from './CreateProduct.vue'
import EditProduct from './EditProduct.vue'
import ProductDetails from './ProductDetails.vue'

Vue.use(VueRouter);

const routes = [
    {path:'/create', component:CreateProduct,name:'CreateProduct'},
    {path:'/edit', component:EditProduct,name:'EditProduct'},
    {path:'/',component:ProductDetails,name:'ProductDetails'}
];

const router = new VueRouter({
    routes,
    mode:'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
