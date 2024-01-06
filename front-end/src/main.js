import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ProductDetailPage from './pages/ProductDetailPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA-dy3MQL3kApM_2Lf-_clqipJJj1Tubfs",
  authDomain: "fullstackapp-73751.firebaseapp.com",
  projectId: "fullstackapp-73751",
  storageBucket: "fullstackapp-73751.appspot.com",
  messagingSenderId: "980493211134",
  appId: "1:980493211134:web:2de41c30b0674f84675caf"
};

// Initialize Firebase
initializeApp(firebaseConfig);


createApp(App)
.use(VueRouter.createRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL),
  routes: [{
    path: '/cart',
    component: ShoppingCartPage,
  },{
    path: '/products',
    component: ProductsPage,
  },{
    path: '/products/:productId',
    component: ProductDetailPage,
  },{
    path: '/',
    redirect: '/products',
  },{
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
  }]
}))
.mount('#app')
