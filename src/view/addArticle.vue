<template>
  <div class="template">
    <div class="main">
      <div class="a_title">
        <h5>标题：</h5>
        <el-input placeholder="请输入文章标题" v-model="inputv" style="width:70%;" id='title'></el-input>
      </div>
      <div class="a_title">
        <h5>标签：</h5>
        <div id="label_item" class="a_label_item" v-for='(item,index) in items' :key='index' @click="selected(index)"
             v-bind:class="{'isActive': item.isActive }">{{item.name}}
        </div>
      </div>
      <div class="a_title">
        <h5>图片：</h5>
        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"
                   :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
      <div class="a_title">
        <h5>内容：</h5>
        <el-input placeholder="请输入文章内容" type="textarea" v-model="inputa" style="width:70%;"></el-input>
      </div>
      <div class="a_title" style="">
        <el-button type="primary">确定</el-button>
         <el-button class='el-dialog__close'>关闭</el-button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        inputv: '',
        inputa: '',
        dialogImageUrl: '',
        dialogVisible: false,
        items: [
          { isActive: false, name: '热血' },
          { isActive: false, name: '热血' },
          { isActive: false, name: '热血' },
          { isActive: false, name: '热血' },
          { isActive: false, name: '热血' }]
      }
    },
    methods: {
      selected (index) {
        this.items[index].isActive = !this.items[index].isActive
      },
      handleRemove (file, fileList) {
        console.log(file, fileList)
      },
      handlePictureCardPreview (file) {
        this.dialogImageUrl = file.url
        this.dialogVisible = true
      }
    }
  }
</script>
<style scoped>
  .template {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #f7f7f7;
  }

  .main {
    min-height: 300px;
    background: #f7f7f7;
    border-radius: 10px;
    padding: 30px;
  }

  .a_title {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
    flex-wrap: wrap;
  }

  .a_label_item {
    padding: 2px 10px;
    border-radius: 5px;
    margin: 0 5px;
    background: #ccc;
    cursor: pointer;
  }

  .isActive {
    background: #6ECBF9;
    color: #fff;
  }

</style>
