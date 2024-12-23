<template>
  <main>
    <div class="bgc-circle"></div>
    <section class="intro">
      <banner-slide></banner-slide>
      <button><router-link to="product">看更多商品</router-link></button>
    </section>
    <section>
      <div class="news">
        <h4>News!</h4>
        <h3>最新消息</h3>
        <div class="slide">
          <product-slide></product-slide>
        </div>
      </div>
    </section>
    <section>
      <div class="best-seller">
        <h4>Best Seller</h4>
        <h3>熱銷排行榜</h3>
        <div class="best-product">
          <best-seller />
        </div>
      </div>
    </section>
    <section>
      <div class="review">
        <h4>Best Review</h4>
        <h3>熱銷好評</h3>
        <div class="best-review">
          <best-review></best-review>
        </div>
      </div>
    </section>
    <section>
      <div class="subscribe">
        <h3>訂閱我們</h3>
        <p>please subscribe us and get the latest discount!</p>
        <div class="enter-email">
          <input type="email" placeholder="請輸入Email...">
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import BannerSlide from '@/components/BannerSlide.vue';
import ProductSlide from '@/components/ProductSlide.vue';
import BestSeller from '@/components/BestSeller.vue';
import BestReview from '@/components/BestReview.vue';
export default {
  components: {
    BannerSlide,
    ProductSlide,
    BestSeller,
    BestReview
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/base/color.scss";

.bgc-circle{
    background-color: #def0d6;
    width: 1000px;
    height: 1000px;
    border-radius: 50%;
    position: absolute;
    right: -400px;
    top:-500px;
    z-index: -10;
  }
.intro{
    button{
      width: 200px;
      background-color: #C8E4EC;
      padding: 5px 20px;
      border-radius:20px;
      font-size: 20px;
      margin: 0 150px;
      cursor: pointer;
      a{
        color:$dark-color;
      }
    }
}
.news{
  margin: 90px auto;
  text-align: center;
  position: relative;
  h3{
    margin: 10px auto;
    position: relative;
    width: fit-content;
    &::after{
      content:'';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0;
      border-bottom: 15px solid #FFFB26;
      z-index: -1;
      transform: rotate(-2deg);
    }
  }
  .slide{
    width: 900px;
    margin: 50px auto;
  }
  .wave-container{
      background-image: url("@/assets/img/wave.png");
      background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 500px;
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    position: absolute;
    top: 200px;
    padding:60px;
    }
}
  .best-seller{
    padding-top:100px;
    text-align: center;
   
  h3{
    margin: 10px auto;
    position: relative;
    width: fit-content;
    &::after{
      content:'';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0;
      border-bottom: 15px solid #FF0000;
      z-index: -1;
      transform: rotate(-2deg);
    }
  }
  .best-product{
    width: 70%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    justify-content:center;
    margin:30px auto;

  }
}
.review{
    margin: 100px auto;
  text-align: center;
    h4{
    font-size: 20px;
  }
  h3{
    margin: 10px auto;
    position: relative;
    width: fit-content;
    &::after{
      content:'';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0;
      border-bottom: 15px solid #FC962E;
      z-index: -1;
      transform: rotate(-2deg);
    }
  }
  .best-review{
    width: 90%;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    justify-content:center;
    margin:30px auto;
  }
}
.subscribe{
    width: 70%;
    margin:auto;
    background-color: #FFFFE3;
    border-radius: 80px;
    box-shadow: 2px 2px #0000001d;
    text-align: center;
    padding: 30px 0;
    position: relative;
    left: 0;
    right: 0;
    bottom: -30px;
    p{
      margin: 10px 0;
    }
    .enter-email{
      margin: 20px 0;
      border: 1px solid $border-color;
      border-radius: 50px;
      margin: auto;
      width: 70%;
      display: flex;
      justify-content: space-between;
      z-index: 50;
      input{
        width: 100%;
        padding-left: 15px;
        font-size: 15px;
      }
      button{
        background: #F5F4C3;
        border-radius: 50px;
        padding: 8px 15px;
        margin: 5px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
</style>
