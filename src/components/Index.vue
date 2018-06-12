<template>
  <div class="layout">
    <nav-bar></nav-bar>
        <!--导航-->
    <div class="content">
      <el-container class="body-content">
        <!--notify start-->
        <el-header>
          <!--面包屑导航-->
          <div class="breadcrumb">
            <!--面包屑导航-->
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{'path': '/'}">Home</el-breadcrumb-item>
              <el-breadcrumb-item >VideoGame</el-breadcrumb-item>
              <el-breadcrumb-item>Download</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <el-tag type="danger" size="medium" closable>
            <span>未设置登录密码，请前往 <a href="">修改密码</a> 页面进行设置。设置后将可以在移动设备上使用邮箱登录网站。</span>
          </el-tag>
        </el-header>
        <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <!--notify end-->
        <!--content start-->
         <el-aside>
           <right-sidebar :is_article="true"></right-sidebar>
         </el-aside>
        </el-container>
      </el-container>
    </div>
    <div class="footer">
      <my-footer></my-footer>
      Gozh ©2018 Created by Element-UI VueJS
    </div>
  </div>
</template>

<script>
  import NavBar from './Navber'
  import ArticleList from './ArticleList'
  import RightSidebar from './RightSidebar'
  import MyFooter from './Footer'
  import Courses from  './Courses'
export default {
  name: 'home',
  components: {
    Courses,
    ArticleList,
    RightSidebar,
    NavBar,
    MyFooter
  },
  data () {
    return {
      activeTab: 'tab1',
      activeTabA: 't1',
      activeTabR: 'tab4',
    }
  },
  methods: {

    handleClose () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .body-content {
    margin-left: 10px;
  }

  .layout{
    background-color: rgb(236, 236, 236);
  }

  .content{
    width: 90%;
    margin: 0 auto;
    max-width: 1300px;
  }
  .breadcrumb{
    margin: 10px 0;
  }
  .footer{
    padding: 20px 0;
    text-align: center;
  }

</style>
