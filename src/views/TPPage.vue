<template>
  <div class="btn_with_methods_example">
    <div>
        <b> Exercice number 1: </b>
        <div>
            GET
            <button v-on:click="getTest">Request</button>
            {{getResponse}}
        </div>
    
        <div>
            Get a message with the parameters in the url
            <button v-on:click="getByIdTest">Request</button>
            {{getByIDResponse}}
        </div>

        <div>
            POST
            <button v-on:click="postTest">Request</button>
            {{postResponse}}
        </div>

        <div>
            PUT
            <button v-on:click="putTest">Request</button>
            {{putResponse}}
        </div>

        <div>
            DELETE
            <button v-on:click="deleteTest">Request</button>
            {{deleteResponse}}
        </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'TPPage',
    data(){
      return{
        getResponse: null,
        getByIDResponse: null,
        postResponse: null,
        putResponse: null,
        deleteResponse: null
      }
    },
     methods: {
      getTest() {
        this.axios
        .get('http://localhost:3436/api/students')
        .then(response => this.getResponse = response.data)
      },
      getByIdTest() {
        this.axios
        .get('http://localhost:3436/api/students/19')
        .then(response => (this.getByIDResponse = response.data))
      },
      postTest(){
          this.axios
            .post('http://localhost:3436/api/students/19', {})
            .then(response => (this.postResponse = response.data))
      },
      putTest(){
          this.axios
            .put('http://localhost:3436/api/students/19')
            .then(response => (this.putResponse = response.data))
      },
      deleteTest(){
          this.axios
            .delete('http://localhost:3436/api/students/19')
            .then(response => (this.deleteResponse = response.data))
      }
    }
  }
</script>



<style scoped>
    .btn_with_methods_example{
        padding: 20px;
    }
</style>