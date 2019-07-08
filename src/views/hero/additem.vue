<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">添加英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">姓名</label>
            <input type="text" class="form-control" id="name" placeholder="姓名" v-model="formData.name" />
          </div>
          <div class="form-group">
            <label for="gender">性别</label>
            <select class="form-control" v-model="formData.gender" >
                <option value="男">男</option>
                <option value="女">女</option>
            </select>
          </div>
          <button class="btn btn-success" @click="addHero(formData)">提交</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
    data(){
        return {
            formData:{
                name:'',
                gender:'',
                age:''
            }
        }
    },
  methods: {
    addHero() {
        this.axios.post('',this.formData).then(respons=>{
            if(respons.status == 201){
                this.$router.push('/hero')
            }
        }).catch(err=>{
            alert('服务器异常--add');
            console.log(err)
        })
    }
  }
};
</script>

<style>
</style>
