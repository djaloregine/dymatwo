import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  data: {
    products: [{
        id: "1",
        img: "https://cdn.pixabay.com/photo/2017/06/23/23/57/bread-2436370_960_720.jpg",
        title: "Pain",
        description: "Le pain est l'aliment de base traditionnel de nombreuses cultures. Il est fabriqué à partir des ingrédients qui sont la farine et l'eau. Il contient généralement du sel. ",
        price: 1

      },
      {
        id: "2",
        img: "https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/extralarge/1727/croissant_flickr_242518635_5e450f4a17_b.jpg",
        title: "Croissant",
        description: "Un croissant est une viennoiserie à base d'une pâte levée feuilletée spécifique, la pâte à croissant, qui comporte de la levure et une proportion importante de beurre. ",
        price: 1.1

      },
      {
        id: "3",
        img: "https://assets.afcdn.com/recipe/20181107/83668_w1024h768c1cx2880cy1920cxt0cyt0cxb5760cyb3840.jpg",
        title: "Pain au chocolat",
        description: "Le pain au chocolat est une viennoiserie constituée d'une pâte levée feuilletée,rectangulaire et enroulée sur une ou plusieurs barres de chocolat. ",
        price: 1.2

      },
      {
        id: "4",
        img: "https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_600,q_auto,w_800/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/51718/chaussons_aux_pommes_flickr_7496731476_681948e1bc_k.jpg",
        title: "Chausson aux pommes",
        description: "Le chausson aux pommes est une pâtisserie à base de pâte feuilletée contenant le même type de garniture que la tarte aux pommes. ",
        price: 1.2

      },
      {
        id: "5",
        img: "https://files.meilleurduchef.com/mdc/photo/recette/pain-aux-raisins-facile/pain-aux-raisins-facile-640.jpg",
        title: "Pain aux raisins",
        description: "Le pain aux raisins, également appelé escargot, brioche aux raisins, couque aux raisins, couque escargot ou couque suisse en Belgique, pain russe à Lyon, escargot aux raisins ... ",
        price: 1.2

      },
      {
        id: "6",
        img: "https://www.mesinspirationsculinaires.com/wp-content/uploads/2013/02/pains-au-lait5_3.jpg",
        title: "Pain au lait",
        description: "Le pain au lait est un produit commercialisé en boulangerie, sous la forme oblongue ou ronde d'un petit pain, à l'aspect, à la consistance et à la saveur voisines de celle de la brioche.",
        price: 1.1

      },
      {
        id: "7",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjM0CaacMX9KfFk7muNOTah_7NH81nb72CVw&usqp=CAU",
        title: "Brioche",
        description: "La brioche est une pâtisserie, à pâte levée et assez aérée, contenant du beurre et des œufs.",
        price: 1.3

      },
      {
        id: "8",
        img: "https://pastryfreak.fr/wp-content/uploads/2020/03/pain-de-mie-1.jpg",
        title: "Pain de mie",
        description: "Le pain de mie sert à préparer canapés, toasts, sandwiches, croque-monsieur et permet aussi de garnir des buffets et des lunchs ! ",
        price: 1

      }
    ],
    cart: []
  },
  methods: {
    addProductToCart(product) {
      if (!this.cart.find(e => e.id === product.id)) {
        this.cart = [...this.cart, product];
        this.$emit("update : cart", this.cart);
      }
      console.log(product.id)
    },
    removeItemCart(item) {
      this.cart = this.cart.slice().filter(e => e.id !== item.id);
      this.$emit("update : cart", this.cart);
    }
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')