<template>
  <div class="componentB">
    Hello {{name}}
  </div>
</template>

<script>
  export default {
    name: 'ComponentB',
    props: {
      name: String
    }
  }
</script>

<style scoped>
    .componentB{
        border: 1px solid grey;
    }
</style>