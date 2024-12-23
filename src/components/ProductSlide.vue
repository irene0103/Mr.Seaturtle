<template>
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :loop="true"
      :pagination="{
        clickable: true,
      }"
      :navigation="{
    nextEl: '.swiper-button-next', 
    prevEl: '.swiper-button-prev'
	}"
      :autoplay="{
        delay: 2500
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="item in product" :key="item.id">
        <img :src="item.img" :alt="item.alt">
      </swiper-slide>
      <button class="swiper-button-next"></button>
      <button class="swiper-button-prev"></button>
    </swiper>
  </template>
  <style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-self: center;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
}

.swiper {
  margin-left: auto;
  margin-right: auto;
}
.swiper-button-prev, .swiper-button-next{
  border: none;
  background: none;
  color: #fff;
}

  </style>
  <script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    import { Pagination, Navigation, Autoplay } from 'swiper/modules';
  
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      data() {
        return {
          product:[
          {
            img: new URL('/img/banner/mochi.jpg', import.meta.url).href,
            alt:'banner',
          },
          {
            img:new URL('/img/banner/banner2.jpg', import.meta.url).href,
            alt:'banner',
          },
          {
            img:new URL('/img/banner/news02.jpg', import.meta.url).href,
            alt:'banner',
          },
          {
            img:new URL('/img/banner/store.jpg', import.meta.url).href,
            alt:'banner',
          },

        ],
          modules: [Pagination, Navigation, Autoplay],
        };
      },
    };
  </script>