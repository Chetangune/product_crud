<template>
    <div id="app">
        <Navbar />
        <div class="mt-2">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Navbar from './Navbar'
export default {
    name: 'app',
    
    components:{
        Navbar
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
