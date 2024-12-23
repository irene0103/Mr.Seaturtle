<template>
  <div class="contact">
    <h1>聯絡資訊</h1>
    <hr width="90%"/>
    <div class="contact-info">
      <div class="map">
        
        <div v-if="currentView === 'googleMap'">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.6783026354215!2d121.46781137465965!3d22.665779879425482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346f8db368d935ed%3A0x951c565dca05e87a!2z5rW36b6c5YWI55Sf5Ly05omL56au!5e0!3m2!1szh-TW!2stw!4v1733907226378!5m2!1szh-TW!2stw" width="500" height="320" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div v-else-if="currentView === 'store'">
      <img src="/img/store.png" alt="store">
    </div>
    <div class="tab">
          <button id="googleMap" @click="showGoogleMap">Google Map</button> |
          <button id="store" @click="showStore">店面資訊</button>
        </div>
      </div>
      <div class="info-content">
        <div class="info-content-list">
          <h2>海龜先生<span>週一至週日 08:00-22:00</span></h2>
          <p><img width="40" height="40" src="https://img.icons8.com/pulsar-line/40/cottage.png" alt="cottage"/>台東縣綠島鄉南寮街105-6號</p>
          <p><img width="40" height="40" src="https://img.icons8.com/pulsar-line/40/apple-phone.png" alt="apple-phone"/>08-967-1329</p>
          <p><img width="40" height="40" src="https://img.icons8.com/pulsar-line/40/filled-message.png" alt="filled-message"/>seaturtle@gmail.com</p>
        </div>
        <div class="info-social">
          <a href="https://line.me/R/ti/p/@mfg5282i"><img width="65" height="65" src="https://img.icons8.com/color/65/line-me.png" alt="line-me"/></a>
          <a href="https://www.facebook.com/Mr.Turtleshop/?locale=zh_TW"><img width="65" height="65" src="https://img.icons8.com/color/65/facebook.png" alt="facebook"/></a>
          <a href="https://www.instagram.com/mr.turtle_good_taste/"><img width="65" height="65" src="https://img.icons8.com/fluency/65/instagram-new.png" alt="instagram-new"/></a>
          <a href="mailto:seaturtle@gmail.com"><img width="65" height="65" src="https://img.icons8.com/color/65/gmail-new.png" alt="gmail-new"/></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        currentView:'googleMap'
      }
    },
    computed:{
      showGoogleMap(){
        this.currentView='googleMap'
      },
      showStore(){
        this.currentView='store'
      }
    }
  }
</script>
<style lang="scss" scoped>
  .contact{
    h1{
      text-align: center;
      font-family: 'MyCustomFont', sans-serif;
      margin: 20px auto;
    }
    .contact-info{
      display: flex;
      justify-content: space-evenly;
      margin: 40px auto;
      .map{
        .tab{
          text-align: center;
          button{
            padding: 5px;
            cursor: pointer;
          }
        }
        img{
          width: 500px;
          height: 320px;
        }
      }
      .info-content{
        display: flex;
        flex-direction: column;
        .info-content-list{
          h2{
            margin-bottom: 20px;
            span{
              font-size: 16px;
              margin-left: 20px;
            }
          }
          p{
            font-size: 20px;
            line-height: 2.5;
            img{
              margin-right: 10px;
              vertical-align: middle;
            }
          }
        }
        .info-social{
          margin-top: 30px;
          margin-left: -10px;
        }
      }
    }
  }
</style>
