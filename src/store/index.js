import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter:1000,
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
    students(state){
      return state.student
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
