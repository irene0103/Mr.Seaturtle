<template>
    <div class="login">
        <div class="signup">
            <h4>還沒有帳號嗎?</h4>
            <router-link to="signup"><button>點我註冊</button></router-link>
        </div>
        <div class="login-info">
            <h4>Welcome , 歡迎</h4>
            <input type="account" placeholder="請輸入帳號">
            <input type="password" placeholder="請輸入密碼">
            <button>登入</button>
            <a href="#"><span>忘記密碼?</span></a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .login{
        width: 70%;
        border: 2px solid #E1FCD5;
        border-radius: 20px;
        display: flex;
        margin: 50px auto;
        .signup{
            width: 35%;
            background-color: #E1FCD5;
            border-radius: 18px;
            padding: 30px;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            button{
            margin: 20px auto;
            width: 150px;
            border: 1px solid #ffffff;
            color: #000000;
            padding: 10px 15px;
            border-radius: 20px;
            align-self: center;
            font-size: 18px;
            cursor: pointer;
            &:hover{
                background-color: #fff;
            }
            
            }
        }
        .login-info{
            width: 65%;
            display: flex;
            flex-direction: column;
            padding: 30px;
            justify-content: center;
            input{
            width: 80%;
            border: 1px solid #c3d4c9;
            box-shadow: 2px 2px 0px #e6f2ea;
            border-radius: 20px;
            margin: 15px 0px;
            padding:12px 10px ;
            font-size: 18px;
            }
            button{
            margin: 20px auto;
            width: 150px;
            background-color: #E1FCD5;
            padding: 10px 15px;
            border-radius: 20px;
            align-self: center;
            font-size: 18px;
            cursor: pointer;
            }
            a{
                color: #000000;
                display: inline-block;
                text-align: right;
                text-decoration: underline;
            }
        }
    }
</style>
<script>

</script>