<template>
  <div class='main'>
    <el-dialog :visible.sync="showScore" title="人物简介">
      <peopleDesc/>
    </el-dialog>
    <!-- ...  -->
    <el-dialog :visible.sync="isShown">
      <div class="answerMsg">
        <el-input placeholder="留言" v-model="inputv"/>
        <el-button type="primary">确定</el-button>
      </div>
    </el-dialog>
    <!-- ...  -->
    <div class='title'>
      <img class='title_img' src="../assets/img/mseBoard.png"/>
      <h2 class='title_class'>留言板</h2>
      <div class='title_text'>海贼王我当定了！！！</div>
    </div>
    <!-- ...  -->
    <div class="write" @click="changeStatus">
      <img src="../assets/img/pen.png"/>
    </div>
    <!-- ... -->
    <div class="msgBoard_items" v-for="(msg,index) in msgs" :key="index">
      <div class="msgBoard_item">
        <div class="msgBoard_item_p">
          <img :src="msg.authPhoto" @click="famous(index)"/>
          <div class="msgBoard_item_w">
            <div class="msgBoard_item_p_name">{{msg.authName}}</div>
            <div class="msgBoard_item_p_time">{{msg.time}}</div>
          </div>
        </div>
      </div>
      <div class="msgBoard_item">
        <div class="msgBoard_item_content">{{msg.authMsg}}</div>
      </div>
      <div class="msgBoard_item">
        <el-input placeholder="回复" v-model="response"/>
      </div>
      <div class="msgBoard_item">
        <div class="msgBoard_msgs">
          <div class="msgBoard_msgs_name">{{msg.youName}}：</div>
          <div class="msgBoard_msgs_desc">{{msg.youMsg}}</div>
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
        response: '',
        inputv: '',
        showScore: false,
        isShown: false,
        msgs: [{
          authName: 'Ace',
          time: '2020-04-20',
          authPhoto: require('../assets/img/541349163.jpeg'),
          authMsg: '路飞，我听老爹说了你的消息',
          youName: '路飞',
          youMsg: '艾斯，你啥时候回来啊。。'
        },
          {
            authName: 'Ace',
            time: '2020-04-20',
            authPhoto: require('../assets/img/541349163.jpeg'),
            authMsg: '路飞，我听老爹说了你的消息',
            youName: '路飞',
            youMsg: '艾斯，你啥时候回来啊。。'
          }
        ]
      }
    },
    components: {
      peopleDesc
    },
    methods: {
      changeStatus: function () {
        this.isShown = true
      },
      famous (index) {
        this.showScore = true
      }
    }
  }
</script>
<style scoped>
  .main {
    width: 100%;
    height: 120vh;
    padding: 0 5%;
  }

  .answerMsg {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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

  .write {
    width: 60px;
    height: 60px;
    background: #6ECBF9;
    position: fixed;
    right: 16%;
    top: 500px;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
  }

  .write img {
    width: 100%;
    height: 100%;
  }

  .msgBoard_items {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }

  .msgBoard_item {
    width: 90%;
    /* height: 10%; */
    background: #eee;
    /* border-radius: 5px; */
    text-align: center;
    padding: 5px 30px;
  }

  .msgBoard_item_content {
    width: 100%;
    min-height: 100px;
    background: #f7f7f7;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .msgBoard_item_p img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
  }

  .msgBoard_item_p {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #fff
  }

  .msgBoard_item_w {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .msgBoard_msgs {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 14px;
  }

  /* .msgBoard_msgs_name{} */
  .msgBoard_item_w div {
    font-size: 14px;
  }

  .msgBoard_item_p_name, .msgBoard_msgs_name {
    color: #0078BD;
    cursor: pointer;
  }

  .msgBoard_item_p_time, .msgBoard_msgs_desc {
    color: #888;
  }
</style>
