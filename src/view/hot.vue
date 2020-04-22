<template>
  <div class='main'>
    <div class='title'>
      <img class='title_img' src="../assets/img/hot.png"/>
      <h2 class='title_class'>热门</h2>
      <div class='title_text'>海贼王我当定了！！！</div>
    </div>
    <div class="hot_contents">
      <div class="hot_content">
        <div class="hot_content_t">
          <div class="hot_content_title">
            <div class='h5'>热门文章</div>
            <div class='h6'>排行榜</div>
          </div>
        </div>
        <div class="hot_items" v-for="(title,index) in titles" :key="index">
          <div class="hot_item">
            <div class="hot_item_title" @click="articleDesc(index)">{{title.name}}</div>
            <div class="hot_item_title_r">
              <div class="hot_item_time">{{title.time}}</div>
              <div class="hot_item_time_img">
                <img :src="title.img"/>
                <div class="">{{index+1}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        titles: [{ name: '储阿生', time: '2020年4月20日', img: require('../assets/img/star-o.png') },
          { name: '储阿生', time: '2020年4月20日', img: require('../assets/img/star-y.png') },
          { name: '储阿生', time: '2020年4月20日', img: require('../assets/img/star-b.png') },
          { name: '储阿生', time: '2020年4月20日', img: require('../assets/img/star-m.png') },
          { name: '储阿生', time: '2020年4月20日', img: require('../assets/img/star-m.png') }
        ]
      }
    },
    methods: {
      articleDesc (index) {
        console.log(index)
        this.$router.push({ path: '/articleDesc' })
      }
    }
  }
</script>
<style scoped>
  .main {
    padding: 0 5%;
    width: 100%;
    height: 120vh;
  }

  .title {
    width: 100%;
    height: 100px;
    background: #6ECBF9;
    border-radius: 5px;
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #fff;
    padding: 0 30px;
    position: relative;
  }

  .title_img {
    width: 35px;
    height: 35px;
    margin: 0 10px;
  }

  .title_text {
    position: absolute;
    right: 30px;
  }

  .title div {
    margin: 0 10px
  }

  .hot_contents {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80%;
    margin: 30px 0;
  }

  .hot_content {
    width: 90%;
    height: 100%;
    background: #F7F7F7;
    border-radius: 5px;
    text-align: center;
  }

  .hot_content_t, .hot_items {
    width: 100%;
  }

  .hot_item_time_img {
    width: 35px;
    height: 35px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 100px;
  }

  .hot_item_time_img div {
    position: absolute;
    color: #fff;
    font-size: 14px;
  }

  .hot_item_time_img img {
    width: 100%;
    height: 100%;
  }

  .hot_item {
    height: 60px;
    width: 86%;
    padding: 10px;
    border-bottom: 1px solid #eee;
    position: relative;
  }

  .hot_item_title {
    position: absolute;
    left: 0;
    font-size: 14px;
    color: #0078BD;
    cursor: pointer;
  }

  .hot_item_time {
    color: #888;
    font-size: 14px;
  }

  .hot_item_title_r {
    position: absolute;
    right: 0;
  }

  .hot_content_t, .hot_items, .hot_item, .hot_item_title_r {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .hot_content_title {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    padding: 20px 30px;
    border-bottom: 1px solid #EEEEEE;
    height: 50px;
    width: 90%;
  }

  .hot_content_title .h5 {
    position: absolute;
    left: 0px;
  }

  .hot_content_title .h6 {
    position: absolute;
    right: 10px;
  }

  .h5 {
    font-weight: normal;
  }
</style>
