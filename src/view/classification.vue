<template>
  <div class='main'>
    <div class='title'>
      <img class='title_img' src="../assets/img/class.png"/>
      <h2 class='title_class'>分类</h2>
      <div class='title_text'>我是海贼王！！！</div>
    </div>
    <div class='classArt'>
      <div class="modules"
           @click="classRouter(index)"
           @mouseenter="mouseenter(index)"
           @mouseleave="leave(index)" v-bind:class="{'isboxShadow': module.isActive }"
           v-for="(module,index) in modules"
           :key="index">
        <img :src='module.img'/>
        <h5>{{module.title}}</h5>
        <div>{{module.desc}}</div>
      </div>
    </div>
    <svg :width='width' :height='height' @mousemove='listener($event)'>
      <a v-for='(tag,index) in tags' :key="index" @click="next(index)">
        <text :x='tag.x' :y='tag.y' :font-size='20 * (600/(600-tag.z))' :fill-opacity='((400+tag.z)/600)'>{{tag.text}}
        </text>
      </a>
    </svg>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        showScore: false,
        width: 700,
        height: 500,
        tagsNum: 20,
        RADIUS: 200,
        speedX: Math.PI / 360,
        speedY: Math.PI / 360,
        tags: [],
        modules: [{ img: require('../assets/img/article.jpg'), title: '文章', desc: '好文章好文章值得去发现值得去发现', isActive: false },
          { img: require('../assets/img/article1.jpg'), title: '视频', desc: '好文章好文章值得去发现值得去发现', isActive: false },
          { img: require('../assets/img/article2.jpg'), title: '图片', desc: '好文章好文章值得去发现值得去发现', isActive: false }
        ]
      }
    },
    computed: {

      CX () {
        return this.width / 2
      },
      CY () {
        return this.height / 2
      }
    },
    created () {
      let tags = []
      for (let i = 0; i < this.tagsNum; i++) {
        let tag = {}
        let k = -1 + (2 * (i + 1) - 1) / this.tagsNum
        let a = Math.acos(k)
        let b = a * Math.sqrt(this.tagsNum * Math.PI)
        tag.text = '点我☺跳转排行榜'
        tag.x = this.CX + this.RADIUS * Math.sin(a) * Math.cos(b)
        tag.y = this.CY + this.RADIUS * Math.sin(a) * Math.sin(b)
        tag.z = this.RADIUS * Math.cos(a)
        tag.href = ''
        tags.push(tag)
      }
      this.tags = tags
    },
    mounted () {
      setInterval(() => {
        this.rotateX(this.speedX)
        this.rotateY(this.speedY)
      }, 17)
    },
    methods: {
      next: function (index) {
        this.$router.push({ path: '/famousPeople' })
      },
      mouseenter (index) {
        this.modules[index].isActive = true
      },
      leave (index) {
        this.modules[index].isActive = false
      },
      rotateX (angleX) {
        var cos = Math.cos(angleX)
        var sin = Math.sin(angleX)
        for (let tag of this.tags) {
          var y1 = (tag.y - this.CY) * cos - tag.z * sin + this.CY
          var z1 = tag.z * cos + (tag.y - this.CY) * sin
          tag.y = y1
          tag.z = z1
        }
      },
      rotateY (angleY) {
        var cos = Math.cos(angleY)
        var sin = Math.sin(angleY)
        for (let tag of this.tags) {
          var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX
          var z1 = tag.z * cos + (tag.x - this.CX) * sin
          tag.x = x1
          tag.z = z1
        }
      },
      listener (event) {
        var x = event.clientX - this.CX
        var y = event.clientY - this.CY
        this.speedX = x * 0.0001 > 0 ? Math.min(this.RADIUS * 0.00002, x * 0.0001) : Math.max(-this.RADIUS * 0.00002, x * 0.0001)
        this.speedY = y * 0.0001 > 0 ? Math.min(this.RADIUS * 0.00002, y * 0.0001) : Math.max(-this.RADIUS * 0.00002, y * 0.0001)
      },
      classRouter (index) {
        if (index === 0) {
          this.$router.push({ path: '/article' })
        }
      }
    }
  }
</script>
<style scoped>
  a {
    cursor: pointer;
  }

  .main {
    padding: 0 5%;
    width: 100%;
    text-align: center;
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

  .modules {
    cursor: pointer;
    margin: 50px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 26%;
    padding-bottom: 40px;
    background: #F7F7F7;
    border-radius: 10px;
    box-shadow: 3px 3px 2px #ccc;
  }

  .modules img {
    height: 150px;
    width: 100%;
    border-radius: 10px 10px 0 0;
  }

  h5 {
    margin: 25px;
    font-weight: bold;
  }

  .modules div {
    padding: 0 40px;
    font-size: 14px
  }

  .classArt {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
