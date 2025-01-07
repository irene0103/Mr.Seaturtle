import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    product: [],
  }),
  getters: {},
  actions: {
    async fetchProducts() {
      try {
        // const response = await axios.get("/data/product.json")
        const response = await axios.get(
          "https://run.mocky.io/v3/1ee9581f-49a1-46d8-81b8-45a883c72cd7"
        );
        this.product = response.data;
      } catch {
        console.log("載入商品錯誤");
      }
    },
  },
});
