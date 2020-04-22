<template id='login'>
  <div class='main'>
    <div class="" v-if='showRegister'>
      <div class="register_l" v-if='showRegister'>
        <div class="register">
          <div class="userName">
            <div class="userNameImg"></div>
            <input placeholder="请输入用户名" id='userName'/>
            <div class="clear" @click="clear1(1)"></div>
          </div>
          <div class="userName">
            <div class="userNameImg"></div>
            <input placeholder="请输入密码" type="password" id='password'/>
            <div class="clear" @click="clear1(2)"></div>
          </div>
          <div class="submit">
            <div class="buttonImg"></div>
            <div class="registerBtn">一键注册</div>
            /
            <div class="backLogin" @click="isLogin()">返回登录</div>
          </div>
        </div>
        <div class="register_bg"></div>
      </div>
    </div>
    <div class="login_l" v-if='showLogin'>
      <div class="login">
        <div class="userName">
          <div class="userNameImg"></div>
          <input placeholder="请输入用户名" id='userName'/>
          <div class="clear" @click="clear(1)"></div>
        </div>
        <div class="userName">
          <div class="userNameImg"></div>
          <input placeholder="请输入密码" type="password" id='password'/>
          <div class="clear" @click="clear(2)"></div>
        </div>
        <div class="checkbox">
          <input type="checkbox" id="checkbox1"/>
          <div class="">记住我</div>
          <div class="checkbox_f">忘记密码？</div>
        </div>
        <div class="submit">
          <div class="buttonImg"></div>
          <input type="button" value="一键开启航海"/>/
          <div class="backLogin" @click="isRegister()">注册</div>
        </div>

      </div>
      <div class="login_bg"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data () {
      return {
        showLogin: true,
        showRegister: false
      }
    },
    methods: {
      clear: function (id) {
        if (id === 1) {
          $('#userName').val('')
        } else if (id === 2) {
          $('#password').val('')
        }
      },
      isRegister: function () {
        this.showLogin = false
        this.showRegister = true
      },
      isLogin: function () {
        this.showLogin = true
        this.showRegister = false
      }
    }
  }
</script>
<style scoped>
  .main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .login {
    width: 300px;
    height: 380px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 3px 5px 3px #888;
    padding: 30px;
  }

  .login_bg {
    margin: -100px 0 0 250px;
    width: 100px;
    height: 100px;
    /* border: 1px solid #ccc; */
    background: url('../assets/img/1d001e61f392a0d1d1ad4e6f8c555e4c.png') no-repeat -18px -20px/135px 130px;
  }

  .userName {
    border-bottom: 1px solid #000;
    text-align: start;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
  }

  .userName input {
    width: 90%;
    margin: 5px;
  }

  .clear {
    width: 15px;
    height: 15px;
    background: url('../assets/img/clear.png') no-repeat 0 0 /15px 15px;
    cursor: pointer;
  }

  input[type="checkbox"] {
    width: 14px;
    height: 14px;
    background-color: #fff;
    -webkit-appearance: none;
    border: 1px solid #000;
    border-radius: 2px;
    outline: none;
    cursor: pointer;
  }

  input[type="checkbox"]:checked {
    background: url("../assets/img/right.png") no-repeat center/100% 100%;
  }

  .checkbox, .submit {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 13px;
    margin: 20px 0;
    position: relative;
  }

  .submit div {
    cursor: pointer;
  }

  .submit {
    justify-content: center;
    margin-top: 50px
  }

  .checkbox_f {
    position: absolute;
    right: 0px;
    cursor: pointer;
  }

  .buttonImg {
    width: 25px;
    height: 25px;
    background: url('../assets/img/boot.png') no-repeat 0 0 /25px 25px;
    cursor: pointer;
  }

  .register {
    width: 300px;
    height: 380px;
    background: #fff;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-shadow: 3px 5px 3px #888;
    padding: 30px;
  }

  .register_bg {
    margin: -145px 0 0 -60px;
    width: 140px;
    height: 150px;
    /* border: 1px solid #ccc; */
    background: url('../assets/img/b295b86884487dec67d1be7810f12ccc.png') no-repeat 0px 0px/140px 150px;
  }

  .registerBtn {
    margin: 0 20px;
    font-size: 16px;
  }

  .backLogin {
    color: #999;
  }
</style>
