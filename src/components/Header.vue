<template>
    <div class="header">
        <router-link class="navBtn" to="/" tag="div">Home</router-link>
        <router-link class="navBtn" to="/if-example" tag="div">About</router-link>
       
    </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped>
    .header{
        background-color: var(--main-dark-bg-color);
        color: var(--txt-inverse-color);
        font-size: 16px;
        display: flex;
        height: 50px;
        
    }
    
    .navBtn{
        margin: 15px;
    }

    .navBtn:hover{
        cursor: pointer;
    }
</style>