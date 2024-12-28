<template>
  <div class="product">
    <aside>
      <ul>
        <li><router-link :to="'/product/machi'">- 軟QQ麻糬</router-link></li>
        <li><router-link :to="'/product/crispy'">- 咬一口酥脆</router-link></li>
        <li><router-link :to="'/product/deer'">- 島嶼鹿鮮味</router-link></li>
        <li><router-link :to="'/product/taitung'">- 台東必備品</router-link></li>
        <li><router-link :to="'/product/sea'">- 大海的滋味</router-link></li>
        <li><router-link :to="'/product/greenisland'">- 濃縮綠島味</router-link></li>
        <li><router-link :to="'/product/biscuit'">- 隨手來一包</router-link></li>
        <li><router-link :to="'/product/seaweed'">- 島民家常菜</router-link></li>
        <li><router-link :to="'/product/coral'">- 福氣帶回家</router-link></li>
        <li><router-link :to="'/product/dry-seafood'">- 島民季節選</router-link></li>
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
import axios from 'axios';
  export default{
    components:{
      ProductList
    },
    props:['category'],
    data() {
      return {
        productData:[],
        categoryTitle:''
      }
    },
    methods:{
      async fetchData(){
          const response = await axios.get("/data/product.json");
            this.productData = await response.data;
            console.log(this.productData);
            
        }
      },
    computed:{
      filteredProducts() {
      return this.productData.filter(item => item.category === this.category)
      },
     
    },
    mounted() {
    this.fetchData();
  },
  
  }
</script>
<style lang="scss"scoped>
.product{
  width: 100%;
  margin: 20px auto;
  display: flex;
  justify-content: space-evenly;
  aside{
    width: 20%;
    height: 500px;
    background-color: #ffffff;
    border-radius: 20px;
    box-shadow: 3px 3px 15px #00000040;
    position: sticky;
    top:130px;
    ul{
      padding: 15px 20px;
      line-height: 2;
      font-size: 20px;
      li{
        a{
          color:rgb(40, 110, 64);
          &.router-link-active {
            color:rgb(39, 82, 54);
            font-weight: bold;
          }
        }
      }
    }
  }
  .product-list{
    width: 70%;
    .breadcrumb{
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
