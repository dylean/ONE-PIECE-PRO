<template>
  <div class="main">
    <el-dialog :visible.sync="showScore" title="人物简介">
      <peopleDesc/>
    </el-dialog>
    <div class="navigate">
      <ul>
        <li @click="select(index)" @mouseenter="mouseenter(index)" @mouseleave="leave(index)"
            v-for='(itemTitle,index) in itemTitles' :key='index'
            v-bind:class="{'isActive': itemTitle.isActive,'backadd':  itemTitle.backadd}">
          <img :src="itemTitle.isActive ? require('../assets/img/recommend.png'): require('../assets/img/blueR.png')"/>
          {{itemTitle.name}}
        </li>
      </ul>
    </div>
    <div class="right_main">
      <div class="hot_contents">
        <div class="hot_content">
          <div class="hot_content_t">
            <div class="hot_content_title">
              <div class='h5'>{{title}}</div>
              <div class='h6'>排名不分先后</div>
            </div>
          </div>
          <div class="hot_items" v-for="(title,index) in titles" :key="index">
            <div class="hot_item">
              <div class="hot_item_p">
                <img :src="title.photo" style='cursor:pointer;'/>
                <div class="hot_item_title" @click="famous(index)">{{title.name}}</div>
                <div class='title' @click="articleDesc(index)">破坏性极强！一击必杀的雷鸣八卦！</div>
              </div>
              <div class="title_foot">
                <div class="title_foot_time">{{title.time}}</div>
                <div class="title_foot_content">
                  <div class="title_foot_content_item">
                    <img src="../assets/img/agree.png"/>
                    <div class="">{{title.agree}}</div>
                  </div>
                  <div class="title_foot_content_item">
                    <img src="../assets/img/icon-v.png"/>
                    <div class="">{{title.view}}</div>
                  </div>
                  <div class="title_foot_content_item">
                    <img src="../assets/img/icon-c.png"/>
                    <div class="">{{title.collect}}</div>
                  </div>
                  <div class="title_foot_content_item">
                    <img src="../assets/img/icon-r.png"/>
                    <div class="">{{title.recommend}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="" v-if='isSelected === 0'></div>
      <div class="" v-if='isSelected === 1'></div>
      <div class="" v-if='isSelected === 2'></div>
    </div>
  </div>
</template>
<script>
  import peopleDesc from '@/components/peopleDesc'

  export default {
    data () {
      return {
        isSelected: 0,
        titles: [],
        title: '推荐',
        showScore: false,
        itemTitles: [{ name: '推荐', isActive: false, backadd: false }, {
          name: '新帖',
          isActive: false,
          backadd: false
        }, { name: '休闲一刻', isActive: false, backadd: false }],
        titles0: [{
          name: '罗杰',
          photo: require('../assets/img/541349163.jpeg'),
          agree: 1024,
          view: 2048,
          collect: 666,
          recommend: 888,
          time: '2020-04-08'
        },
          {
            name: '罗杰',
            photo: require('../assets/img/541349163.jpeg'),
            agree: 1024,
            view: 2048,
            collect: 666,
            recommend: 888,
            time: '2020-04-08'
          },
          {
            name: '罗杰',
            photo: require('../assets/img/541349163.jpeg'),
            agree: 1024,
            view: 2048,
            collect: 666,
            recommend: 888,
            time: '2020-04-08'
          },
          {
            name: '罗杰',
            photo: require('../assets/img/541349163.jpeg'),
            agree: 1024,
            view: 2048,
            collect: 666,
            recommend: 888,
            time: '2020-04-08'
          },
          {
            name: '罗杰',
            photo: require('../assets/img/541349163.jpeg'),
            agree: 1024,
            view: 2048,
            collect: 666,
            recommend: 888,
            time: '2020-04-08'
          }
        ],
        titles1: [{
          name: '香克斯',
          photo: require('../assets/img/541349163.jpeg'),
          agree: 1024,
          view: 2048,
          collect: 666,
          recommend: 888,
          time: '2020-04-08'
        },
          {
            name: '香克斯',
            photo: require('../assets/img/541349163.jpeg'),
            agree: 1024,
            view: 2048,
            collect: 666,
            recommend: 888,
            time: '2020-04-08'
          },
          {
            name: '香克斯',
            photo: require('../assets/img/541349163.jpeg'),
            agree: 1024,
            view: 2048,
            collect: 666,
            recommend: 888,
            time: '2020-04-08'
          },
          {
            name: '香克斯',
            photo: require('../assets/img/541349163.jpeg'),
            agree: 1024,
            view: 2048,
            collect: 666,
            recommend: 888,
            time: '2020-04-08'
          },
          {
            name: '香克斯',
            photo: require('../assets/img/541349163.jpeg'),
            agree: 1024,
            view: 2048,
            collect: 666,
            recommend: 888,
            time: '2020-04-08'
          }
        ],
        titles2: [{
          name: '白胡子',
          photo: require('../assets/img/541349163.jpeg'),
          agree: 1024,
          view: 2048,
          collect: 666,
          recommend: 888,
          time: '2020-04-08'
        },
          {
            name: '白胡子',
            photo: require('../assets/img/541349163.jpeg'),
            agree: 1024,
            view: 2048,
            collect: 666,
            recommend: 888,
            time: '2020-04-08'
          },
          {
            name: '白胡子',
            photo: require('../assets/img/541349163.jpeg'),
            agree: 1024,
            view: 2048,
            collect: 666,
            recommend: 888,
            time: '2020-04-08'
          },
          {
            name: '白胡子',
            photo: require('../assets/img/541349163.jpeg'),
            agree: 1024,
            view: 2048,
            collect: 666,
            recommend: 888,
            time: '2020-04-08'
          },
          {
            name: '白胡子',
            photo: require('../assets/img/541349163.jpeg'),
            agree: 1024,
            view: 2048,
            collect: 666,
            recommend: 888,
            time: '2020-04-08'
          }
        ]
      }
    },
    methods: {
      select (index) {
        if (index === 0) {
          this.titles = this.titles0
          this.title = '推荐'
        } else if (index === 1) {
          this.titles = this.titles1
          this.title = '新帖'
        } else if (index === 2) {
          this.titles = this.titles2
          this.title = '休闲一刻'
        }
        this.isSelected = index
        for (var i = 0; i < this.itemTitles.length; i++) {
          if (i === index) {
            this.itemTitles[i].isActive = true
          } else {
            this.itemTitles[i].isActive = false
          }
        }
      },
      mouseenter (index) {
        this.itemTitles[index].backadd = true
      },
      leave (index) {
        this.itemTitles[index].backadd = false
      },
      articleDesc (index) {
        this.$router.push({ path: '/articleDesc' })
      },
      famous (index) {
        this.showScore = true
      }
    },
    created () {
      this.titles = this.titles0
      this.itemTitles[0].isActive = true
    },
    components: {
      peopleDesc
    }
  }
</script>
<style scoped>
  .main {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .navigate {
    height: 90%;
    background: #FAF4E8;
    width: 20%;
    padding: 50px 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    /* border: 1px solid #ccc; */
    width: 100%;
    padding: 0;
    margin: 0;
    color: #6ECBF9
  }

  li {
    padding: 5px;
    margin: 2px 0;
    list-style: none;
    cursor: pointer;
    border-bottom: 1px solid #6ECBF9;
    width: 100%;
  }

  li img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
    /* border:  1px solid #ccc; */
  }

  .isActive {
    background: #6ECBF9;
    color: #FAF4E8;
  }

  .backadd {
    background: #6ECBF9;
    color: #FAF4E8;
  }

  .right_main {
    width: 100%;
    height: 100%;
    /* background: #6ECBF9; */
    margin-left: 10px;
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
    width: 25px;
    height: 25px;
    border-radius: 50%;
    /* margin-right: 15px; */
  }

  .hot_item {
    min-height: 60px;
    width: 86%;
    padding: 10px;
    border-bottom: 1px solid #eee;
    position: relative;
  }

  .hot_item_p {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .hot_item_title {
    font-size: 12px;
    color: #0078BD;
    cursor: pointer;
    margin-left: 5px;
  }

  .hot_item {
    display: flex;
    flex-direction: column;
  }

  .hot_content_t, .hot_items, .title_foot, .title_foot_content_item, .title_foot_content {
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

  .title {
    text-align: left;
    margin-left: 10px;
    cursor: pointer;
  }

  .title_foot {
    position: relative;
    color: #999;
    font-size: 12px;
    padding-top: 10px;
  }

  .title_foot_time {
    position: absolute;
    left: 30px;
  }

  .title_foot_content {
    position: absolute;
    right: 50px;
  }

  .title_foot_content_item {
    margin: 0 5px;
  }

  .title_foot_content_item img {
    width: 15px;
    height: 15px;
    border-radius: 0
  }
</style>
