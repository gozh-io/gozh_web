<template>
  <el-menu :default-active="$route.path"
           class="el-menu-demo" mode="horizontal" router
           text-color="#C5C6C8" background-color="#474A4F" active-text-color="#F9E2B7" @select="handleSelect">
      <el-menu-item index="/list">技术分享</el-menu-item>
      <el-menu-item index="/documents">技术翻译</el-menu-item>
      <el-menu-item index="3">综合文章</el-menu-item>
      <el-menu-item index="/courses">中文教程</el-menu-item>
      <el-submenu index="5">
        <template slot="title"><i class="el-icon-more"></i></template>
        <el-menu-item index="/user/sad">个人中心</el-menu-item>
        <el-menu-item index="/create">提个问题</el-menu-item>
        <el-menu-item index="/create">发布文章</el-menu-item>
      </el-submenu>
      <el-menu-item index="">
        <el-input
          placeholder="请输入搜索的内容"
          suffix-icon="el-icon-search"
          v-model="search">
        </el-input>
        <el-button type="primary" round>搜索</el-button>
      </el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "navber",
    props: ['activeTab'],
    data() {
      return {
        search: ''
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },

      userCenter() {
        this.$router.push('/user/sad')
      },
      publish() {
        this.$router.push('create')
      }
    },

  }

</script>

<style scoped>
  .tab{
    margin: 0 auto;
    width: 300px;
    background-color: rgba(0, 0, 0, 0);
  }
</style>
