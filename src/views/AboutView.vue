<template>
  <div class="about">
    <h1>使用在地食材<br/>堅持最好品質。</h1>
    <div class="about-content">
      <img src="/public/img/sea-turtle.png" alt="seaturtle">
      <div class="about-intro">
      <p>
        位於南寮漁港周邊的伴手禮名店─海龜先生，充滿童趣的外觀相當亮眼 使用在地食材，堅持最高品質還有食品衛生   
      </p>
      <p>
        為了讓呈現最原味的綠島並強力推廣綠島觀光與在地特產，將綠島特色食材研發出海草麻糬、火燒餅、鹿肉乾和海燕窩等，每件食品都多添加了一份安心，讓旅客隨時就能品嘗到綠島風味，也能將綠島的好滋味送給親朋好友，歡迎來綠島時，到海龜先生來品嘗海草麻糬、喝杯海燕窩 還有我們綠島的人情味，讓我們一起聊聊綠島的美!  
      </p>
      </div>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .about{
    background-image: url("/public/img/seaturtle-bg.png");
    font-family: 'MyCustomFont', sans-serif;
    margin: auto;
    text-align: center;
    h1{
      text-indent: -4em;
      line-height: 1.5;
    }
    .about-content{
      display: flex;
      justify-content: center;
      margin: auto;
      img{
        object-fit: contain;
        width: 25%;
        margin-right: -60px;
        z-index: 10;
        animation: Move 3s infinite;
      }
      .about-intro{
        background-color: #D0F5FF;
        border-radius: 50% 70% 50% 60%;
        width: 30%;
        margin: 0 20px 20px 20px;
        padding: 130px;
        p{
        text-align: left;
        text-indent: 2em;
        line-height: 1.7;
        font-size: 20px;
        }
      }
    }
  }
  @keyframes Move {
    0% {transform: translate(0,0);}
    50% {transform: translate(0,20px);}
    100% {transform: translate(0,0);}
}
</style>
