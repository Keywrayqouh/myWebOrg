<template>
  <div class="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue'

  export default {
    name: 'app',
    components: {
      Header
    }
  }
</script>

<style>
  .body{
    margin: 0px;
  }
  .app{
    height: 100vh;
  }
</style>