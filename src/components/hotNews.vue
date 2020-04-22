<template>
  <div class='block'>
    <div class='block1' v-for="(block,index) in blocks" :key="index">
      <img class='block1Img' :src="block.img"/>
      <div class='block1Right'>
        <div class='block1Right_desc'>{{block.desc}}</div>
        <div class='block1Right_auth'>
          <div class='block1Right_auth_img'></div>
          <div class='block1Right_auth_name'>{{block.name}}</div>
          <div class='block1Right_auth_time'>{{block.time}}</div>
        </div>
        <ul class='block1Right_ul'>
          <li class='block1Right_li'>
            <div class='block1Right_li_div11'></div>
            <div class='block1Right_li_div2'>{{block.num1}}</div>
          </li>
          <div class='line'></div>
          <li class='block1Right_li'>
            <div class='block1Right_li_div12'></div>
            <div class='block1Right_li_div2'>{{block.num2}}</div>
          </li>
          <div class='line'></div>
          <li class='block1Right_li'>
            <div class='block1Right_li_div13'></div>
            <div class='block1Right_li_div2'>{{block.num3}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        blocks: [{
          name: '海军总部',
          desc: '草帽船长突现意欲何为',
          time: '今天 19:14',
          num1: '1111',
          num2: '2222',
          num3: '333',
          img: require('../assets/img/bz.jpg')
        },
          {
            name: '海军总部',
            desc: '草帽船长突现意欲何为',
            time: '今天 19:14',
            num1: '1111',
            num2: '2222',
            num3: '333',
            img: require('../assets/img/bz.jpg')
          }]
      }
    }
  }
</script>
<style>
  .block1 {
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .block1Right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
  }

  .block1Img {
    margin-right: 5px;
    width: 100px;
    height: 60px;
  }

  .block {
    width: 100%;
    background: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 5px;
  }

  .block1Right_desc {
    width: 80%;
    font-size: 14px;
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    text-align: left;
    text-overflow: ellipsis;
  }

  .block1Right_li_div11 {
    background: url('../assets/img/forword.png') no-repeat 0 0/15px 15px;
  }

  .block1Right_li_div12 {
    background: url('../assets/img/comment.png') no-repeat 0 0/15px 15px;
  }

  .block1Right_li_div13 {
    background: url('../assets/img/agree.png') no-repeat 0 0/15px 15px;
  }

  .block1Right_auth_name, .block1Right_auth_time, .block1Right_li_div2 {
    color: #999;
    font-size: 12px;
  }

  .block1Right_auth_name {
    margin: 0 5px;
  }

  .block1Right_ul, .block1Right_li {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
  }

  .block1Right_li_div11, .block1Right_li_div12, .block1Right_li_div13 {
    width: 15px;
    height: 15px;
  }

  .block1Right_auth {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .block1Right_auth_img {
    width: 20px;
    height: 20px;
    background: url('../assets/img/marine.png') no-repeat 0 0/20px 20px;
  }
</style>
