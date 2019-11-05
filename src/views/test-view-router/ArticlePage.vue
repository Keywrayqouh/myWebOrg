<template>
  <div class="article_page">
    Welcom to article number {{ $route.params.paramsId }}
  </div>
</template>

<script>
  export default {
    name: 'ArticlePage',
  }
</script>

<style scoped>
    .article_page{
        padding: 20px;
    }
</style>