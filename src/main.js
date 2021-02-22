import Vue from 'vue';
import router from './router';
import App from './App.vue';
import axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.$http=axios; 
axios.defaults.baseURL = 'https://dymatwo-default-rtdb.europe-west1.firebasedatabase.app/'

export const eventBus = new Vue({
  data: {
    product: [], 
       cart: []
  },
  methods: {
    addProductToCart(product) {
      if (!this.cart.find(e => e.id === product.id)) {
        this.cart = [...this.cart, product];
        this.$emit("update : cart", this.cart);
      }
    },
    removeItemCart(item) {
      this.cart = this.cart.slice().filter(e => e.id !== item.id);
      this.$emit("update : cart", this.cart);
    },
    addProduct(product) {
      this.$http.post('products.json',product)
      .then ( res => {
        this.products = [ ...this.products, { ...product, id: this.products.length + 1 + '' }],
        this.$emit('update:products', this.products);
        console.log(res); 
      })
    }, 
    addProducts(products) {
      this.products = products,
      this.$emit('update:products', this.products);
    }, 
    initProducts() {
      this.$http.get('products.json')
      .then(res => {
        const data = res.data; 
        this.products = Object.keys(data).map(key=>data[key])
      })
    }
  }, 
  created() {
    this.initProducts(); 
  } 
})

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')