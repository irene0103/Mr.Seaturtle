<template>

  <div class="product" v-for="item in products" :key="item.id">
    <img :src="item.pic" :alt="item.title">
    <h5>{{ item.title }}</h5>
    <p>{{ item.price }}</p>
  </div>

</template>
<style lang="scss" scoped>
.product {
  width: 190px;
  border: 1.8px solid #b4b4b4;
  box-shadow: 3px 4px #0000001d;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  text-align: center;

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    vertical-align: bottom;
  }

  h5 {
    margin: 10px auto;
  }
}
</style>
<script>
import { useProductStore } from "../store/product"
export default {
  data() {
    return {
      productStore: []
    };
  },
  methods: {
    fetchProducts() {
      this.productStore.fetchProducts();
    }
  },
  computed: {
    products() {
      const targetIds = [5001, 3001, 4001, 5007, 6001, 10001];
      return this.productStore.product
        .flatMap(product => product.items)
        .filter(item => targetIds.includes(item.id)
        );
    }
  },
  created() {
    this.productStore = useProductStore();
    this.fetchProducts();
  }

};
</script>