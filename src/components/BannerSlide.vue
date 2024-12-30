<template>
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :navigation="{ 
    nextEl: '.swiper-button-next'
	}"
      :modules="modules"
      class="mySwiper"
    >

      
      <swiper-slide v-for="item in product" :key="item.id">
        <div class="slide-content">
          <h2>{{ item.title }}</h2>
          <span>{{ item.catalog }}</span>
          <p>{{ item.content }}</p>
        </div>
        <div class="slide-img">
          <img :src="item.img" :alt="item.alt">
        </div>
      </swiper-slide>
      <button class="swiper-button-next"></button>
    </swiper>
  </template>
  <style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  .slide-content{
    width:45%;
    padding: 5px 15px;
    display: flex;
    flex-direction: column;
    text-align: left;
    h2{
      font-size: 50px;
    }
    span{
      width: fit-content;
      padding: 10px;
      font-size: 15px;
      background-color: rgb(240, 180, 106);
      border-radius: 10px;
      margin-top: 20px;
    }
    p{
      line-height: 1.5;
      text-indent: 2rem;
      margin-top: 30px;
    }
  }
  .slide-img {
    width:40%;
    img{
      width: 90%;
      vertical-align: baseline;
    }
  }
}

.swiper-button-next{
 background-color: #5db048;
 color:#ffffff;
 width: 50px;
 height: 50px;
 border-radius: 50%;
 position: absolute;
 right: 10px;
  &::after{
    font-size: 20px;
 }
}
.swiper-button-prev{
  display:none;
}
  </style>
  <script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import { Navigation, Autoplay } from 'swiper/modules';
  
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      data() {
        return {
          product:[
          {
            img: new URL('/img/banner-product/海燕窩.png', import.meta.url).href,
            alt:'banner',
            title:"桂圓紅棗海燕窩",
            catalog:"#福氣帶回家",
            content:"桂圓紅棗海燕窩是一道營養豐富的養生甜品，結合了桂圓的補氣安神、紅棗的補血益氣，以及海燕窩的滋養潤膚特性。這道甜品不僅口感細膩，還能補充人體所需的蛋白質、維生素和礦物質，對促進免疫力、改善氣色與皮膚健康有顯著功效，非常適合日常保健和美容養顏。"
          },
          {
            img:new URL('/img/banner-product/小卷醬.png', import.meta.url).href,
            alt:'banner',
            title:"風味小卷醬",
            catalog:"#濃縮綠島味",
            content:"風味小卷醬採用新鮮小卷搭配多種天然香料，經慢火熬煮而成，完美融合了海鮮的鮮甜與醬汁的濃郁口感。無論拌麵、佐飯或作為火鍋沾醬，都能提升料理風味，帶來豐富的層次感。一瓶即可輕鬆享受大海的滋味！"
          },
          {
            img:new URL('/img/banner-product/fishskin.png', import.meta.url).href,
            alt:'banner',
            title:"鹹蛋黃魚皮",
            catalog:"#咬一口酥脆",
            content:"鹹蛋黃魚皮選用新鮮魚皮，搭配香濃鹹蛋黃精心製作，酥脆口感融合濃郁蛋香，每一口都令人回味無窮。完美的鹹甜平衡，適合作為零食或聚會小點心。不僅保留魚皮的鮮味，更增添層次感，讓人一試成主顧！"
          },
        ],
        modules: [Navigation, Autoplay],
        };
      },
    };
  </script>