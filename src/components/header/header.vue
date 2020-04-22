<template>
  <div id="app">
    <el-header>
      <el-menu :default-active="$route.path" router class="el-menu-demo" mode="horizontal" text-color="#999"
               active-text-color="#ffd04b">
        <el-menu-item index="/">
          <div class='logo'/>
        </el-menu-item>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/classification">分类</el-menu-item>
        <el-menu-item index="/hot">热门文章</el-menu-item>
        <el-menu-item index="/msgBoard">留言板</el-menu-item>
        <el-menu-item index="/myself">个人中心</el-menu-item>
        <div class='searchBar'>
          <input type="text" placeholder="搜索"/>
          <div class='search'></div>
        </div>
        <el-menu-item index="/addArticle">
          <div class='el-icon-plus' style="margin-left:20px;"/>
        </el-menu-item>
        <el-menu-item index=""><img class='photo' src="../../assets/img/541349163.jpeg" @click="changeStatus"/>
        </el-menu-item>
        <el-menu-item index="/msg">
          <div class="isMsg">
            <div class='el-icon-bell'/>
            <div class="reddot"/>
          </div>
        </el-menu-item>
      </el-menu>
      <p class="line"></p>
    </el-header>
    <el-main>
      <div class="loginDialog" style="">
        <el-dialog :visible.sync="isShown" style="">
          <login></login>
        </el-dialog>
      </div>
      <router-view/>
    </el-main>
  </div>
</template>

<script>
  import login from '@/view/login'

  export default {
    name: 'App',
    data () {
      return {
        isShown: false,
        activeIndex: '1'
      }
    },
    methods: {
      changeStatus: function () {
        this.isShown = true
      }
    },
    components: {
      login
    }
  }
</script>

<style>
  .logo {
    width: 50px;
    height: 50px;
    background: url('../../../static/logo.png') no-repeat 0 0/50px 50px;
    cursor: auto
  }

  .header div {
    padding: 30px
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .search {
    width: 30px;
    height: 30px;
    background: url('../../assets/img/search.png') no-repeat 0 0/30px 30px
  }

  .searchBar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    border-radius: 30px;
    background: #F4F4F4;
    height: 30px
  }

  input {
    border: 0;
    width: 120px;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
  }

  .photo {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .reddot {
    margin: -15px 0 0 -6px;
    width: 15px;
    height: 15px;
    background: url('../../assets/img/red.png') no-repeat 0px 0px/100% 100%
  }

  .isMsg {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 25px;
  }

  .el-menu-item {
    margin: 0;
  }
</style>
