<template>
  <div class="router_example">
    <!-- Go to the test page -->
    <router-link to="/test">Go to Test Page</router-link>
    <router-link :to="{ name: 'test'}">Go to Test Page</router-link>
    
    <!-- Go to the article page with a params-->
    <router-link :to="{ name: 'article', params: { paramsId: articleId }}">
         Go to the article number {{ articleId }}
    </router-link>

    <button v-on:click="goToSeeArticle">
        Go to the article number {{ articleId }}
    </button>
  </div>
</template>

<script>
  export default {
    name: 'RouterExample',
    data(){
      return{
        articleId : 16
      }
    },
    methods: {
      goToSeeArticle() {
       this.$router.push({ name: 'article', params: { paramsId: this.articleId }})
      },
    }
  }
</script>

<style scoped>
    .router_example{
        padding: 20px;
        display: flex;
        flex-direction: column
    }
</style>