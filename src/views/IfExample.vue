<template>
  <div class="if_example">
    <p v-if="isMorning"> {{ morningMessage }} </p>
    <p v-if="isAfternoon"> {{ afternoonMessage }} </p>
  </div>
</template>

<script>
  export default {
    name: 'IfExample',
    data(){
      return{
        isMorning : false,
        morningMessage :'Mayong Buntag',
        isAfternoon : true,
        afternoonMessage :'Mayong Hapon'
      }
    }
  }
</script>

<style scoped>
    .if_example{
        padding: 20px;
    }
</style>