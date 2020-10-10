<template>
  <div id="app">
    <el-table :data='num' border>
      <el-table-column prop="name" label="姓名" width="200">
      </el-table-column>

      <el-table-column prop="age" label="姓名" width="200">
      </el-table-column>

      <el-table-column prop="subject" label="姓名" width="200">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      test:[]
    }
  },
  computed:{
    num(){
      return this.$store.state.student
    }
  }
}
</script>

<style>

</style>
