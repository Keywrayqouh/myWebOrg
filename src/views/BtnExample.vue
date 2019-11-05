<template>
  <div class="btn_example">
    <button v-on:click="counter += 1">Add 1</button>
    <p>You click {{ counter }} times on the button.</p>
  </div>
</template>

<script>
  export default {
    name: 'BtnExample',
    data(){
      return{
        counter: 0
      }
    }
  }
</script>

<style scoped>
    .btn_example{
        padding: 20px;
    }
</style>