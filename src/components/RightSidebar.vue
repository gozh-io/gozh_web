<template>
  <el-col>
    <div class="demo-menu-container">
      <!--个人简介-->
      <div v-if="is_article" class="demo-menu" :zDepth="2">
        <div class="right-content">
          <div class="right-title">
            <span>作者：Acorns</span>
          </div>
          <span class="profile">
            <img class="image" src="../assets/images/avater.png">
          </span>
          <div class="profile"><span>男</span></div>
          <div class="profile"><span class="btn btn-success">身份</span></div>
          <div class="profile"><span>A Life-long learner.</span></div>
          <div class="profile">
            <el-tag type="info" size="medium" hit>
              <i class="gozh-local"></i>
              北京
            </el-tag>
          </div>
          <div class="profile">
            <el-button icon="gozh-add" class="profile-button profile-button-follow"> 他关注</el-button>
            <el-button icon="gozh-insertcomment" class="profile-button"> 发私信</el-button>
          </div>
        </div>
      </div>
      <!--功能区域-->
      <div class="demo-menu">
        <div class="right-content">
          <el-row :gutter=12>
            <el-col :span="12">
              <el-button
                @click="publish"
                icon="gozh-ic_record_voice_over"
                class="right-button">
                发起讨论
              </el-button>
            </el-col>
            <el-col :span="12">
              <el-button
                @click="publish"
                icon="gozh-edit"
                class="right-button">
                发布文章
              </el-button>
            </el-col>
            <el-col :span="12">
              <el-button
                icon="gozh-help"
                class="right-button">
                提个问题
              </el-button>
            </el-col>
            <el-col :span="12">
              <el-button
                icon="gozh-Share"
                class="right-button">
                分享此站
              </el-button>
            </el-col>
          </el-row>
        </div>
      </div>

      <div class="demo-menu">
        <el-container>
          <el-header class="right-header">
            <el-menu 
              default-active="1"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#F56C6C"
              mode="horizontal"
              >
              <el-menu-item index="1">最新</el-menu-item>
              <el-menu-item index="2">最热</el-menu-item>
              <el-menu-item index="3">更多</el-menu-item>
            </el-menu>
          </el-header>
          <el-main>
            <div class="right-list">
              <div class="right-list-item">
                <el-row :gutter="24">
                  <el-col :span="6">
                    <img class="avatar" src="../assets/images/avater.png" style="width:100%">
                  </el-col>
                  <el-col :span="18">
                    <a href=""><p>我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影...</p></a>
                    <span class="right-icon">5小时前 </span>
                    <span class="right-icon"><font-awesome-icon icon="heart" size="2x"/>2</span>
                    <span class="right-icon"><font-awesome-icon :icon="icon" size="2x"/>23</span>
                  </el-col>
                </el-row>
              </div>

              <div class="right-list-item">
                <el-row :gutter="24">
                  <el-col :span="6">
                    <img class="avatar" src="../assets/images/avater.png" style="width:100%">
                  </el-col>
                  <el-col :span="18">
                    <a href=""><p>我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影...</p></a>
                    <span class="right-icon">5小时前 </span>
                    <span class="right-icon"><font-awesome-icon icon="heart" size="2x"/>2</span>
                    <span class="right-icon"><font-awesome-icon :icon="icon" size="2x"/>23</span>
                  </el-col>
                </el-row>
              </div>

              <div class="right-list-item">
                <el-row :gutter="24">
                  <el-col :span="6">
                    <img class="avatar" src="../assets/images/avater.png" style="width:100%">
                  </el-col>
                  <el-col :span="18">
                    <a href=""><p>我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影...</p></a>
                    <span class="right-icon">5小时前 </span>
                    <span class="right-icon"><font-awesome-icon icon="heart" size="2x"/>2</span>
                    <span class="right-icon"><font-awesome-icon :icon="icon" size="2x"/>23</span>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-main>
        </el-container>        
      </div>
      
      <!--推荐招聘-->
      <div class="demo-menu">
        <div class="right-content">
          <div class="right-title">
            <span>推荐招聘</span>
          </div>
          <div class="right-detail">
            <p><a href="">[北京][20K][中国航空]招聘2年以上go语言工程师</a></p>
            <p><a href="">[北京][20K][中国航空]招聘2年以上go语言工程师</a></p>
            <p><a href="">[北京][20K][中国航空]招聘2年以上go语言工程师</a></p>
            <p><a href="">[北京][20K][中国航空]招聘2年以上go语言工程师</a></p>
          </div>
        </div>
      </div>
    </div>
  </el-col>
</template>

<script>
  import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
  import { faCommentDots } from '@fortawesome/fontawesome-free-solid'
  export default {
    components: {
      FontAwesomeIcon
    },
    name: "right-sidebar",
    props: ['is_article'],
    data() {
      return {
        activeTabR: 'tab4',
      }
    },
    methods: {
      handleTabChangeR(val) {
        this.activeTabR = val
      },
      publish() {
        this.$router.push('/create')
      }
    },
    computed: {
      icon () {
        return faCommentDots
      }
    },
  }
</script>

<style scoped>
  p {
    padding : 0;
    margin : 0;
  }

  .demo-menu-container {
    max-width: 350px;

  }

  .right-title {
    text-align: center;
    border-bottom: 1px solid #cccccc;
    height: 40px;
  }

  .right-list {
    text-align: left;
  }

  .right-list a {
    color: #000000;
  }

  .right-list a:hover {
    color: #DB6862;
  }

  .right-list-item {
    padding-bottom: 20px;
  }

  .right-icon {
    font-size: 10px;
    color: #cccccc;
  }

  .right-icon :hover {
    color: #DB6862;
  }

  .right-content {
    text-align: center;
    padding : 10px 10px
  }

  .right-header{
    padding: 0px
  }

  .right-detail {
    font-size: 13px;
    color: #737373;
    margin: 10px 0 20px 0;
    padding: 10px 0 20px 0;
  }

  .right-detail a:hover {
    color: #DB6862;
  }

  .right-detail a {
    color: #737373;
  }

  .right-title span {
    color: #cccccc;
    line-height: 40px;
    margin-left: 10px;
    font-size: 14px;
  }

  .right-button {
    margin: 5px 0px
  }


  .profile {
    margin: 7px 0 7px 0;
    padding: 5px 0 5px 0;
  }

  .profile-button {
    margin: 3px 0 5px 0;
    width: 80%;
  }

  .profile-button-follow {
    background: #DB6661;
  }

  .demo-menu {
    margin: 16px 32px 16px 0;
    background-color: white;
    text-align: center;
    box-sizing: border-box;
    display: block;
    color: #474a4f;
    box-shadow: 0 3px 10px rgba(0, 0, 0, .156863), 0 3px 10px rgba(0, 0, 0, .227451);

  }

  .btn {
    background: #ccc;
    padding: 5px;
    color: white;
    font-size: 14px;
  }

  .btn-success {
    background: #5cb85c;
  }

  .image {
    margin: 3px;
    width: 80px;
    height: 80px;
    border-radius: 50px;
  }

  .avatar{
    border-radius: 50%;
  }
</style>
