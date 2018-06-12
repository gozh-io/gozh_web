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
          <el-row :gutter=36>
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
          </el-row>
          <el-row :gutter=36>
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
      <!--推荐列表-->
      <div class="demo-menu">
        <div class="right-content">
          <el-tabs v-model="activeTabR" type="card">
            <el-tab-pane label="最新" name="tab4">
              aaa
            </el-tab-pane>
            <el-tab-pane label="最热" name="tab5">配置管理</el-tab-pane>
            <el-tab-pane label="更多" name="tab6">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <mu-paper class="demo-menu" :zDepth="2">
        <div class="right-content">
          <mu-tabs :value="activeTabR" @change="handleTabChangeR">
            <mu-tab value="tab4" title="最新"/>
            <mu-tab value="tab5" title="最热"/>
            <mu-tab value="tab6" title="更多"/>
          </mu-tabs>
          <div class="right-list">
            <mu-list-item title="" disabled>
              <mu-avatar slot="left" src="http://www.muse-ui.org/images/uicon.jpg" :size="30"/>
              <a href=""><p>我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影...</p></a>
              <span class="right-icon">5小时前 </span>
              <span class="right-icon"><mu-icon value="favorite" :size="18"/>2</span>
              <span class="right-icon"><mu-icon value="insert_comment" :size="18"/>23</span>
            </mu-list-item>
            <mu-list-item title="" disabled>
              <mu-avatar slot="left" src="http://www.muse-ui.org/images/uicon.jpg" :size="30"/>
              <a href=""><p>我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影...</p></a>
              <span class="right-icon">5小时前 </span>
              <span class="right-icon"><mu-icon value="favorite" :size="18"/>2</span>
              <span class="right-icon"><mu-icon value="insert_comment" :size="18"/>23</span>
            </mu-list-item>
          </div>
        </div>
      </mu-paper>
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
  export default {
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
    }
  }
</script>

<style scoped>
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

  .right-icon {
    font-size: 10px;
    color: #cccccc;
  }

  .right-icon :hover {
    color: #DB6862;
  }

  .right-content {
    text-align: center;
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
</style>
