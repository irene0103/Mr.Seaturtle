<template>
<div class="list" v-for="category in products" :key="category.category">
    <div class="product" v-for="item in category.items" :key="item.id">
        <img :src="item.pic" :alt="item.title">
        <h5>{{ item.title }}</h5>
        <p>{{ item.price }}</p>
        <div class="check-button">
            <button class="check" @click="openBox(item.id)"><i class="fa-solid fa-magnifying-glass"></i>查看</button>
            <button class="add-cart"><i class="fa-solid fa-cart-shopping"></i>加入購物車</button>
        </div>
    </div>
</div>
    
 <!-- Popup -->
 <div class="popup-overlay" v-if="isOpen" @click="close">
    <div class="popup" :class="{'show-lightbox':isOpen}" @click.stop>
            <button class="close" @click="close">
                <i class="fa-solid fa-xmark"></i>
            </button>
            <div class="popup-intro">
                <div class="popup-img">
                    <img :src="popupData.pic" :alt="popupData.title">
                </div>
                <div class="popup-info">
                    <h5>{{ popupData.title }}</h5>
                    <p>{{ popupData.intro }}</p>
                    <input type="number" min="1" value="1">
                    <p>{{ popupData.price }}</p>
                    <button class="add-cart"><i class="fa-solid fa-cart-shopping"></i>加入購物車</button>
                </div>
            </div>
            <hr />
            <div class="popup-content">
                <h6>成分介紹</h6>
                <img :src="popupData.content" :alt="popupData.title">
            </div>
        </div>
    </div>

</template>
<style lang="scss" scoped>
.list{
    display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content:center;
   .product {
    border: 1.8px solid #b4b4b4;
    box-shadow: 3px 4px #0000001d;
    border-radius: 10px;
    padding: 20px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    text-align: center;

    img {
        width: 100%;
        height: 200px;
        object-fit: contain;
        vertical-align: bottom;
    }
    h5 {
        margin: 10px auto;
    }

    .check-button {
        display: flex;
        justify-content: space-evenly;
        margin-top: 15px;

        button {
            border-radius: 30px;
            padding: 5px 10px;
            cursor: pointer;

            i {
                margin-right: 5px;
            }
        }

        .check {
            background-color: #99cde4;

        }

        .add-cart {
            background-color: #8fdf9f;
        }
    }
}
}
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
//   background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup {
    display: none;
    border: 1.8px solid #b4b4b4;
    box-shadow: 3px 4px #0000001d;
    border-radius: 10px;
    padding: 20px;
    position: fixed;
    left: 0;
    right:0;
    top:110px;
    bottom:0;
    margin: auto;
    width: 50%;
    height: 70vh;
    background-color: #fff;
    overflow-x: scroll;
    z-index: 1001;
    .close {
        margin-left: auto;
        cursor: pointer;
        position: absolute;
        right: 10px;
        top: 10px;
    }


    .popup-intro {
        display: flex;
        .popup-img {
            width: 55%;
            img {
                width: 100%;
                height: 400px;
                object-fit: contain;
                vertical-align: baseline;
            }
        }
        .popup-info {
            width: 40%;
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            h5 {
                font-size: 30px;
            }
            p {
                line-height: 1.5;
            }
    
            input {
                padding: 5px;
                text-align: center;
                border: 1.8px solid #dfdfdf;
                border-radius: 10px;
            }
            .add-cart {
                background-color: #8fdf9f;
                border-radius: 30px;
                padding: 5px 10px;
                cursor: pointer;
                i {
                    margin-right: 5px;
                }
            }
        }
    }
    .popup-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img{
            width: 70%;
            vertical-align: bottom;
            object-fit: contain;
        }
    }
}



.show-lightbox{
    display: block;
}
</style>
<script>

export default {
    data() {
        return {
            activeId: NaN,
        };
    },
    props:['products'],
    methods: {
        openBox(id){
            this.activeId=id;
            
        },
        close() {
            this.activeId = NaN;
        },
        
        
    },
    computed: {
        isOpen() {
            return !isNaN(this.activeId);
        },
        popupData() {
        const category = this.products.find(n =>
            n.items.some(item => item.id === this.activeId)
        );
        
        if (category) {
            return category.items.find(item => item.id === this.activeId) ?? {};
        }
        
        return {}; 
    }
        
    },
};
</script>