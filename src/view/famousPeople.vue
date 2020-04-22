<template>
  <div class='main'>
    <el-dialog :visible.sync="showScore" title="人物简介">
      <peopleDesc/>
    </el-dialog>
    <!-- ... -->
    <div class="hot_contents">
      <div class="hot_content">
        <div class="hot_content_t">
          <div class="hot_content_title">
            <div class='h5'>名人榜</div>
            <div class='h6'>排名不分先后</div>
          </div>
        </div>
        <div class="hot_items" v-for="(title,index) in titles" :key="index">
          <div class="hot_item">
            <div class="hot_item_p">
              <img :src="title.photo"/>
              <div class="hot_item_title" @click="famous(index)">{{title.name}}</div>
            </div>
            <div class="hot_item_title_r">
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
  import peopleDesc from '@/components/peopleDesc'

  export default {
    data () {
      return {
        showScore: false,
        titles: [{
          name: '罗杰',
          img: require('../assets/img/star-o.png'),
          photo: require('../assets/img/541349163.jpeg')
        },
          { name: '香克斯', img: require('../assets/img/star-y.png'), photo: require('../assets/img/541349163.jpeg') },
          { name: '白胡子', img: require('../assets/img/star-b.png'), photo: require('../assets/img/541349163.jpeg') },
          { name: 'big-mom', img: require('../assets/img/star-m.png'), photo: require('../assets/img/541349163.jpeg') },
          { name: '凯多', img: require('../assets/img/star-m.png'), photo: require('../assets/img/541349163.jpeg') }
        ]
      }
    },
    components: {
      peopleDesc
    },
    methods: {
      famous (index) {
        this.showScore = true
      }
    }
  }
</script>
<style scoped>
  .main {
    width: 100%;
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

  .hot_item img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    /* margin-right: 15px; */
  }

  .hot_item_time_img {
    position: absolute;
    right: 20px;
    width: 35px;
    height: 35px;
    /* border: 1px solid #ccc; */
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

  .hot_item_p {
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .hot_item_title {
    font-size: 14px;
    color: #0078BD;
    cursor: pointer;
    margin-left: 15px;
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
