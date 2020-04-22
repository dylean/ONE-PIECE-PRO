<template>
  <div class="main">
    <div class="box">
      <div class="box_left">
        <img class="photoBg" :src="photo"/>
      </div>
      <div class="box_right">
        <div class="desc">{{desc}}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        photo: require('../assets/img/541349163.jpeg'),
        desc: '17岁以成为“海贼王”为目标出海创立黑桃海贼团而名扬天下，曾一度被世界政府邀请加入王下七武海，在败给白胡子后被其人格魅力折服，成为白胡子海贼团第二队队长，后被黑胡子击败，并且由海军关押在海底大监狱，成为“顶上战争”的导火索。顶上战争因为保护路飞用身体挡下了海军大将赤犬的岩浆拳攻击陷入濒死状态，临死前明悟了自己生存的意义，最终含笑而逝。'
      }
    }
  }
</script>
<style scoped>
  .main {
    font-family: '楷体';
    position: relative;
    width: 100%;
    height: 600px;
    background: url('../assets/img/8fb740fea5500d0be1b7277b2a9a6757.jpg') no-repeat 0/100% 90%;
  }

  .box {
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 185px;
    left: 160px;
    width: 60%;
    height: 50%;
    -o-transform: rotate(10deg); /* Opera浏览器 */
    -webkit-transform: rotate(6deg); /* Webkit内核浏览器 */
    -moz-transform: rotate(10deg); /* Firefox浏览器 */
  }

  .box_left {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 20px;
  }

  .box_right {
    width: 50%;
    height: 100%;
  }

  .photoBg {
    width: 40%;
    height: 30%;
    border-radius: 50%;
  }

  .header {
    width: 100%;
    height: 30%;
    border: none;
    background: #C6C5CB;
    padding: 30px;
  }

  .header img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid #fff;
  }

  .desc {
    padding: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 14;
    -webkit-box-orient: vertical;
  }
</style>
