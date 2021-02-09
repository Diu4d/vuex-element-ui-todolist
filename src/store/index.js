import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    student:[
      {name:'jake',age:18,subject:'math'},
      {name:'mike',age:18,subject:'english'},
      {name:'jim',age:18,subject:'computer'},
      {name:'noke',age:18,subject:'chinese'},
      {name:'lise',age:18,subject:'historys'},
      {name:'nam',age:18,subject:'football'},
      {name:'luke',age:18,subject:'baseball'},
    ]
  },
  getters:{
    getStuNum(state){
      return state.student.length
    }
  },
  mutations: {
    addStudent(state,stu){
      state.student.push(stu)
    },
    delstudent(state,id){
      state.student.splice(id,1)
    }
  },
  actions: {
  },
  modules: {
  }
})
