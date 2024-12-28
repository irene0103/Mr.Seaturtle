<template>
  <div class="about">
    <div class="about-banner">
      <img src="/img/about-banner.png" alt="aboutbanner">
      <h2>關於我們<br />
        <hr width="20%" color="#ffffff">About Us
      </h2>
    </div>
    <h1>使用在地食材 堅持最好品質。</h1>
    <div class="about-content">
      <div class="about-pic">
        <img src="/img/sea-turtle.png" alt="seaturtle">
      </div>
      <div class="about-intro">
        <p>海龜先生綠島名產店的品牌故事源於一位熱愛海洋與當地文化的年輕人。他在綠島這個自然寶庫中成長，從小就對這片湛藍的海域充滿熱愛。</p>
        <p>隨著旅遊業的發展，他發現許多遊客來訪後，希望能帶回當地獨特的風味和回憶。</p>
        <p>因此，海龜先生名產店誕生，秉持著尊重環境、保護海洋的理念，精選綠島特有的天然食材，製作健康、美味的伴手禮。</p>
        <p>每件產品都融入了大海的靈感與綠島的文化，讓顧客在享用美食的同時，也能感受到對這片土地的熱愛與守護。海龜先生致力於推廣永續經營，讓綠島的美好長存。 </p>


      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  margin:auto;
  text-align: center;

  .about-banner {
    position: relative;

    img {
      width: 100%;
      margin: auto;
    }

    h2 {
      position: absolute;
      bottom: 15px;
      right: 0px;
      left: 0px;
      color: #ffffff;

    }
  }

  h1 {
    font-family: 'MyCustomFont', sans-serif;
    margin: 50px auto;
  }

  .about-content {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px auto 100px auto;
    background-color: #C9E0CE;

    .about-pic {
      width: 40%;
      background-color: #ffffff86;
      background-image: url(/img/seaturtle-bg.png);
      position: relative;

      img {
        object-fit: contain;
        width: 70%;
        z-index: 10;
        position: absolute;
        bottom: -80px;
        left: 50px;
        animation: Move 3s infinite;
      }
    }

    .about-intro {
      width: 60%;
      padding: 50px;

      p {
        text-align: left;
        text-indent: 2em;
        line-height: 1.7;
        font-size: 20px;
      }
    }
  }
}

@keyframes Move {
  0% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(0, 20px);
  }

  100% {
    transform: translate(0, 0);
  }
}
</style>
