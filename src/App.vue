<template>
  <the-header class="header" :class="{'hide':isHide}"></the-header>
    <div class="container">
      <router-view />
      <!-- 回到頂端的按鈕 -->
    <button v-if="showButton" class="back-to-top" @click="scrollToTop">
      <i class="fa-solid fa-arrow-up"></i>
    </button>
    </div>
    
  <the-footer></the-footer>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
export default{
  components:{
    TheHeader,
    TheFooter
  },
  data() {
    return {
      isHide:false,
      lastScrollY: 0,
      showButton: false,
    }
  },
  methods:{
    handleScroll(){
      const currentScrollY=window.scrollY;
      if (currentScrollY > this.lastScrollY && currentScrollY > 50){
        this.isHide=true;
      }else{
        this.isHide=false;
      }
      this.lastScrollY=currentScrollY;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', 
      });
    },
    topScroll() {
      this.showButton = window.scrollY > 300;
    },
    handleScrollAndTopScroll() {
    this.handleScroll();  
    this.topScroll();   
  }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScrollAndTopScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScrollAndTopScroll);
  },
  
}
</script>

<style lang="scss">
  
@import '@/assets/css/main.scss';

body{
  overflow-x: hidden;
}
.container{
  width: 100%;
  max-width: 1200px;
  margin:auto;
  padding-top: 120px;
  position: relative;
}
.header {
  transition: transform 0.3s ease-in-out;
}
.hide {
  transform: translateY(-100%);
}
.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  color:rgb(127, 180, 136);
  border: 1px solid #ffffff;
  border-radius: 50px;
  padding: 10px 12px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;
  &:hover{
    transform: scale(1.1);
  }
}
</style>
