<template>
  <div class="componentC">
    <button class= "btn" v-on:click="$emit('add', increment)">
      Add {{ increment }}
    </button>
  </div>
</template>

<script>
  export default {
    name: 'ComponentC',
    props: {
      increment: Number
    }
  }
</script>

<style scoped>
    .componentC{
        border: 1px solid grey;
    }

    .btn{
        margin: 10px;
    }
</style>