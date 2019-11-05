<template>
  <div class="for_example">
    <ul>
        <li v-for='todo in todos' v-bind:key="todo.text"> 
            {{ todo.text }}
        </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ForExample',
    data(){
      return{
        todos:[
            {text: 'Learn JS'},
            {text: 'Learn Vue.js'},
            {text: 'Create web application'},
        ]
      }
    }
  }
</script>

<style scoped>
    .for_example{
        padding: 20px;
    }
</style>