<template>
  <!-- <div>
  简单的累加：{{count}}
  <button @click="add">+1</button>
  </div>-->
  <div>
    <h1>todos小应用</h1>
    <div>v-model数据：{{state.value}}</div>
    <input type="text" id="inp" @keyup.enter="addTodos" v-model="state.value" />
    <li 
    v-for="(i,index) in state.todos" 
    :key="i.name"
    :class="{item: i.done}"
    @click="btnClick(index)"
    >{{i.name}}</li>
    <p>完成数量：{{total}}</p>
  </div>
  <!-- <div>
  <h1>
    标题：{{state.title}}
  </h1>
  <h2>
    累加{{state.count}}
  </h2>
  <button @click="addCount">+</button>
  <div>
    <h3>x: {{x}}</h3>
      <h3>y: {{y}}</h3>
  </div>
  </div>-->
</template>

<script>
import { ref, reactive, computed } from "vue";

//用export default 导出的不用加大括号
// import { useMouse, a } from './useMouse.js';

export default {
  // setup() {
  //   /*count的数据结构
  //   {_rawValue: "10"
  //     _shallow: "false"
  //     _value: "10"
  //     value: "10"
  //     }
  //   */
  //   let count = ref(0);
  //   function add() {
  //     // console.log(count);
  //     count.value++
  //   }
  //   return { count ,add }
  // }
  setup() {
    const todos = [
      { name: "吃饭", done: false },
      { name: "喝酒", done: false },
    ];
    let state = reactive({
      todos: todos,
      value: "123",
    });
    let total = computed(() => {
      // let len = state.todos.filter(item => item.done)
      // console.log(len); 
      return state.todos.filter( item => {
        return item.done
      } ).length
    })
    function addTodos() {
      state.todos.push({
        name: state.value,
        done:false,
        color: 'red'
      })
      state.value = ''
    }
    function btnClick(index) {
      state.todos[index].done = !state.todos[index].done 
    }
  return { state, total, addTodos, btnClick}
  },
  // setup() {
  //   // let title = ref('hello');
  //   let count = ref(a);
  //   let state = reactive({
  //     count,
  //     title: 'vue3.0学习中'
  //   })
  //   let {x, y} = useMouse()
  //   function addCount() {
  //     state.count++
  //     console.log("111");
  //   };
  //   return {
  //     // title,
  //     state,
  //     addCount,
  //     x,
  //     y
  //   }
  // },
};
</script>

<style>
  .item {
    color: red;
  }
</style>
