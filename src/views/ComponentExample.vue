<template>
  <div class="component_example">
    <ComponentA/>
    <ComponentA/>

    <ComponentB v-bind:name="'Marine'"/>
    <ComponentB v-bind:name="'Julia'"/>

    <ComponentC v-bind:increment="increment5" v-on:add='add'/>
    <ComponentC v-bind:increment="increment20" v-on:add='add'/>

    {{counter}}
  </div>
</template>

<script>
  // @ is an alias to /src
  // Import my components
  import ComponentA from '@/components/ComponentA.vue'
  import ComponentB from '@/components/ComponentB.vue'
  import ComponentC from '@/components/ComponentC.vue'

  export default {
    name: 'ComponentExample',
    data(){
      return{
        counter: 0,
        increment5: 5,
        increment20: 20
      }
    },
    components: {
      ComponentA,
      ComponentB,
      ComponentC
    },
     methods: {
      add(arg) {
        this.counter =this.counter + arg;
      },
    }
  }
</script>

<style scoped>
    .component_example{
        padding: 20px;
        display: grid;
        grid-gap: 10px;
    }

</style>
