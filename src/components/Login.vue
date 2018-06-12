<template>
  <div class="login-container">
    <div class="login-bg" id="login-bg">
      <nav-bar></nav-bar>
      <div class="login-form" id="login-from">
        <!--头部登录标识-->
        <div class="login-title">
          Golang中文社区
        </div>
        <br/>
        <br/>
        <!--输入框-->
        <div class="input">
          <el-input
            placeholder="请输入邮箱地址"
            prefix-icon="el-icon-message"
            v-model="email">
          </el-input>
          <br/>
          <br/>
          <br/>
          <el-input
            placeholder="请输入密码"
            type="password"
            prefix-icon="gozh-eye"
            v-model="password">
          </el-input>
          <br/>
          <br/>
          <br/>
          <!--按钮-->
          <el-row>
            <el-col :span="12" :offset="6">
              <div align="center">
                <el-button type="primary" class="login-button" icon="gozh-login" @click="login" round>
                  登录
                </el-button>
              </div>
            </el-col>
          </el-row>
        </div>
        <!--第三方登录   横线、文字处-->
        <div class="sign-in-with-other">
          <span style="white-space:pre;">  </span><span class="line"></span>
          <span style="white-space:pre;">  </span><span class="txt">第三方登录</span>
          <span style="white-space:pre;">  </span><span class="line"></span>
        </div>
        <!--第三方登录按钮-->
        <div align="center">
          <el-button href="#" icon="gozh-github2" circle>
          </el-button>
          <el-button href="#" icon="gozh-weixin" circle>
          </el-button>
          <el-button href="#" icon="gozh-qq-copy" circle>
          </el-button>
      </div>
      </div>
      <my-footer></my-footer>
    </div>

  </div>
</template>

<script>
  import NavBar from './Navber'
  import MyFooter from './Footer'

  export default {
    name: "Login",
    components: {
      NavBar,
      MyFooter
    },
    data() {
      return {
        email: "",
        password: "",
        loginDialog: false,
        loginInformation: "",
        goToIndex: false,
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {
      login : function () {
        // 检测邮箱是否为空
        if(this.email === "")
        {
          this.loginInformation = "请输入邮箱哦";
          this.loginDialog = true;
          return;
        }

        // 检测邮箱是否合法
        if(!this.checkEmail(this.email))
        {
          this.loginInformation = "邮箱不正确哦";
          this.loginDialog = true;
          return;
        }

        // 检测是否输入密码
        if(ths.password == "")
        {
          this.loginInformation = "请输入密码";
          this.loginDialog = true;
          return;
        }

        // 检测密码是否超过限制长度
        if(this.password.length >= 30)
        {
          this.loginInformation = "密码长度不能超过三十";
          this.loginDialog = true;
          return;
        }
        // POST处理
        var querystring = require('querystring');
        let params = {
          email: this.email,
          password: this.password
        };

        this.axios.post("/api/user/signup", querystring.stringify(params)).then((response) => {
          if (response.data.status == 0) { // 注册成功
            this.loginInformation = "登录成功";
            this.goToIndex = true;
          }
          else {
            this.registerInformation = response.data.desc;
          }
          this.registerDialog = true;
        })
        .catch((error) => {
          this.registerInformation = "网络出错";
          this.registerDialog = true;
        });
      }
      ,
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
      },
      loginDialogClose: function () {
        if(this.goToIndex)
        {
          this.$router.push({path: '/list'});
        }
        this.loginDialog = false;
      },
      bgAndFooterLayout: function() {
        let height = parseInt(window.innerHeight);
        let panelHeight = parseInt(document.getElementById("login-from").clientHeight) + 162;
        // noinspection JSValidateTypes
        if (panelHeight > height) {
          document.getElementById("login-bg").style.height = panelHeight + 50 + "px";
        } else {
          document.getElementById("login-bg").style.height = height + "px";
        }
      }
    }
  }

</script>

<style scoped>
  body {
    background-color: #e8e8e8;
  }

  .login-bg {
    background-color: #e8e8e8;
    min-height: 100%;
  }

  .login-form {
    width: 400px;
    margin: 100px auto 5%;
    background-color: white;
    border-radius: 10px;
  }

  .login-title {
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

  .input .login-button {
    /*width:*/
    margin: 0px auto;
  }

  .sign-in-with-other {
    height: 60px;
    line-height: 60px;
    text-align: center;
  }

  .sign-in-with-other .line {
    display: inline-block;
    width: 150px;
    border-top: 1px solid #ccc;
  }

  .sign-in-with-other .txt {
    color: #686868;
    vertical-align: middle;
  }

  .sign-in-with-other-botton {
    width: 154px;
    margin: 0 auto;
  }
</style>
