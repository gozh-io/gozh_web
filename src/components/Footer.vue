<template>
  <el-row :gutter=36 class="footer-bac">
    <el-col :span="12">
      <div class="footer">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  GOZH是一个开源的社区，社区的建设都是技术类免费贡献自己的时间去设计和开发的，我们致力于打造一个活跃度高的，能真正解决问题的，高质量的Golang中文社区。这里需要你的加入为社区贡献你的一份力量。</p>
        <div class="icon">
          <a href=""><font-awesome-icon :icon="['fab','github']"/></a>
          <a href=""><font-awesome-icon :icon="['fab','weixin']"/></a>
          <a href=""><font-awesome-icon :icon="['fab','weibo']"/></a>
        </div>
        <p>Designed by <span>❤</span>
          <a href="">Acorns</a> <span>❤</span>
          <a href="">冷</a> <span>❤</span>
          <a href="">大嘴的候</a>
        </p>
      </div>
    </el-col>
    <el-col :span="4">
      <h2>赞助商</h2>
    </el-col>
    <el-col :span="4">
      <h2>信息统计</h2>
    </el-col>
    <el-col :span="4">
      <h2>其他信息</h2>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "my-footer"
    }
</script>

<style scoped>
  h2{
    color: #8A8A8A;
  }
  .footer{
    margin: 0 0 0 20px;
    text-align: left;
    font-size: 12px;
    color: #8A8A8A;
  }
  .footer span{
    color: #f4645f;
  }
  .footer a{
    color: #8A8A8A;
  }
  .footer a:hover{
    color: #f4645f;
  }
  .icon{
    font-size: 20px;
  }
  .footer-bac{
    background: #fff;
  }
</style>
