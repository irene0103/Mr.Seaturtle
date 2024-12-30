<template>
    <div class="review" v-for="item in bestReview" :key="item">
      <div class="info">
          <img :src="item.pic" :alt="item.name">
        <div class="info-content">
          <p class="name">{{ item.name }}</p>
          <p class="date">{{ item.date }}</p>
        </div>
      </div>
      <div class="rating">
        <span v-for="star in Array(item.rate).fill(0)" :key="star" class="star-icon"><i class="fa-solid fa-star" style="color: #FFD43B;"></i></span>
        <span v-for="star in Array(5 - item.rate).fill(0)" :key="star" class="star-icon empty"><i class="fa-regular fa-star" style="color: #FFD43B;"></i></span>
      </div>
      <div class="review-comment">
        <p class="comments">{{ item.comments }}</p>
      </div>
    </div>
  </template>
  <style lang="scss" scoped>
    .review{
        width: 190px;
        box-shadow: 3px 4px 7px #0000003d;
        border-radius: 10px;
        padding: 20px;
        margin:20px;
        display: flex;
        flex-direction: column;
        .info{
          display: flex;
          .info-content{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            margin-left: 15px;
            line-height: 1.5;
          }

        }
        .rating{
          align-content: flex-start;
          text-align: left;
          margin: 10px 0px;
        }
        .review-comment{
          text-align: left;
          text-indent: 1.5em;
          line-height: 1.3;
        }
        
    }
  </style>
  <script>
  export default {
    data() {
      return {
        bestReview:[
            {
            pic:new URL('/img/people1.png',import.meta.url).href,
            name:'Theresa Webb',
            date:'2 weeks  ago',
            rate:3,
            comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            },
            {
            pic:new URL('/img/people1.png',import.meta.url).href,
            name:'Theresa Webb',
            date:'2 weeks  ago',
            rate:4,
            comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            },
            {
            pic:new URL('/img/people1.png',import.meta.url).href,
            name:'Theresa Webb',
            date:'2 weeks  ago',
            rate:5,
            comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            },
            {
            pic:new URL('/img/people1.png',import.meta.url).href,
            name:'Theresa Webb',
            date:'2 weeks  ago',
            rate:3,
            comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
            },
        ]
      };
    },
    methods: {
    },
    
  };
  </script>
  