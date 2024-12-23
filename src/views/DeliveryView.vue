<template>
  <div class="delivery">
    <h1>運送方式</h1>
    <img src="/public/img/deliveryrule.png" alt="delivery">
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
  font-family: 'MyCustomFont', sans-serif;
  margin: auto;
  text-align: center;
  h1{
    margin: 20px auto;
    font-size: 50px;
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
  img{
    margin: 40px auto;
    vertical-align: baseline;
  }
}
</style>
