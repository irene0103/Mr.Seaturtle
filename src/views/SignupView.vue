<template>
    <div class="signup">
        <form>
            <div class="form-group">
                <label for="account">帳號</label>
                <input type="text" id="account" placeholder="請輸入帳號">
            </div>
            <div class="form-group">
                <label for="password">密碼</label>
                <input type="password" id="password" placeholder="請輸入密碼">
            </div>
            <div class="form-group">
                <label for="password1">確認密碼</label>
                <input type="password" id="password1" placeholder="請再次確認密碼">
            </div>
            <div class="form-group">
                <label for="name">姓名</label>
                <input type="text" id="name" placeholder="請輸入姓名">
            </div>
            <div class="form-group">
                <label for="tel">電話</label>
                <input type="tel" id="tel" placeholder="請輸入電話">
            </div>
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="email" id="email" placeholder="請輸入E-mail">
            </div>
            <div class="address">
                <label for="address">地址</label>
                <div class="address-detail">
                    <div class="address-detail-list">
                        <select name="city" id="city">
                        <option value="disabled">縣市</option>
                        <option>台北市</option>
                        <option>新北市</option>
                    </select>
                    <select name="district" id="district">
                        <option value="disabled">區/市</option>
                        <option>中山區</option>
                        <option>板橋區</option>
                    </select>
                    <select name="street" id="street" class="street">
                        <option value="disabled">路/街道</option>
                        <option>信義路一段</option>
                        <option>中山路</option>
                    </select>
                    </div>
                    <input type="text" id="address" placeholder="請輸入地址">
                </div>
            </div>
        </form>
        <div class="button">
            <button class="cancel">取消</button>
            <button class="submit">提交</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.signup {
    width: 70%;
    border: 2px solid #E1FCD5;
    border-radius: 20px;
    margin: 50px auto;

    form {
        padding: 40px;
        display: flex;
        flex-direction: column;
        // width: 100%;

        .form-group {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 15px 0px;
            width: 100%;

            label {
                width: 10%;
                text-align: right;
                margin-right: 20px;
            }

            input {
                width: 60%;
                border: 1px solid #c3d4c9;
                box-shadow: 2px 2px 0px #e6f2ea;
                border-radius: 20px;
                padding: 12px 10px;
                font-size: 18px;
            }
        }

        .address {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 15px 0px;
            width: 100%;

            label {
                width: 10%;
                text-align: right;
                margin-right: 20px;
            }

            .address-detail {
                width: 62%;
                display: flex;
                flex-direction: column;
                .address-detail-list{
                    display: flex;
                    select {
                        width: 30%;
                        border: 1px solid #c3d4c9;
                        box-shadow: 2px 2px 0px #e6f2ea;
                        border-radius: 20px;
                        padding: 12px 10px;
                        font-size: 18px;
                        margin-bottom: 10px;
                        margin-right: 10px;
                    }
                    .street{
                        width: 35%;
                    }
                }

                input {

                    border: 1px solid #c3d4c9;
                    box-shadow: 2px 2px 0px #e6f2ea;
                    border-radius: 20px;
                    padding: 12px 10px;
                    font-size: 18px;
                }

            }
        }
    }
    .button{
        text-align: center;
        margin: 10px auto;
        .cancel{
            margin: 20px;
            width: 150px;
            border: 1px solid #E1FCD5;
            color: #000000;
            padding: 10px 15px;
            border-radius: 20px;
            align-self: center;
            font-size: 18px;
            cursor: pointer;
        }
        .submit{
            margin: 20px;
            width: 150px;
            background-color: #E1FCD5;
            padding: 10px 15px;
            border-radius: 20px;
            align-self: center;
            font-size: 18px;
            cursor: pointer;
        }
    }

}
</style>
<script>

export default {
}
</script>