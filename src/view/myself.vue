<template>
  <div class='main'>
    <div class="myheader">
      <div class="myphoto"></div>
      <div class="mycontent">
        <div class="name">蒙奇·D·路飞</div>
        <div class="mydesc">我是要成为海贼王的男人！！！</div>
      </div>
      <div class="mylabel">海贼新星</div>
    </div>
    <div class="nav">
      <div class="navContent" v-for="(navContent,index) in navContents" :key="index">
        <div class="navContentNum">{{navContent.num}}</div>
        <div class="navContentName">{{navContent.name}}</div>
      </div>
    </div>
    <div class="nav2">
      <div class="nav2_item" v-for="(nav2Item,index) in nav2Items" :key="index">
        <img :src="nav2Item.img"/>
        <div class="nav2_item_name">{{nav2Item.name}}</div>
        <div class="nav2_item_content">
          <div class="nav2_item_num">{{nav2Item.num}}</div>
          <div class="nav2_item_next"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        navContents: [{ num: '0', name: '收藏' }, { num: '0', name: '发布' }, { num: '0', name: '关注' }, {
          num: '0',
          name: '粉丝'
        }],
        nav2Items: [{
          img: require('../assets/img/myagree.png'),
          name: '我的赞',
          num: '666'
        }, {
          img: require('../assets/img/myscore.png'),
          name: '我的积分',
          num: '666'
        }, {
          img: require('../assets/img/useback.png'),
          name: '用户反馈',
          num: ''
        }, { img: require('../assets/img/setting.png'), name: '设置', num: '' }]
      }
    }
  }
</script>
<style scoped>
  .el-dialog__body {
    color: #000 !important;
  }

  .main {
    background: #fafafa;
    width: 100%;
    height: 100vh;
  }

  .myheader {
    width: 100%;
    height: 30%;
    background: url('../assets/img/myBg.png') no-repeat 0 0/100% 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 12%;
    border: none
  }

  .header div {
    padding: 0
  }

  .myphoto {
    margin-left: 30px;
    width: 70px;
    height: 70px;
    border: 1px solid #fff;
    border-radius: 50%;
    background: url('../assets/img/541349162.jpeg') no-repeat 0/100%;
  }

  .mycontent {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 0px 0 30px;
    width: 76%;
  }

  .name {
    color: #fff;
    font-weight: 600;
    font-size: 18px;
  }

  .mydesc {
    color: #AEAEAE;
    font-size: 13px;
  }

  .mylabel {
    color: #fff;
    font-size: 14px;
    border: 1px solid #fff;
    border-radius: 5px;
  }

  .mylabel[data-v-57195d4e] {
    padding: 5px;
  }

  .nav {
    width: 100%;
    height: 10%;
    /* border: 1px solid #ccc; */
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: #fff;
    padding: 1.5% 0;
  }

  .navContent {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .navContentNum {
    font-size: 18px;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-style: italic
  }

  .navContentName {
    font-size: 12px;
  }

  .nav2 {
    width: 100%;
    margin-top: 10px;
  }

  .nav2_item, .nav2_item_content {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .nav2_item {
    width: 100%;
    background: #fff;
    padding: 10px;
    position: relative;
    margin-bottom: 5px;
    cursor: pointer;
  }

  .nav2_item img {
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }

  .nav2_item_next {
    width: 20px;
    height: 20px;
    background: url('../assets/img/next.png') no-repeat 0/100%
  }

  .nav2_item_content {
    position: absolute;
    right: 20px;
  }

  .nav2_item_num {
    color: #999;
    margin: 0 20px;
  }
</style>
