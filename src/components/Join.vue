<template>
  <div class="join-container">

    <div id="join-bg">
      <nav-bar></nav-bar>
      <div class="join-form" id="join-from">
        <!--头部注册标识-->
        <div class="join-title">
          注册
        </div>
        <!--输入框-->
        <div class="input">
          <mu-text-field v-model="username" type="text" hint-text="用户名"
          name="username" icon="account_circle" />
          <br/>
          <mu-text-field v-model="email" type="email" hint-text="请输入邮箱地址" icon="email" name="email"/>
          <br/>
          <mu-text-field v-model="password" type="password" hint-text="请输入密码" icon="remove_red_eye"
                         name="password"/>
          <br/>
          <mu-text-field v-model="secondPassword" type="password" hint-text="请再次输入密码" icon="remove_red_eye"
                         name="secondPassword"/>
          <br/>
          <div align="center">
            <!--验证码图片-->
            <img v-bind:src="captchaBase64Img" @click="SetBase64Img" height="60px" width="240px"/>
          </div>
          <mu-text-field v-model="captcha" type="text" hint-text="请输入验证码"
                         name="captcha" icon="keyboard"/>
          <br/>
          <br/>

          <!--按钮-->
          <div style="width: 88px;margin:0px auto;">
            <mu-raised-button class="login-button" label="注册" @click="register"/>
          </div>
          <br/>
        </div>
      </div>
      <my-footer></my-footer>
    </div>
    <!-- 弹出对话框 -->
    <div>
      <mu-dialog :open="registerDialog" title="注册信息">
        {{registerInformation}}
        <mu-flat-button label="确定" slot="actions" primary @click="registerDialogClose"/>
      </mu-dialog>
    </div>
  </div>
</template>

<script>
import NavBar from "./Navber";
import MyFooter from "./Footer";

export default {
  name: "Join",
  components: {
    NavBar,
    MyFooter
  },
  data() {
    return {
      captchaBase64Img: "",
      username: "",
      email: "",
      password: "",
      secondPassword: "",
      captcha: "",
      registerInformation: "",
      registerDialog: false,
      status: -100,
    };
  },
  mounted() {
    this.bgAndFooterLayout();
    this.SetBase64Img();
  },
  methods: {
    bgAndFooterLayout: function() {
      // noinspection UnnecessaryLocalVariableJS
      var height = parseInt(window.innerHeight);
      // noinspection JSValidateTypes
      var panelHeight =
        parseInt(document.getElementById("join-from").clientHeight) + 162;
      // noinspection JSValidateTypes
      if (panelHeight > height) {
        document.getElementById("join-bg").style.height =
          panelHeight + 50 + "px";
      } else {
        document.getElementById("join-bg").style.height = height + "px";
      }
    },
    // 设置验证码图片
    SetBase64Img: function() {
      this.axios
        .get("/api/captcha")
        .then((response) => {
          this.captchaBase64Img = response.data;
        })
        .catch((error) => {
          alert(error);
        });
    },
    // 注册事件方法
    register: function() {
      
      // 检查用户名长度
      if(this.username.length == 0 ||
         this.username.length >= 30) {
        if (this.username.length == 0) {
          this.registerInformation = "请确认是否输入用户名";
        } else if (this.username.length >= 30) {
          this.registerInformation = "用户名太长，最长支持30个字母";
        }
        this.registerDialog = true;
        return;
      }
      // 检查email是否有效
      if(!this.checkEmail(this.email)) {
        this.registerInformation = "邮箱不正确哦";
        this.registerDialog = true;
        return
      }
      // 检查密码长度
      if(this.password.length == 0 ||
         this.username.password >= 30) {
        if (this.password.length == 0) {
          this.registerInformation = "请确认是否输入密码"
        } else if(this.username.password >= 30) {
          this.registerInformation = "密码太长，最长支持30个字母";
        }
        this.registerDialog = true;
        return;
      }
      // 检查两次密码是否一致
      if (this.password != this.secondPassword) {
        this.registerInformation = "两次输入的密码必须一致哦";
        this.registerDialog = true;
        return
      }
      // 检查验证码
      if (this.captcha.length == 0) {
        this.registerInformation = "验证码不能为空哦";
        this.registerDialog = true;
        return
      }

      // post 处理
      var querystring = require('querystring');
      let params = {
        username: this.username,
        password: this.password,
        email: this.email,
        captcha: this.captcha
      };
      this.axios.post("/api/user/signup", querystring.stringify(params)).then(response => {
        if (response.data.status == 0) { // 注册成功
          this.registerInformation = "注册成功,前往登录页面";
        }
        else {
          this.registerInformation = response.data.desc;
        }
        this.status = response.data.status;
        this.registerDialog = true;
      });
    },
    // 关闭对话框
    registerDialogClose: function () {
      this.registerDialog = false;
      if (this.status == 0) { // 注册成功， 跳转到登录页面
        this.$router.push({path: '/login'});
      } else {
        this.SetBase64Img()
      }
    },
    // 检查email
    checkEmail: function (email) {
      const regex = /[0-9a-zA-Z]*@[0-9a-zA-Z]*\.[0-9a-zA-Z]*/gm;
      const str = email;
      let m;
      let ret = false;
      while ((m = regex.exec(str)) !== null) {
          // This is necessary to avoid infinite loops with zero-width matches
          if (m.index === regex.lastIndex) {
              regex.lastIndex++;
          }
          
          // The result can be accessed through the `m`-variable.
          m.forEach((match, groupIndex) => {
            console.log(match == email);
              if(match == email) {
                ret = true;
              }
          });
      }
      return ret;
    }
  }
};
</script>
<style scoped>
body {
  background-color: #e8e8e8;
}

#join-bg {
  background-color: #e8e8e8;
  min-height: 100%;
}

.join-form {
  width: 400px;
  margin: 100px auto 5%;
  background-color: white;
  border-radius: 10px;
}

.join-title {
  /*border: 2px solid black;*/
  margin: auto 0px;
  font-size: 200%;
  text-align: center;
  height: 57px;
  padding-top: 15px;
}

.input {
  width: 80%;
  margin: 0 auto;
}
.demo-flat-button {
  margin: 12px;
}
</style>
