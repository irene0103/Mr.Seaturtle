import { defineStore } from 'pinia';
import axios from 'axios'

export const useProductStore = defineStore('product', {
  state: ()=>({
    product:[],
  }),
  getters:{},
  actions:{
    async fetchProducts(){
      try{
        const response = await axios.get("/data/product.json")
        this.product = response.data
      }catch{
        console.log("載入商品錯誤");
        
      }
    }
  }
});
