<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄管理</h2>
    <!-- <a class="btn btn-success" href="add.html">Add</a> -->
    <router-link to="/hero/additem" class="btn btn-success">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="item.id">
            <td>{{index + 1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <!-- <a href="edit.html">编辑</a> -->
              <router-link :to="'/editItem/' + item.id">编辑</router-link>
              &nbsp;&nbsp;
              <a href="javascript:" @click="delData(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// 为什么不能把它放在router.js或者main.js,其他组件也就能用了，而是每个组件都需要引入一遍

export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.axios.get("").then(respons => {
        const { status, data } = respons;
        if (status == 200) {
          this.list = data;
        } else {
          alert("服务获取失败");
        }
      }).catch(err=>{
        alert('服务器异常');
        console.log(err)
      })
console.log(this)

    },
    delData(id){
      if(!confirm('Sure to delete?')){
        return false
      }
      this.axios.delete(`/${id}`).then(response=>{
        if(response.status == 200){
          this.getData();
        }else{
          alert('删除数据失败')
        }
      }).catch(err=>{
        alert('服务器错误');
        console.log(err)
      })
    }
  }
};
</script>

<style>
</style>
