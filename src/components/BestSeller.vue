<template>
    <div class="product" v-for="item in bestSeller" :key="item">
      <img :src="item.pic" :alt="item.title">
      <h5>{{ item.title }}</h5>
      <p>{{ item.price }}</p>
    </div>
  </template>
  <style lang="scss" scoped>
    .product{
        border: 1.8px solid #b4b4b4;
        box-shadow: 3px 4px #0000001d;
        border-radius: 10px;
        padding: 20px;
        margin:20px;
        text-align: center;
        img{
            width: 100%;
            height: 200px;
            object-fit: contain;
            vertical-align: bottom;
        }
        h5{
            margin: 10px auto;
        }
    }
  </style>
  <script>
  export default {
    data() {
      return {
        bestSeller:[
            {
            pic:new URL('/public/img/products/sea/flyfish.png',import.meta.url).href,
            title:'飛魚翅',
            price:'$150',
            },
            {
            pic:new URL('/public/img/products/sea/crab.png',import.meta.url).href,
            title:'蔥燒小螃蟹',
            price:'$150',
            },
            {
            pic:new URL('/public/img/products/sea/grillsquid.png',import.meta.url).href,
            title:'碳燒魷魚片',
            price:'$150',
            },
            {
            pic:new URL('/public/img/products/greenisland/john.png',import.meta.url).href,
            title:'小卷醬',
            price:'$300',
            },
            {
            pic:new URL('/public/img/products/deer/deer.png',import.meta.url).href,
            title:'原味鹿肉乾',
            price:'$150',
            },
            {
            pic:new URL('/public/img/products/coral/coral1.png',import.meta.url).href,
            title:'黑糖桂花海燕窩',
            price:'$300',
            }
        ]
      };
    },
    methods: {
    },
    
  };
  </script>
  