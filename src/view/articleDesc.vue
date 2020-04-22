<template>
  <div>
    <div class='article' v-for="(item,index) in items" :key="index">
      <div class='arcitle_title'>
        <img :src="item.img" class='authPhoto' alt="../assets/logo.png"
             onerror="this.src='../assets/logo.png;this.οnerrοr=null'"/>
        <h5>{{item.title}}</h5>
      </div>
      <div class='arcitle_label'>
        <div class=''>热血</div>
        <div class=''>海贼王</div>
        <div class=''>燃</div>
      </div>
      <div>
        <div class='acticle_imgs'><img src="../assets/img/ws.jpg" class='acticle_img'/></div>
        <div class='acticle_time'>
          <div class='acticle_time1'>{{item.time}}</div>
          <div class='acticle_read'>
            <div>阅读 {{item.readNum}}</div>
            <div>赞 {{item.agreeNum}}</div>
          </div>
        </div>
        <div class='acticle_content'>{{item.desc}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: [{
          img: require('../assets/img/541349162.jpeg'),
          title: '传说的武士 罗杰迷上的男人',
          time: '2020-04-20 15:26:58',
          readNum: 2651,
          agreeNum: '1024',
          desc: '和之国光月家族的传人，原将军光月寿喜烧之子，从小就天赋异禀。因惹事不断，被将军断绝关系并逐出花之都。御田游历和之国各个地区，并且征服了和之国的无法地带九里，因此被寿喜烧封为九里大名。其游历期间遇到的人，被御田收为家臣。后随白胡子海贼团出海，与白胡子结义为兄弟，担任第二队队长。后又搭上罗杰海贼团的船，重新游历伟大航路，并到达最终之岛拉夫德鲁，知晓着一切的秘密。'
        }]
      }
    }
  }
</script>
<style scoped>
  .article {
    background: #fff;
    margin-top: 2px;
  }

  .arcitle_title {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .authPhoto {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .acticle_imgs {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .acticle_img {
    width: 46%;
    height: 150px;
  }

  .acticle_content {
    margin: 10px 30px;
  }

  .arcitle_label {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 30px;
  }

  .arcitle_label div {
    font-size: 12px;
    padding: 5px 10px;
    background: #f5f5f5;
    margin: 0 5px;
    border-radius: 5px;
  }

  .acticle_time, .acticle_read {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .acticle_time {
    position: relative;
    padding: 0 30px;
    font-size: 14px;
  }

  .acticle_read {
    position: absolute;
    right: 30px;
  }
</style>
