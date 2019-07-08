<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">编辑英雄</h2>
        <form>
          <div class="form-group">
            <label for="name">姓名</label>
            <input type="text" class="form-control" id="name" v-model="formData.name" >
          </div>
          <div class="form-group">
            <label for="gender">性别</label>
            <!-- <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value="xxx"> -->
            <select id="gender" v-model="formData.gender" class="form-control">
                <option value="男">男</option>
                <option value="女">女</option>
            </select>
          </div>
          <button  class="btn btn-success" @click="editSend">提交</button>
        </form>
      </div>
</template>

<script>
import axios from 'axios';
export default {
    props:['id'],
    data(){
        return{
            formData:{
                name:'',
                gender:'',
                age:''
            }
        }
    },
    mounted() {
        this.editGet()
    },
    methods: {
        editGet(){
            axios.get(`http://localhost:3000/users/${this.id}`).then(response=>{
                const {status,data} = response;
                if(status == 200){
                    this.formData.name = data.name;
                    this.formData.gender = data.gender;
                }
            })
        },
        editSend(){
            axios.put(`http://localhost:3000/users/${this.id}`,this.formData).then(response=>{
                if(response.status == 200){
                    this.$router.push({name:'hero'})
                }
            }).catch(err=>{
                alert('服务器异常--edit');
                console.log(err)
            })
        }
    },
}
</script>

<style>

</style>
