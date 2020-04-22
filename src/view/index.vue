<template>
  <div>
    <div class='main'>
      <!-- 中间 -->
      <div class='mainNav'>
        <!-- 轮播 -->
        <div class='navBar'>
          <div class="lunbo-box">
            <el-carousel indicator-position="none">
              <el-carousel-item class="lunbo-box-item" v-for="(item,index) in abc_img" :key="index">
                <img :src="item.src" class="lunbotu" alt="轮播图">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class='navDiv'>
            <div class='navDiv1' v-for="(title,index) in titles" :key="index" @click="articleDesc(index)">
              <img :src="title.img" @mouseenter="mouseenter(index)" @mouseleave="leave(index)"/>
              <div class='navTitle' id="navTitle1" v-bind:class="{'showTitle': title.isActive }">#{{title.title}}#</div>
            </div>
          </div>
        </div>
        <!-- 播报 -->
        <div class='broadcast'>
          <div class='clock'></div>
          <div id="flip">
            <div v-for="(flip,index) in flips" :key="index" @click="articleDesc(index)">
              <div>{{flip.desc}}</div>
            </div>
          </div>
        </div>
        <!-- 标题 -->
        <div class='fafafa'></div>
        <div class='more'>
          <div style="font-weight:bold">热门话题</div>
          <div class='el-icon-refresh more1'>换一批</div>
        </div>
        <div class='fafafa'></div>
        <!-- ... -->
        <hotNews/>
        <!-- 标题 -->
        <div class='fafafa'></div>
        <div class='more'>
          <div style="font-weight:bold">精选</div>
          <div class='el-icon-refresh more1'>换一批</div>
        </div>
        <div class='fafafa'></div>
        <!-- 精选 -->
        <carefulChosen/>
      </div>
    </div>
  </div>
</template>
<script>
  import hotNews from '@/components/hotNews'
  import carefulChosen from '@/components/carefulChosen'

  export default {
    data () {
      return {
        titles: [
          {
            img: require('../assets/img/541349162.jpeg'),
            title: '谁是今年最有潜力的海贼王选手',
            isActive: true
          },
          {
            img: require('../assets/img/541349163.jpeg'),
            title: '最优秀海贼奖花落谁家',
            isActive: true
          }
        ],
        flips: [
          { desc: '终于到来的激战 猛攻路飞VS凯多' },
          { desc: '破坏性极强！一击必杀的雷鸣八卦！' },
          { desc: '全员消灭 凯多愤怒的龙息！' }
        ],
        abc_img: [
          { src: require('../assets/img/640311224.jpeg') },
          { src: require('../assets/img/649879615.jpeg') },
          { src: require('../assets/img/0191231160115.jpg') }
        ],
      }
    },
    components: {
      hotNews,
      carefulChosen
    },
    methods: {
      mouseenter (index) {
        this.titles[index].isActive = false
      },
      leave (index) {
        this.titles[index].isActive = true
      },
      articleDesc (index) {
        console.log(index)
        this.$router.push({ path: '/articleDesc' })
      }
    },
    created () {
      console.log($)
    }
  }
</script>
<style>
  body {
    background: #fafafa
  }

  .mainNav {
    padding: 0 5%;
    background: #fff
  }

  .lunbo-box {
    width: 80%;
  }

  .lunbotu {
    height: 40vh;
    width: 100%;
  }

  .broadcast {
    width: 100%;
    height: 30px;
    background: #fff;
  }

  /* 文字公告 */
  .broadcast {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .clock {
    width: 20px;
    height: 20px;
    background: url('../assets/img/clock.png') no-repeat 0px 0px/20px 20px;
    margin: 0 10px;
  }

  #flip {
    height: 30px;
    overflow: hidden;
    cursor: pointer;
  }

  #flip > div > div {
    color: #F6BA77;
    height: 45px;
    margin-bottom: 45px;
    display: inline-block;
    font-size: 14px;
  }

  #flip div:first-child {
    animation: show 10s linear infinite;
  }

  @keyframes show {
    0% {
      margin-top: -270px;
    }
    5% {
      margin-top: -180px;
    }
    33% {
      margin-top: -180px;
    }
    38% {
      margin-top: -90px;
    }
    66% {
      margin-top: -90px;
    }
    71% {
      margin-top: 0px;
    }
    99.99% {
      margin-top: 0px;
    }
    100% {
      margin-top: -270px;
    }
  }

  .navBar {
    display: flex;
    flex-direction: row;

  }

  .navDiv {
    width: 20%;
    display: flex;
    flex-direction: column;
    height: 40vh;
  }

  .navDiv1 {
    width: 100%;
    height: 50%;
    position: relative;
    cursor: pointer;
  }

  .navDiv1 img {
    width: 100%;
    height: 100%;
  }

  .navTitle {
    background: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    position: absolute;
    bottom: 0;
    width: 100%;
    color: #fff;
    padding: 5px;
  }

  .showTitle {
    display: none
  }

  li {
    list-style-type: none;
  }

  ul {
    list-style-type: disc;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0;
  }

  .line {
    border-right: 2px solid #ccc;
    width: 2px;
    height: 10px;
    margin: 0 5px;
  }

  .more {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
    background: #fff;
    padding: 5px;
    width: 100%;
    position: relative;
  }

  .more1 {
    position: absolute;
    right: 0;
    margin-right: 20px;
    cursor: pointer;
  }

  .authPhoto {
    width: 30px;
    height: 30px;
    /* border: 1px solid #ccc; */
    border-radius: 50%;
    margin: 5px;
  }

  .fafafa {
    width: 100%;
    height: 2px;
    background: #fafafa
  }
</style>
