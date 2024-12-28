<template>
  <div class="delivery">
    <h1>運送方式</h1>
    <div class="step">
      <ul>
        <li>Step 1<br>收到訂單</li>
        <li>Step 2<br>處理訂單</li>
        <li>Step 3<br>撿貨</li>
        <li>Step 4<br>配送</li>
      </ul>
    </div>
    <img src="/img/deliveryrule.png" alt="delivery">
  </div>
</template>
<script>
export default{
  data() {
    return {
      
    }
  },
  computed:{
  
  }
}
</script>

<style lang="scss" scoped>

.delivery{
  margin: 30px auto;
  text-align: center;
  h1{
    font-family: 'MyCustomFont', sans-serif;
    margin: 20px auto;
    position: relative;
    &::after{
      content: "";
      display: inline-block;
      border: 2px solid red;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      position: absolute;
      bottom: -10px; 
      left: 57%;
      z-index: -10;
    }
  }
  .step ul{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
    li{
      line-height: 1.5;
      width: 130px;
      height: 130px;
      border-radius: 50%;
      background-color: #C9E0CE;
      align-content: center;
      margin: auto 50px;
      position: relative;
    }
    li + li::before{
        content: "";
        position: absolute;
        width: 150px;
        height: 5px;
        left: -120px;
        top: 0;
        bottom: 0;
        margin: auto;
        background-color: #C9E0CE;
      }
  }
  img{
    margin: 40px auto;
    vertical-align: baseline;
  }
}
</style>
