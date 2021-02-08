<template>
  <div id="app">

    <el-table :data="student" border style="width:55%">

      <el-table-column type="index" label="学号" width="150">
      </el-table-column>

      <el-table-column prop="name" label="姓名" width="200">
      </el-table-column>

      <el-table-column prop="age" label="年龄" width="200">
      </el-table-column>

      <el-table-column prop="subject" label="专业" width="200">
      </el-table-column>

    </el-table>
      <h2>当前系统学生人数为:{{getStuNum}}人</h2>

      <el-form label-width="50px" :model="newStu">
      <el-form-item label="姓名"><el-input v-model="newStu.name" placeholder="请输入姓名" style="width:200px" /></el-form-item>
      <el-form-item label="年龄">
        <el-input
        onkeyup="(this.v=function(){this.value=this.value.replace(/[^0-9-]+/,'');}).call(this)"
         onblur="this.v();" 
         v-model="newStu.age" 
         placeholder="请输入年龄" 
         style="width:200px" /></el-form-item>
      <el-form-item label="专业"><el-input v-model="newStu.subject" placeholder="请输入专业" style="width:200px" /></el-form-item>
      <el-button type="primary" @click="addstu">添加学生信息</el-button>
      <el-button type="danger" @click="delstu">删除学生信息</el-button>
    </el-form>
  </div>
</template>

<script>
  import { mapGetters, mapState } from 'vuex'
export default {
  name: 'App',
  data(){
    return{
      newStu:{
        name:'',
        age:'',
        subject:''
      }
    }
  },
  methods:{
    addstu(){
      const stu = this.newStu
      console.log(stu);
      this.$store.commit('addStudent',stu)
    },
    delstu(){
      this.$store.commit('delstudent')
      let child = this.$refs.eltable
      console.log(child);
    }
  },
  computed:{
    ...mapState(['student']),
    ...mapGetters(['getStuNum'])
  },
  mounted(){
    let parentTable = this.$refs.eltable
    console.log(parentTable);
  }
}
</script>

<style>

</style>
