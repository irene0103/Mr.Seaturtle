<template>
  <div class="product">
    <aside>
      <ul>
        <li><router-link :to="'/product/machi'"><img width="30" height="30" src="https://img.icons8.com/color-pixels/30/turtle.png" alt="turtle"/>軟QQ麻糬</router-link></li>
        <li><router-link :to="'/product/crispy'"><img width="30" height="30" src="https://img.icons8.com/color-pixels/30/turtle.png" alt="turtle"/>咬一口酥脆</router-link></li>
        <li><router-link :to="'/product/deer'"><img width="30" height="30" src="https://img.icons8.com/color-pixels/30/turtle.png" alt="turtle"/>島嶼鹿鮮味</router-link></li>
        <li><router-link :to="'/product/taitung'"><img width="30" height="30" src="https://img.icons8.com/color-pixels/30/turtle.png" alt="turtle"/>台東必備品</router-link></li>
        <li><router-link :to="'/product/sea'"><img width="30" height="30" src="https://img.icons8.com/color-pixels/30/turtle.png" alt="turtle"/>大海的滋味</router-link></li>
        <li><router-link :to="'/product/greenisland'"><img width="30" height="30" src="https://img.icons8.com/color-pixels/30/turtle.png" alt="turtle"/>濃縮綠島味</router-link></li>
        <li><router-link :to="'/product/biscuit'"><img width="30" height="30" src="https://img.icons8.com/color-pixels/30/turtle.png" alt="turtle"/>隨手來一包</router-link></li>
        <li><router-link :to="'/product/seaweed'"><img width="30" height="30" src="https://img.icons8.com/color-pixels/30/turtle.png" alt="turtle"/>島民家常菜</router-link></li>
        <li><router-link :to="'/product/coral'"><img width="30" height="30" src="https://img.icons8.com/color-pixels/30/turtle.png" alt="turtle"/>福氣帶回家</router-link></li>
        <li><router-link :to="'/product/dry-seafood'"><img width="30" height="30" src="https://img.icons8.com/color-pixels/30/turtle.png" alt="turtle"/>島民季節選</router-link></li>
      </ul>
    </aside>
    <div class="product-list">
      <div class="breadcrumb">
        <p>一般商品 > {{ filteredProducts.length > 0 ? filteredProducts[0].categoryTitle : categoryTitle }}</p>
      </div>
      <div class="main-product">
        <product-list :products="filteredProducts"></product-list>
      </div>
    </div>
  </div>
</template>
<script>
import ProductList from '@/components/ProductList.vue';
import { useProductStore } from '../store/product';

export default {
  components: {
    ProductList
  },
  props: ['category'],
  data() {
    return {
      categoryTitle: '',
      productStore: [],
    }
  },
  methods: {
    fetchProducts() {
      this.productStore.fetchProducts();
    }
  },
  computed: {
    filteredProducts() {
      return this.productStore.product.filter(item => item.category === this.category)
    }

  },
  created() {
    this.productStore = useProductStore();
    this.fetchProducts();

  },

}
</script>
<style lang="scss" scoped>
.product {
  width: 100%;
  margin: 20px auto;
  display: flex;
  justify-content: space-evenly;

  aside {
    width: 20%;
    height: 500px;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 3px 3px 15px #00000040;
    position: sticky;
    top: 130px;

    ul {
      padding: 15px 20px;
      line-height: 2;
      font-size: 20px;

      li {
        a {
          color: rgb(40, 110, 64);

          &.router-link-active {
            color: rgb(39, 82, 54);
            font-weight: bold;
          }
          img{
            vertical-align:middle;
            margin-right: 10px;
            padding-bottom: 5px;
            transform: scaleX(-1);
          }
        }
      }
    }
  }

  .product-list {
    width: 70%;

    .breadcrumb {
      margin-left: 20px;
    }

    // .main-product{
    // display: grid;
    // grid-template-columns: repeat(3,1fr);
    // justify-content:center;
    // }

  }
}
</style>
