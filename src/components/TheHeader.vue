<template>
  <div class="wrapper">
    <nav>
      <ul>
        <li v-for="item in menu" :key="item.id">
            <router-link :to="item.link" @mouseover="item.showEnglish = true" @mouseleave="item.showEnglish = false">
              <img v-if="item.chinese === '首頁'" src="@/assets/img/logo.png" :alt="item.chinese" class="logo">
              <p v-else>{{ item.showEnglish ? item.english : item.chinese }}</p>
            </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
    data() {
    return {
      menu: [
        {
          chinese: "首頁",
          english: "Home",
          showEnglish: false,
          link: "/",
        },
        {
          chinese: "產品介紹",
          english: "Products",
          showEnglish: false,
          link: "/product",
        },
        {
          chinese: "訂購指南",
          english: "Ship Info",
          showEnglish: false,
          link: "/delivery",
        },
        {
          chinese: "品牌故事",
          english: "About Us",
          showEnglish: false,
          link: "/about",
        },
        {
          chinese: "聯絡我們",
          english: "Contact Us",
          showEnglish: false,
          link: "/contact",
        },
      ],
    };
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/components/header.scss';
</style>
