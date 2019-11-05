<template>
  <div class="btn_with_methods_example">
    <button v-on:click="btn1Clicked">Add 1</button>
    <button v-on:click="btn2Clicked(5)">Add 5</button>
    Counter : {{counter}}
  </div>
</template>

<script>
  export default {
    name: 'BtnWithMethodExample',
    data(){
      return{
        counter: 0
      }
    },
     methods: {
      btn1Clicked() {
        this.counter ++;
      },
      btn2Clicked(arg) {
        this.counter = arg + this.counter;
      }
    }
  }
</script>



<style scoped>
    .btn_with_methods_example{
        padding: 20px;
    }
</style>